'use client';

// import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';
import type { SanityDocument } from 'next-sanity';
// import { PortableText } from "@portabletext/react";
import { client } from '~/sanity/client';

const builder = imageUrlBuilder(client);

export default function LegalPost({ data }: {
  data?: SanityDocument
}) {
  if (!data) {
    console.error(`LegalPage data empty: ${JSON.stringify(data)}`);
    return null;
  }

  return (
    <div className="container mx-auto prose prose-lg p-4">
      <h1>{data.title}</h1>

      {/*{post?.mainImage ? (*/}
      {/*  <Image*/}
      {/*    className="float-left m-0 w-1/3 mr-4 rounded-lg"*/}
      {/*    src={builder.image(post.mainImage).width(300).height(300).url()}*/}
      {/*    width={300}*/}
      {/*    height={300}*/}
      {/*    alt={post?.mainImage?.alt}*/}
      {/*  />*/}
      {/*) : null}*/}
      {/*{post?.body ? <PortableText value={post.body} /> : null}*/}
    </div>
  );
}
