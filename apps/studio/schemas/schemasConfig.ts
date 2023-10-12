import { DOCUMENT, SINGLETON } from './constants';

/** Document Types that should be shown in Internal Link fields, e.g. in Header Nav Menu */
export const INTERNAL_LINK_TYPES = [
  { type: SINGLETON.HOME },
  { type: DOCUMENT.LEGAL_PAGES },
];

/**
 * Document types which:
 *  - should not be able to be created in the 'new document' menu
 *  - should not be able to be duplicated, unpublished or deleted
 *
 * This is commonly used for singletons
 */
export const LOCKED_DOCUMENT_TYPES: Array<string> = [
  SINGLETON.HOME,
  SINGLETON.NAVIGATION,
  DOCUMENT.MEDIA_TAG,
];

/** Document types that should have the "SEO" analysis pane */
export const SEO_ANALYSIS_DOCUMENT_TYPES: Array<string> = [
  SINGLETON.HOME,
];

/** Document types that are able to display a live preview pane */
export const PREVIEWABLE_DOCUMENT_TYPES: Array<string> = [
  SINGLETON.HOME,
  SINGLETON.NAVIGATION,
];

/** Document types that can display a live preview pane but require a slug to do so */
export const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS: typeof PREVIEWABLE_DOCUMENT_TYPES = [];
