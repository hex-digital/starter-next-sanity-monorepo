export function resolveHref(
  documentType?: string,
  slug?: string,
): string | undefined {
  switch (documentType) {
    case 'home':
    case 'navigation':
      return '/'
    // case 'page':
    //   return slug ? `/${slug}` : undefined
    // case 'project':
    //   return slug ? `/projects/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
