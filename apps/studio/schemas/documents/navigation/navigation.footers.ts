import { defineField, defineType } from 'sanity';
import { TbBoxAlignBottomFilled } from 'react-icons/tb';
import { OBJECT, DOCUMENT } from '../../constants';

export default defineType({
  name: DOCUMENT.NAVIGATION_FOOTERS,
  title: 'Footers',
  type: 'document',
  icon: TbBoxAlignBottomFilled,
  fields: [
    defineField({
      name: 'footerName',
      title: 'Footer Name',
      type: 'string',
      description: 'Displayed to admins only - used to identify currently active footer',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Navigation items',
      type: 'array',
      of: [
        // Put other types of navigation links here, such as dropdown menus, mega menus, etc.
        { type: OBJECT.NAVIGATION_LINK_INTERNAL },
        { type: OBJECT.NAVIGATION_LINK_EXTERNAL },
      ],
    }),
  ],
});
