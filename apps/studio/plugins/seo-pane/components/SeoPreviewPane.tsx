import { useEffect, useState } from 'react';
import { GoogleSearchResult } from './previews/GoogleSearchResult/GoogleSearchResult';
import { TwitterCardPreview } from './previews/TwitterCardPreview/TwitterCardPreview';
import { FacebookSharePreview } from './previews/FacebookSharePreview/FacebookSharePreview';
// import FacebookShare from './previews/FacebookSharePreview';
import { options as opts } from '../../../config/options';

import { useClient } from 'sanity';
import { SINGLETON } from '@packages/studio';
import { combineSeo } from '../utils/combineSeo';

export function SeoPreviewPane({ options, document }) {
  const sanityClient = useClient({ apiVersion: opts.apiVersion });

  const { displayed } = document;
  const [defaultSeo, setDefaultSeo] = useState({});

  useEffect(() => {
    let shouldUpdateSeo = true;

    async function getDefaultSeo() {
      // Site Title + Site Url?
      const seo = await sanityClient.fetch(`
        *[_type == "${SINGLETON.CONFIG_SEO}"][0] {
          seoSocial,
          favicon,
          siteTitle,
          siteUrl,
          titleSeparator,
          withSiteTitle,
        }
      `);
      if (shouldUpdateSeo) {
        setDefaultSeo(seo);
      }
    }

    getDefaultSeo().catch(console.error);

    return () => {
      shouldUpdateSeo = false;
    };
  }, [document]);

  const { seoSocial, slug } = displayed;

  const seo = combineSeo(
    {
      ...defaultSeo,
      ...defaultSeo.seoSocial,
    },
    {
      ...seoSocial,
    },
    slug?.current, // need to resolve this properly
  );

  return (
    <>
      {/*<pre>{JSON.stringify(defaultSeo, null, 2)}</pre>*/}
      <GoogleSearchResult seo={seo} />
      <TwitterCardPreview seo={seo} />
      <FacebookSharePreview seo={seo} />
    </>
  );
}
