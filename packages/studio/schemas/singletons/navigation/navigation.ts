import { defineField, defineType } from 'sanity'
import { DOCUMENT, SINGLETON } from '../../constants';
import { BsFillSignpostSplitFill } from 'react-icons/bs';

export default defineType({
  name: SINGLETON.NAVIGATION,
  title: 'Navigation',
  type: 'document',
  icon: BsFillSignpostSplitFill,
  fields: [
    defineField({
      title: 'Main navigation',
      name: 'mainNav',
      description: 'Select menu for main navigation',
      type: 'reference',
      to: { type: DOCUMENT.NAVIGATION_HEADERS },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Footer navigation',
      name: 'mainFooter',
      description: 'Select menu for main footer navigation',
      type: 'reference',
      to: { type: DOCUMENT.NAVIGATION_FOOTERS },
      validation: (rule) => rule.required(),
    }),
  ],
})
