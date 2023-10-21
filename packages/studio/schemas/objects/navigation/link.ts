import { defineField } from 'sanity';
import { AiOutlineLink } from 'react-icons/ai';
import { OBJECT } from '../../constants';
import { INTERNAL_LINK_TYPES } from '../../config';

interface Link {
  linkType: string,
}

export default defineField({
  title: 'Link',
  name: OBJECT.NAVIGATION_LINK,
  type: 'object',
  icon: AiOutlineLink,
  fields: [
    defineField({
      title: 'Link Type',
      name: 'linkType',
      type: 'string',
      initialValue: 'internal',
      options: {
        layout: 'radio',
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
      },
    }),

    /* Internal */
    defineField({
      title: 'Link to another page on the site',
      name: 'internal',
      type: 'reference',
      weak: true,
      to: INTERNAL_LINK_TYPES,
      hidden: ({ document }) => (document?.link as Link)?.linkType !== 'internal',
    }),
    defineField({
      title: 'Link to portion of page (anchor link)',
      name: 'internalAnchor',
      description: 'Optional',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      hidden: ({ document }) => (document?.link as Link)?.linkType !== 'internal',
      fields: [
        defineField({
          title: 'Anchor tag',
          name: 'internal',
          type: 'string',
          description: 'Enter an element "id" from the page. Do not put "#" at the start',
        }),
      ],
    }),

    /* External */
    defineField({
      title: 'Link to an external page',
      name: 'external',
      type: 'url',
      description: 'Use the full URL, e.g. https://mydomain.com',
      hidden: ({ document }) => (document?.link as Link)?.linkType !== 'external',
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
