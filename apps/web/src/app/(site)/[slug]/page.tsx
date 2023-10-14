import type { SanityDocument } from "next-sanity";
import LegalPage from "~/app/_components/LegalPage";
import { postPathsQuery, postQuery } from "~/sanity/lib/queries";
import { sanityFetch } from "~/sanity/lib/sanityFetch";
import { client } from "~/sanity/client";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });

  return <LegalPage post={post} />;
}
