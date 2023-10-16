import { SanityDocument } from "next-sanity";
import { postsQuery } from "~/sanity/lib/queries";
import { sanityFetch, token } from "~/sanity/lib/sanityFetch";
import LegalPages from "~/app/_components/LegalPages";
import { PreviewWrapper } from '../_components/Preview/PreviewWrapper';

export default async function Home() {
  const data = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <PreviewWrapper
      initialData={data}
      query={postsQuery}
    >
      <LegalPages />
    </PreviewWrapper>
  );
}
