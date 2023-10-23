import { defineType } from 'sanity';
import { DocumentsIcon } from '@sanity/icons';
import { DOCUMENT } from '../constants';
import { defineMetaFields } from '../utils/defineMetaFields';
import { defineSeoFields } from '../utils/defineSeoFields';
import { defaultPreview } from '../utils/defaultPreview';

export default defineType({
  name: DOCUMENT.LEGAL_PAGES,
  title: 'Legal Pages',
  type: 'document',
  icon: DocumentsIcon,
  groups: [{
    title: 'SEO',
    name: 'seo',
  }],
  fields: [
    ...defineMetaFields(),
    ...defineSeoFields(),
  ],
  preview: defaultPreview(),
})
