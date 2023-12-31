import type { ListItemBuilder } from 'sanity/desk';
import { CogIcon } from '@sanity/icons';
import { BiSearch } from 'react-icons/bi';
import { BsFillSignpostSplitFill, BsMegaphone } from 'react-icons/bs';
import { SINGLETON } from '@packages/studio';
import { defineStructure } from './utils/defineStructure';
import { singletonListItem } from './utils/singleton';
import redirects from "./redirects";

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
          singletonListItem(S, context, { title: 'Announcement', schemaType: SINGLETON.ANNOUNCEMENT, icon: BsMegaphone }),
          S.divider(),
          singletonListItem(S, context, { title: 'SEO + Social', schemaType: SINGLETON.CONFIG_SEO, icon: BiSearch }),
          redirects(S, context),
        ])
    );
});
