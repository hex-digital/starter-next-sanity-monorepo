import { defineField, defineType } from 'sanity';
import { TbBoxAlignTopFilled } from 'react-icons/tb';
import { DOCUMENT, OBJECT } from '../../constants';
import { NavigationActiveBadge } from '../../../badges/NavigationActive';

export default defineType({
  name: DOCUMENT.NAVIGATION_HEADERS,
  title: 'Headers',
  type: 'document',
  icon: TbBoxAlignTopFilled,
  fields: [
    defineField({
      name: 'headerName',
      title: 'Header Name',
      type: 'string',
      description: 'Displayed to admins only - used to identify currently active header',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Navigation items',
      type: 'array',
      description: 'The navigation items to display to users for this menu',
      of: [
        // Put other types of navigation links here, such as dropdown menus, mega menus, etc.
        { type: OBJECT.NAVIGATION_LINK_INTERNAL },
        { type: OBJECT.NAVIGATION_LINK_EXTERNAL },
      ],
    }),
  ],
});
