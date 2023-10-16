import 'server-only';

import type { QueryParams } from 'next-sanity';
import { draftMode } from 'next/headers';
import { client } from '~/sanity/client';

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN || '';

// Utility for fetching data on the server, that can toggle between published and preview drafts
export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (isDraftMode && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required.'
    );
  }

  return client
    .fetch<QueryResponse>(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : 'force-cache',
      ...(isDraftMode && {
        useCdn: false, // Not sure if we need this? Look more into useCdn
        token: token,
        perspective: 'previewDrafts',
      }),
      next: {
        ...((isDevelopment || isDraftMode) && { revalidate: 0 }),
        tags,
      },
    });
}
