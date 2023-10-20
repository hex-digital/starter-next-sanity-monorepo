import { defineField, defineType } from 'sanity';
import { EnvelopeIcon } from '@sanity/icons';
import { DOCUMENT } from '../constants';
import { defineMetaFields } from '../../utils/defineMetaFields';
import { defineSeoFields } from '../../utils/defineSeoFields';

export default defineType({
  name: DOCUMENT.LEGAL_PAGES,
  title: 'Legal Pages',
  type: 'document',
  icon: EnvelopeIcon,
  groups: [{
    title: 'SEO',
    name: 'seo',
  }],
  fields: [
    defineField({
      name: 'title',
      description: 'For internal use only',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    {
      name: 'isHighlighted',
      title: 'Highlighted',
      type: 'boolean',
      initialValue: false
    },
    ...defineMetaFields(),
    ...defineSeoFields(),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      visibility: 'pageVisibility',
    },
    prepare({ title, slug, visibility }) {
      const subtitle = [];
      if (visibility !== 'public') { subtitle.push(visibility); }
      if (slug !== undefined) { subtitle.push(`/${slug}`); }

      return {
        title,
        subtitle: subtitle.join(' - '),
      };
    },
  },
})
