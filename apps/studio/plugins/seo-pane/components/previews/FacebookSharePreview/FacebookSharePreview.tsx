import imageUrlBuilder from '@sanity/image-url'
import preview from '../Preview.module.css'
import facebook from './FacebookSharePreview.module.css';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityDocument, useClient } from 'sanity';
import { options as opts } from '../../../../../config/options';
import { BsFacebook } from "react-icons/bs";

interface Props {
  seo: {
    shareImage: SanityImageSource,
    siteTitle: string,
    siteUrl: string,
    pageUrl: string,
    metaTitle: string,
    metaDescription: string,
  };
  width?: number;
}

export function FacebookSharePreview(props: Props) {
  const sanityClient = useClient({ apiVersion: opts.apiVersion });
  const imageBuilder = imageUrlBuilder(sanityClient);
  const urlFor = (source: SanityImageSource) => imageBuilder.image(source);

  const width = props.width || 580;
  const { shareImage, siteUrl, pageUrl, metaTitle, metaDescription} = props.seo;

  const shareUrl = siteUrl.split('://')[1];

  const canShowPreview = !!metaTitle;

  return (
    <div className={facebook.facebookWrapper} style={{ width }}>
      <div className={facebook.facebookImageContainer}>
        {shareImage ? (
          <img
            className={facebook.facebookCardImage}
            src={urlFor(shareImage)
              .width(1200)
              .height(630)
              .url()}
          />
        ) : (
          <span className={preview.imagePlaceholder} />
        )}
      </div>
      <div className={facebook.facebookCardContent}>
        <div className={facebook.facebookCardUrl}>
          {shareUrl}
        </div>
        <div className={facebook.facebookCardTitle}>
          <a href={pageUrl} target="_blank">
            {metaTitle}
          </a>
        </div>
        {metaDescription && (
          <div className={facebook.facebookCardDescription}>
            {metaDescription}
          </div>
        )}
      </div>
    </div>
  )
}
