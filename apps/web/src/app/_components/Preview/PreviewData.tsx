'use client';

import { Slot } from '@radix-ui/react-slot';
import type { QueryParams } from 'next-sanity';
import { useLiveQuery } from 'next-sanity/preview';
import { PropsWithChildren } from 'react';

type PreviewDataProps<T = any> = PropsWithChildren<{
  initialData: T
  query: string
  params: QueryParams
}>

// Browser-only preview component
export function PreviewData<T = any>(props: PreviewDataProps<T>) {
  const { initialData, query, params = {}, ...rest } = props;
  const [data] = useLiveQuery(initialData, query, params);

  const previewProps = { ...rest, data };

  return <Slot {...previewProps} />;
}
