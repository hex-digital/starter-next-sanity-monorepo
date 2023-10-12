import {
  apiVersion,
  dataset,
  projectId,
  revalidateSecret,
} from '~/sanity/config/options';
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // If webhook revalidation is set up we want the freshest content. If not then it's best to use the speedy CDN
  useCdn: !revalidateSecret,
  perspective: 'published',
});
