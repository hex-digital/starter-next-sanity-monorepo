import { ListItemBuilder } from 'sanity/lib/exports/desk';
import { DatabaseIcon } from '@sanity/icons'
import { FaHome } from 'react-icons/fa';
import { GiKiwiBird } from 'react-icons/gi';
import { defineStructure, ListItems } from './utils/defineStructure';

export default defineStructure<ListItemBuilder>((S, context) => {
  const rootTitle = 'Data Hub';

  return S.listItem()
    .title(rootTitle)
    .icon(DatabaseIcon)
    .child(
      S.list()
        .title(rootTitle)
        .items([
          S.listItem().title('Homepage').icon(FaHome).child(S.list().title('Homepage')),
          S.listItem().title('Fact Sheets').child(S.list().title('Fact Sheets').items(factsheetStructure(S, context))),
        ])
    );
});

const factsheetStructure = defineStructure<ListItems>((S) => {
  return [
    S.listItem().title('Birds').icon(GiKiwiBird).child(S.list().title('Birds')),
    S.listItem().title('Countries').child(S.list().title('Countries')),
    S.listItem().title('Flyways').child(S.list().title('Flyways')),
    S.listItem().title('Species').child(S.list().title('Species')),
    S.listItem().title('Sites').child(S.list().title('Sites')),
  ];
});
