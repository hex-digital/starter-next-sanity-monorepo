import { ListItemBuilder } from 'sanity/desk';

import { StructureBuilder, View, ViewBuilder } from 'sanity/lib/exports/desk';
import { ConfigContext } from 'sanity';
import { previewPane } from '../../preview';
import { PREVIEWABLE_DOCUMENT_TYPES } from '../../../schemas';
import { defaultViews } from '../index';
// import { previewPane } from './preview';

interface SingletonListItemData {
  title: string
  schemaType: string
  icon?: any
}

export function singletonListItem(
  S: StructureBuilder,
  _context: ConfigContext,
  { title, schemaType, icon }: SingletonListItemData
): ListItemBuilder {
  return S.listItem()
    .title(title)
    .icon(icon)
    .schemaType(schemaType)
    .child(
      S.editor()
        .title(title)
        .schemaType(schemaType)
        .documentId(schemaType)
        .views(defaultViews(S, schemaType))
    );
}
