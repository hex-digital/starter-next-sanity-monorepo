import { StructureBuilder } from 'sanity/desk';
import JsonPreview from './components/JsonPreview';
import { PiBracketsCurlyBold } from 'react-icons/pi';

export function JsonPane(S: StructureBuilder) {
  return S.view
    .component(JsonPreview)
    .title('JSON')
    .icon(PiBracketsCurlyBold);
}


