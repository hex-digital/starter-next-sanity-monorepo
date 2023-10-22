export function combineSeo(defaultSeo, pageSeo, slug?: string) {
  const pageSlug = slug ? `/${slug}` : '';

  let metaTitle = pageSeo.metaTitle || defaultSeo.metaTitle;

  if (defaultSeo.withSiteTitle && metaTitle !== defaultSeo.siteTitle) {
    if (defaultSeo.withSiteTitle === 'prepend') {
      metaTitle = `${defaultSeo.siteTitle} ${defaultSeo.titleSeparator} ${metaTitle}`;
    }
    if (defaultSeo.withSiteTitle === 'append') {
      metaTitle = `${metaTitle} ${defaultSeo.titleSeparator} ${defaultSeo.siteTitle}`;
    }
  }

  return {
    favicon: defaultSeo?.favicon?.asset || null,
    shareImage: pageSeo?.socialImage?.asset || defaultSeo?.socialImage?.asset, // meta share image OR default share image
    siteTitle: defaultSeo?.siteTitle || '',
    siteUrl: defaultSeo?.siteUrl || '',
    pageUrl: `${defaultSeo?.siteUrl}${pageSlug}`,
    metaTitle,
    metaDescription: pageSeo.metaDescription || defaultSeo.metaDescription,
  };
}
