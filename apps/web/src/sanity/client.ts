import {
  apiVersion,
  dataset,
  projectId,
  revalidateSecret,
  studioUrl,
} from '~/sanity/config/options';
import { createClient } from 'next-sanity';

// Shared on the server and the browser
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // If webhook revalidation is set up we want the freshest content. If not then it's best to use the speedy CDN
  useCdn: false, //!revalidateSecret,
  perspective: 'published',
  logger: process.env.ENVIRONMENT === 'production' ? undefined : console,
  // See: https://github.com/sanity-io/preview-kit#encodesourcemap
  encodeSourceMap: 'auto', // Turn on in Vercel preview mode, turn off in Production
  studioUrl,
});
