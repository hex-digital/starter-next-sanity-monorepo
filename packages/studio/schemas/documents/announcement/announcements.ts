import { defineField, defineType } from 'sanity';
import { BsMegaphone } from 'react-icons/bs';
import { DOCUMENT } from '../../constants';

export default defineType({
  name: DOCUMENT.ANNOUNCEMENTS,
  title: 'Announcements',
  type: 'document',
  icon: BsMegaphone,
  fields: [
    defineField({
      title: 'Announcement Title',
      name: 'title',
      type: 'string',
      description: 'Displayed to admins only - used to identify currently active announcement',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Announcement',
      name: 'items',
      type: 'array',
      description: 'The announcement text to display - keep it to a single line',
      of: [{ type: 'block' }],
    }),
  ],
});
