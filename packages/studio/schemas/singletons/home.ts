import { HomeIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { SINGLETON } from '../constants';
import {defineSeoFields} from "../../utils/defineSeoFields";
import {defineMetaFields} from "../../utils/defineMetaFields";

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
    ...defineMetaFields(),
    ...defineSeoFields(),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      };
    },
  },
});
