import { ListItemBuilder } from 'sanity/desk'
import { FaHome } from 'react-icons/fa';
import { SINGLETON } from '@packages/studio';
import { defineStructure } from './utils/defineStructure';
import { singletonListItem } from './utils/singleton';

export default defineStructure<ListItemBuilder>((S, context) => {
  return singletonListItem(S, context, { title: 'Home', schemaType: SINGLETON.HOME, icon: FaHome });
});
