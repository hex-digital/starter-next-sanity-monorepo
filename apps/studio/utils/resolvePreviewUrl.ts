import { preview } from '../config';
import { defineUrlResolver } from 'sanity-plugin-iframe-pane';
import { PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS } from '../schemas';

export const resolvePreviewUrl = defineUrlResolver({
  base: preview.domain + preview.base,
  requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
})
