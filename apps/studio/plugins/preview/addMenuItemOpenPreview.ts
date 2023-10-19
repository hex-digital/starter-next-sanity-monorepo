import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import { options } from '../../config/options';
import { PREVIEWABLE_DOCUMENT_TYPES, PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS } from '@packages/studio/schemas/config';

export function addMenuItemOpenPreview() {
  const { preview } = options;

  return previewUrl({
    base: preview.domain + preview.base,
    requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
    urlSecretId: preview.secretId,
    matchTypes: PREVIEWABLE_DOCUMENT_TYPES,
  });
}
