import { ListItemBuilder } from 'sanity/lib/exports/desk';
import { EyeOpenIcon } from '@sanity/icons';
import { FaHome } from 'react-icons/fa';
import { defineStructure } from './utils/defineStructure';

export default defineStructure<ListItemBuilder>((S, context) => {
  const rootTitle = 'Conservation Tools';

  return S.listItem()
    .title(rootTitle)
    .icon(EyeOpenIcon)
    .child(
      S.list()
        .title(rootTitle)
        .items([
          S.listItem().title('Homepage').icon(FaHome).child(S.list().title('Homepage')),
          S.listItem().title('Pages').child(S.list().title('Pages')),
        ])
    );
});
