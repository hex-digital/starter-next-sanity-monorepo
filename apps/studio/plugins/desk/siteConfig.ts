import { ListItemBuilder } from 'sanity/lib/exports/desk';
import { CogIcon } from '@sanity/icons';
import { BsFillSignpostSplitFill } from 'react-icons/bs';
import { SINGLETON } from '@packages/studio';
import { defineStructure } from './utils/defineStructure';
import { singletonListItem } from './utils/singleton';

export default defineStructure<ListItemBuilder>((S, context) => {
  const rootTitle = 'Site Config';

  return S.listItem()
    .title(rootTitle)
    .icon(CogIcon)
    .child(
      S.list()
        .title(rootTitle)
        .items([
          singletonListItem(S, context, { title: 'Navigation', schemaType: SINGLETON.NAVIGATION, icon: BsFillSignpostSplitFill }),
        ])
    );
});
