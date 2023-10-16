import type { SanityDocument } from 'next-sanity';
import LegalPage from '~/app/_components/LegalPage';
import { postQuery } from '~/sanity/lib/queries';
import { sanityFetch } from '~/sanity/lib/sanityFetch';
import { PreviewWrapper } from '~/app/_components/Preview/PreviewWrapper';

export default async function Page({ params }: { params: any }) {
  const data = await sanityFetch<SanityDocument>({ query: postQuery, params });

  return (
    <PreviewWrapper
      initialData={data}
      query={postQuery}
      params={params}
    >
      <LegalPage />
    </PreviewWrapper>
  );
}
