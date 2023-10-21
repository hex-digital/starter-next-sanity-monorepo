import type { ListItemBuilder } from 'sanity/desk';
import { BsArrow90DegRight } from 'react-icons/bs';
import { defineStructure } from './utils/defineStructure';
import {DOCUMENT} from "@packages/studio";

export default defineStructure<ListItemBuilder>((S, context) => {
  const rootTitle = 'Redirects';

  return S.listItem()
    .title(rootTitle)
    .icon(BsArrow90DegRight)
    .child(S.documentTypeList(DOCUMENT.REDIRECTS));
});
