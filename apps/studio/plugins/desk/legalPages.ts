import { ListItemBuilder } from 'sanity/lib/exports/desk';
import { DocumentsIcon } from '@sanity/icons';
import { defineStructure } from './utils/defineStructure';

export default defineStructure<ListItemBuilder>((S, context) => {
  const rootTitle = 'Legal Pages';

  return S.listItem()
    .title(rootTitle)
    .icon(DocumentsIcon)
    .child(S.documentTypeList('legalPages'));
});
