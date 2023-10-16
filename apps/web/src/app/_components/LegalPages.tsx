'use client';

import Link from "next/link";
import type { SanityDocument } from "next-sanity";

export default function Posts({ data = [] }: { data?: SanityDocument[] }) {
  if (!data) {
    console.error(`LegalPages data empty: ${JSON.stringify(data)}`);
    return null;
  }

  const title = data.length === 1 ? `1 Post`  : `${data.length} Posts`;

  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <h1 className="text-2xl p-4 font-bold">{title}</h1>
      {data.map((post) => (
        <Link
          key={post._id}
          href={post.slug.current}
          className="p-4 hover:bg-blue-50"
        >
          <h2>{post.title}</h2>
        </Link>
      ))}
    </main>
  );
}
