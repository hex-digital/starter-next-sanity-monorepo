import { Suspense } from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import { TailwindIndicator } from '@packages/ui';
import { siteConfig } from '@packages/config/site';
import { token } from "~/sanity/lib/sanityFetch";

import '@packages/ui/styles/globals.css';
import { draftMode } from 'next/headers';

const PreviewProvider = dynamic(() => import('../_components/Preview/PreviewProvider'))
const PreviewBar = dynamic(() => import('../_components/Preview/PreviewBar/PreviewBar'));

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  const isDraftMode = draftMode().isEnabled;
  const preview = isDraftMode && token;

  const content = (
    <>
      <TailwindIndicator />
      <main>
        {children}
      </main>
      {preview && <PreviewBar/>}
    </>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        {preview
          ? (
            <Suspense fallback={content}>
              <PreviewProvider token={token}>{content}</PreviewProvider>
            </Suspense>
          )
          : content
        }
      </body>
    </html>
  );
}
