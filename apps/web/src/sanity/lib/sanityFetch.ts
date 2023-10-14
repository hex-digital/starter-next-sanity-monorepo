import 'server-only';

import type { QueryParams } from 'next-sanity';
import { draftMode } from 'next/headers';
import { client } from '~/sanity/client';

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN || '';

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
        token: token,
        perspective: 'previewDrafts',
      }),
      next: {
        ...(isDraftMode && { revalidate: 30 }),
        tags,
      },
    });
}
