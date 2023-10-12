import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TailwindIndicator } from '@packages/ui';
import { siteConfig } from '@packages/config/site';

import '@packages/ui/styles/globals.css'; // I added the @

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <TailwindIndicator />
        {children}
      </body>
    </html>
  );
}
