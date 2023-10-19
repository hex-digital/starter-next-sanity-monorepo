import { defineField } from 'sanity';
import { SlugInput } from 'sanity-plugin-prefixed-slug';
import { getContext } from '../index';

export function defineSlugField(schemaSlugField?: Parameters<typeof defineField>[0]) {
  const { preview } = getContext();
  const { components, options, ...schemaOverrides } = schemaSlugField || {};

  return defineField({
    name: 'slug',
    title: 'Page URL',
    type: 'slug',
    description: 'Defines the URL for this page on the website',
    validation: (rule) => rule.required(),
    components: {
      input: SlugInput,
      ...(components || {}),
    },
    options: {
      source: 'title',
      urlPrefix: preview.domain,
      ...(options || {}),
    },
    ...schemaOverrides,
  });
}
