import { defineField } from 'sanity';
import { defineSlugField } from './defineSlugField';

interface Options {
  canChangeSlug?: boolean
};

export function defineMetaFields(options: Options = {}) {
  const opts = {
    canChangeSlug: true,
    ...options,
  };

  const slugField = opts.canChangeSlug ? [defineSlugField()] : [];

  return [
    ...slugField,
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
