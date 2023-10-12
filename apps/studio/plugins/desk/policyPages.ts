import { ListItemBuilder } from 'sanity/lib/exports/desk';
import { CaseIcon } from '@sanity/icons';
import { FaHome } from 'react-icons/fa';
import { defineStructure } from './utils/defineStructure';

export default defineStructure<ListItemBuilder>((S, context) => {
  const rootTitle = 'Policy Pages';

  return S.listItem()
    .title(rootTitle)
    .icon(CaseIcon)
    .child(
      S.list()
        .title(rootTitle)
        .items([
          S.listItem().title('Homepage').icon(FaHome).child(S.list().title('Homepage')),
          S.listItem().title('Policy Briefs').child(S.list().title('Policy Briefs')),
          S.listItem().title('Position Statements').child(S.list().title('Position Statements')),
        ])
    );
});
