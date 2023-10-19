/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

const previewSecretId: `${string}.${string}` = 'preview.secret';

export type Options = typeof options;

export const options = {
  dataset: assertValue(
    process.env.SANITY_STUDIO_SANITY_DATASET,
    'Missing environment variable: SANITY_STUDIO_SANITY_DATASET',
  ),

  projectId: assertValue(
    process.env.SANITY_STUDIO_SANITY_PROJECT_ID,
    'Missing environment variable: SANITY_STUDIO_SANITY_PROJECT_ID',
  ),

  // see https://www.sanity.io/docs/api-versioning for how versioning works
  apiVersion: process.env.SANITY_STUDIO_SANITY_API_VERSION || '2023-10-16',

  title: process.env.SANITY_STUDIO_SANITY_PROJECT_TITLE || 'Sanity',

  preview: {
    domain: assertValue(
      process.env.SANITY_STUDIO_PREVIEW_DOMAIN,
      'Missing environment variable: SANITY_STUDIO_PREVIEW_DOMAIN',
    ),
    base: '/api/draft',
    // This is the document id used for the preview secret that's stored in your dataset.
    // The secret protects against unauthorized access to your draft content and have a lifetime of 60 minutes, to protect against bruteforcing.
    secretId: previewSecretId,
  },

  // See the app/api/revalidate/route.ts for how this is used
  revalidateSecret: process.env.SANITY_STUDIO_SANITY_REVALIDATE_SECRET,
}


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
