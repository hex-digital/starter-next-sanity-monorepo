export interface SeoData {
  seoSocial: SeoSocialData
  favicon: { asset: any }
  siteTitle: string
  siteUrl: string
  withSiteTitle: 'append' | 'prepend' | 'off'
  titleSeparator: string
}

export interface SeoSocialData {
  metaTitle: string
  metaDescription: string
  socialImage: { asset: any }
}

export type SeoDataFlattened = Omit<SeoData, 'seoSocial'> & SeoSocialData

export type PageSeoData = Omit<SeoDataFlattened, 'socialImage' | 'withSiteTitle' | 'titleSeparator'> & { shareImage: { asset: any }, pageUrl: string }
