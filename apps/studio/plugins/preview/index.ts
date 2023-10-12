import { StructureBuilder } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
import { resolvePreviewUrl } from '../../utils/resolvePreviewUrl';
import { preview } from '../../config';

export function previewPane(S: StructureBuilder) {
  return S.view
    .component(Iframe)
    .title('Preview')
    .options({ // See: https://www.sanity.io/plugins/iframe-pane#options
      url: resolvePreviewUrl,
      urlSecretId: preview.secretId, // See: https://github.com/sanity-io/sanity-plugin-iframe-pane/blob/main/src/Iframe.tsx
      reload: {
        button: true,
      },
    });
}
