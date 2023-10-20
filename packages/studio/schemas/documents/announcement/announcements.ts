import {defineArrayMember, defineField, defineType} from 'sanity';
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
      of: [
        // Paragraphs
        defineArrayMember({
          type: 'block',
          lists: [],
          styles: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              { title: 'Italic', value: 'em' },
              { title: 'Strong', value: 'strong' },
            ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
  ],
});
