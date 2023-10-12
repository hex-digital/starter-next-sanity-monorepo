import { ListItemBuilder } from 'sanity/lib/exports/desk';
import { EditIcon } from '@sanity/icons';
import { FaHome, FaBuilding } from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';
import { IoIosMegaphone } from 'react-icons/io';
import { FaRegNewspaper } from 'react-icons/fa6';
import { defineStructure, type ListItems } from './utils/defineStructure';

export default defineStructure<ListItemBuilder>((S, context) => {
  const rootTitle = 'Editorial';

  return S.listItem()
    .title(rootTitle)
    .icon(EditIcon)
    .child(
      S.list()
        .title(rootTitle)
        .items([
          S.listItem().title('Articles').child(S.list().title('Articles')),
          S.listItem().title('Publications').child(S.list().title('Publications')),
          S.listItem().title('Newsroom').icon(BsNewspaper).child(S.list().title('Newsroom').items(newsroomStructure(S, context))),
        ])
    );
});

const newsroomStructure = defineStructure<ListItems>((S) => {
  return [
    S.listItem().title('Homepage').icon(FaHome).child(S.list().title('Homepage')),
    S.listItem().title('Announcements').icon(IoIosMegaphone).child(S.list().title('Announcements')),
    S.listItem().title('Press Coverage').icon(FaRegNewspaper).child(S.list().title('Press Coverage')),
    S.divider(),
    S.listItem().title('Companies').icon(FaBuilding).child(S.list().title('Companies')),
  ];
});
