import { SanityDocument } from "next-sanity";
import { draftMode } from 'next/headers';
import { postsQuery } from "~/sanity/lib/queries";
import { sanityFetch, token } from "~/sanity/lib/sanityFetch";
import LegalPages from "~/app/_components/LegalPages";
import PreviewLegalPages from '~/app/_components/PreviewLegalPages';

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <>
        <div>Preview</div>
        <PreviewLegalPages posts={posts} />
      </>
    );
  }

  return <LegalPages posts={posts} />;
}
