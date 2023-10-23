import { HomeIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import { SINGLETON } from '../constants';
import { defineSeoFields } from '../utils/defineSeoFields';

export default defineType({
  name: SINGLETON.HOME,
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      title: 'Content',
      name: 'content',
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
  fields: [
    ...defineSeoFields(),
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
        subtitle: 'Public - /',
      };
    },
  },
});
