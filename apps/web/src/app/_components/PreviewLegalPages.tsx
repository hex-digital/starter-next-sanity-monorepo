"use client";

import type { SanityDocument } from "next-sanity";
import { useLiveQuery } from 'next-sanity/preview';
import LegalPages from "~/app/_components/LegalPages";
import { postsQuery } from "~/sanity/lib/queries";

export default function PreviewLegalPages({
  posts = [],
}: {
  posts: SanityDocument[];
}) {
  const [data] = useLiveQuery(posts, postsQuery);

  return <LegalPages posts={data} />;
}
