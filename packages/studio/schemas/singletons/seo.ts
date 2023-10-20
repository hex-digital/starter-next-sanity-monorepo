import { GrSearch } from 'react-icons/gr';
import { defineType } from 'sanity';
import { SINGLETON } from '../constants';
import { defineSeoFields } from '../../utils/defineSeoFields';

export default defineType({
  name: SINGLETON.CONFIG_SEO,
  title: 'SEO + Social',
  type: 'document',
  icon: GrSearch,
  groups: [
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
