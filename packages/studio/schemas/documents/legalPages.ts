import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons';
import { DOCUMENT } from '../constants';

export default defineType({
  name: DOCUMENT.LEGAL_PAGES,
  title: 'Legal Pages',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'The title of the legal page as displayed on the website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
    }),
  ],
})
