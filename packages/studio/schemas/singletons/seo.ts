import { BiSearch } from 'react-icons/bi';
import { defineType } from 'sanity';
import { SINGLETON } from '../constants';
import { defineSeoFields } from '../utils/defineSeoFields';

export default defineType({
  name: SINGLETON.CONFIG_SEO,
  title: 'SEO + Social',
  type: 'document',
  icon: BiSearch,
  groups: [
    {
      title: 'General',
      name: 'general',
    },
    {
      title: 'SEO',
      name: 'seo',
    },
    {
      title: 'Icons',
      name: 'icons',
    },
  ],
  fields: [
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      description: 'Prominently shown on the browser tab, on search engine results, and social sharing',
      group: 'general',
    },
    {
      title: 'Site URL',
      name: 'siteUrl',
      type: 'url',
      description: 'The website URL used for canonical URLs. Should include protocol and full domain name. E.G. https://domain.com',
      group: 'general',
      validation: (rule) => rule.required().uri({ scheme: ['http', 'https'] }),
    },
    {
      title: 'Prepend or Append Site Title to Meta Title?',
      name: 'withSiteTitle',
      type: 'string',
      description: 'Do not turn this off unless you understand the SEO impact',
      group: 'general',
      options: {
        list: [
          { title: 'Prepend', value: 'prepend' },
          { title: 'Append', value: 'append' },
          { title: 'Off', value: 'off' },
        ],
      },
      initialValue: 'append',
    },
    {
      title: 'Choose selector to separate Meta Title and Site Title',
      name: 'titleSeparator',
      type: 'string',
      hidden: ({ document }) => document?.withSiteTitle === 'off',
      group: 'general',
      options: {
        list: [
          { title: '|', value: '|' },
          { title: '-', value: '-' },
          { title: '–', value: '–' },
          { title: '—', value: '—' },
          { title: '•', value: '•' },
        ],
      },
      initialValue: '|',
    },
    ...defineSeoFields({
      collapsible: false,
      description: 'These settings are optional but extremely important as they will significantly increase engagement. These options will be overridden by pages that specify their own.',
    }),
    {
      title: 'Browser Icon (Favicon)',
      name: 'favicon',
      type: 'image',
      description: 'Shown on browser tabs and Google search results. Should be a square image, ideally 512x512 PNG or 16x16 SVG',
      group: 'icons',
      options: {
        accept: 'image/svg+xml, image/png, image/webp',
        sources: [],
      },
    },
  ],
});
