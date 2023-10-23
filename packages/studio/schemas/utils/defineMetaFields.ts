import { defineField } from 'sanity';
import { defineSlugField } from './defineSlugField';

interface Options {
  canSetTitle?: boolean
  canChangeSlug?: boolean
  canChangeVisibility?: boolean
}

export function defineMetaFields(options: Options = {}) {
  const opts = {
    canSetTitle: true,
    canChangeSlug: true,
    canChangeVisibility: true,
    ...options,
  };

  const titleField = opts.canSetTitle
    ? [
      defineField({
        name: 'title',
        description: 'For internal use only, to help identify this page later when adding links or browsing the CMS',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    ]
    : []

  const slugField = opts.canChangeSlug ? [defineSlugField()] : [];

  const visibilityField = opts.canChangeVisibility
    ? [
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
    ]
    : []

  return [
    ...titleField,
    ...slugField,
    ...visibilityField,
  ];
}
