import { StructureBuilder } from 'sanity/desk';
import JsonPreview from './components/JsonPreview';

export function JsonPane(S: StructureBuilder) {
  return S.view
    .component(JsonPreview)
    .title('JSON');
}


