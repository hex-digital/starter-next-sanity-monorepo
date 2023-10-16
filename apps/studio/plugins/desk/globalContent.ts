import { ListBuilder, ListItemBuilder } from 'sanity/lib/exports/desk';
import { EarthGlobeIcon } from '@sanity/icons';
import { DOCUMENT, SINGLETON } from '@packages/studio';
import { BsFillSignpostSplitFill } from 'react-icons/bs';
import { defineStructure } from './utils/defineStructure';
import { singletonListItem } from './utils/singleton';

export default defineStructure<ListItemBuilder>((S, context) => {
  const rootTitle = 'Global Content';

  return S.listItem()
    .title(rootTitle)
    .icon(EarthGlobeIcon)
    .child(
      S.list()
        .title(rootTitle)
        .items([
          S.listItem()
            .title('Navigation Menus')
            .icon(BsFillSignpostSplitFill)
            .child(navigationStructure(S, context)),
        ])
    );
});

const navigationStructure = defineStructure<ListBuilder>((S, context) => {
  return S.list().title('Navigation Menus').items([
    S.documentTypeListItem(DOCUMENT.NAVIGATION_HEADERS),
    S.documentTypeListItem(DOCUMENT.NAVIGATION_FOOTERS),
    S.divider(),
    singletonListItem(S, context, { title: 'Site Config: Navigation', schemaType: SINGLETON.NAVIGATION, icon: BsFillSignpostSplitFill }),
  ]);
});
