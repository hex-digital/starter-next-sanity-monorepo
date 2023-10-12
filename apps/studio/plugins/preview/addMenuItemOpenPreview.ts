import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import { preview } from '../../config';
import { PREVIEWABLE_DOCUMENT_TYPES, PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS } from '../../schemas';

export function addMenuItemOpenPreview() {
  return previewUrl({
    base: preview.domain + preview.base,
    requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
    urlSecretId: preview.secretId,
    matchTypes: PREVIEWABLE_DOCUMENT_TYPES,
  });
}
