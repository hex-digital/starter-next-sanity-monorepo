import { defineField } from 'sanity';
import { defineSlugField } from './defineSlugField';

export function defineMetaFields() {
  return [
    defineSlugField(),
    defineField({
      title: 'Page Visibility',
      name: 'pageVisibility',
      type: 'string',
      description: '"Hidden" will stop this page showing in search results + sitemaps. This setting only takes effect when this page is published - it will always be private until then',
      initialValue: 'public',
      options: {
        layout: 'radio',
        list: [
          { title: 'Public', value: 'public' },
          { title: 'Hidden (noindex)', value: 'hidden' },
        ],
      },
    }),
  ];
}
