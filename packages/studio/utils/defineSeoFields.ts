import { defineField } from 'sanity';
import { StringInput } from '../components/StringInput';
import { TextInput } from '../components/TextInput';

export interface Config {
  group?: string
  description?: string
  collapsible?: boolean
}

export function defineSeoFields({ group, description, collapsible }: Config = {}) {
  // Default group to 'seo' if not defined. Use empty string to specify no group
  const fieldGroup = group !== undefined ? group : 'seo';
  const fieldDescription = description !== undefined ? description : 'These settings are optional but important as they will significantly increase engagement. If not set, the global fallbacks will be used from "Site Config > SEO"';
  const fieldCollapsible = collapsible !== undefined ? collapsible : true;

  return [
    {
      name: 'seoSocial',
      title: 'Page SEO and Social',
      type: 'object',
      description: fieldDescription,
      group: fieldGroup,
      options: { collapsible: fieldCollapsible },
      fields: [
        defineField({
          title: 'Title for search & social sharing (meta title)',
          name: 'metaTitle',
          type: 'string',
          components: { input: StringInput },
          description: 'Make it as enticing as possible to capture users in Google + social feeds',
          validation: (rule) => [
            rule.min(15).warning('Title should be at least 15 characters long for maximum effect.'),
            rule.max(70).warning('Title should be less than 70 characters long for maximum effect.'),
          ],
        }),
        defineField({
          title: 'Short Paragraph for search & social sharing (meta description)',
          name: 'metaDescription',
          type: 'text',
          components: { input: TextInput },
          description: 'Optional, highly encouraged to capture more visitors from Google and social',
          rows: 2,
          validation: (rule) => [
            rule.min(15).warning('Description should be at least 15 characters long for maximum effect.'),
            rule.max(160).warning('Description should be less than 160 characters long for maximum effect.'),
          ],
        }),
        defineField({
          title: 'Social Image',
          name: 'socialImage',
          type: 'image',
          description: 'Choose a beautiful and inviting, high-res image (1080p or even 4k). This will show when sharing on social media or in WhatsApp. Recommended size: 1200x630 (PNG, JPG or WebP)',
        }),
      ],
    }
  ];
}
