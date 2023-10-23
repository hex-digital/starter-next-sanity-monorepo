import { useEffect, useState } from 'react';
import { useClient } from 'sanity';
import { BsGoogle, BsFacebook } from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import { SINGLETON } from '@packages/studio';
import type { SeoData, SeoSocialData } from '@packages/studio/types';
import { GoogleSearchResult } from './previews/GoogleSearchResult/GoogleSearchResult';
import { TwitterCardPreview } from './previews/TwitterCardPreview/TwitterCardPreview';
import { FacebookSharePreview } from './previews/FacebookSharePreview/FacebookSharePreview';
import { options as opts } from '../../../config/options';
import { combineSeo } from '../utils/combineSeo';
import { SeoPreviewCard } from './SeoPreviewCard';

interface Props {
  document: {
    displayed: {
      seoSocial: SeoSocialData
      slug?: { current: string }
    }
  }
  options: never
}

export function SeoPreviewPane({ document, options }: Props) {
  const sanityClient = useClient({ apiVersion: opts.apiVersion });

  const { displayed } = document;
  const [defaultSeo, setDefaultSeo] = useState<SeoData | {}>({});

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

  const { seoSocial: defaultSeoSocial, ...seoRest } = defaultSeo;

  const seo = combineSeo(
    {
      ...seoRest,
      ...defaultSeoSocial,
    },
    {
      ...seoSocial,
    },
    slug?.current, // need to resolve this properly
  );

  return (
    <>
      <SeoPreviewCard canShowPreview={!!seo.metaTitle} type={'Google search result'} Icon={BsGoogle}>
        <GoogleSearchResult seo={seo}/>
      </SeoPreviewCard>

      <SeoPreviewCard canShowPreview={!!seo.shareImage} type={'Twitter / X post'} Icon={RiTwitterXFill}>
        <TwitterCardPreview seo={seo}/>
      </SeoPreviewCard>

      <SeoPreviewCard canShowPreview={!!seo.metaTitle} type={'Facebook share'} Icon={BsFacebook}>
        <FacebookSharePreview seo={seo}/>
      </SeoPreviewCard>
    </>
  );
}
