import { defineType, defineField } from 'sanity';
import { EarthGlobeIcon } from '@sanity/icons';
import { OBJECT } from '../../constants';

const name = OBJECT.NAVIGATION_LINK_EXTERNAL;

export default defineType({
  title: 'External Link',
  name,
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      title: 'Open in a new window?',
      name: 'newWindow',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare(selection) {
      const { title, url } = selection;

      const subtitle = [];
      if (url) {
        subtitle.push(`→ ${url}`);
      }

      return {
        // media: image,
        subtitle: subtitle.join(' '),
        title,
      };
    },
  },
});
