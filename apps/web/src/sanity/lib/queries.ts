import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "legalPages" && defined(slug['current'])]{
    _id, title, slug
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "legalPages" && slug['current'] == $slug][0]{
    _id, title, slug
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "legalPages" && defined(slug['current'])][]{
    "params": { "slug": slug.current }
  }`;
