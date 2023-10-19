import { options } from '../config/options';
import { defineUrlResolver } from 'sanity-plugin-iframe-pane';
import { PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS } from '@packages/studio/schemas/config';

const { preview } = options;

export const resolvePreviewUrl = defineUrlResolver({
  base: preview.domain + preview.base,
  requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
})
