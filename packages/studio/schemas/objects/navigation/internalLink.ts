import { defineField } from 'sanity';
import { LinkIcon } from '@sanity/icons';
import { INTERNAL_LINK_TYPES } from '../../config';
import { OBJECT } from '../../constants';

const name = OBJECT.NAVIGATION_LINK_INTERNAL;

export default defineField({
  title: 'Internal Link',
  name,
  type: 'object',
  icon: LinkIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: (Rule) => Rule.required(),
      to: INTERNAL_LINK_TYPES,
    },
  ],
  preview: {
    select: {
      reference: 'reference',
      referenceTitle: 'reference.title',
      referenceType: 'reference._type',
      title: 'title',
    },
    prepare(selection) {
      const {
        reference,
        referenceTitle,
        title,
      } = selection;

      const subtitle = [];
      if (reference) {
        subtitle.push([`→ ${referenceTitle || reference?._id}`]);
      } else {
        subtitle.push('(Nonexistent document reference)');
      }

      return {
        subtitle: subtitle.join(' '),
        title,
      };
    },
  },
});
