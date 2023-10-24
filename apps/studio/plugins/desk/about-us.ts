import { ListItemBuilder } from 'sanity/lib/exports/desk';
import { BoldIcon, SparklesIcon, SchemaIcon, BlockquoteIcon } from '@sanity/icons';
import { BsFillPeopleFill } from 'react-icons/bs';
import { defineStructure } from './utils/defineStructure';

export default defineStructure<ListItemBuilder>((S) => {
  const rootTitle = 'About Us';

  return S.listItem()
    .title(rootTitle)
    .icon(BoldIcon)
    .child(
      S.list()
        .title(rootTitle)
        .items([
          S.listItem().title('Company').icon(BoldIcon).child(S.list().title('Company')),
          S.listItem().title('Team').icon(BsFillPeopleFill).child(S.list().title('Team')),
          S.listItem().title('Science').icon(SparklesIcon).child(S.list().title('Science')),
          S.divider(),
          S.listItem().title('Careers').icon(SchemaIcon).child(S.list().title('Careers')),
          S.listItem().title('Contact').icon(BlockquoteIcon).child(S.list().title('Contact')),
        ])
    );
});
