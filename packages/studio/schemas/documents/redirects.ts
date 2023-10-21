import { defineField, defineType } from 'sanity';
import { AiOutlineWarning } from 'react-icons/ai';
import linkObject from '../objects/navigation/link';
import { DOCUMENT } from "../constants";

export default defineType({
  title: 'Redirect',
  name: DOCUMENT.REDIRECTS,
  type: 'document',
  icon: AiOutlineWarning,
  fields: [
    defineField({
      title: 'Redirect sources',
      description: 'The incoming source path should not include the protocol or domain (https://domain.com). It must start with a "/". These are all valid: /path, /path/:slug, /path/:slug* and /path/(?!uk/).*',
      name: 'redirectNote',
      type: 'note',
      options: {
        icon: AiOutlineWarning,
        tone: 'caution',
      },
    }),
    defineField({
      title: 'From path (slug)',
      name: 'from',
      type: 'string',
      description: 'The incoming source path to match, e.g. "/path/to/page"',
      validation: (rule) => [
        rule.required(),
        rule.custom(value => value?.startsWith('/') ? true : 'Must start with "/"').error(),
      ],
    }),
    linkObject,
    defineField({
      title: 'Is this a permanent (301) redirect?',
      name: 'isPermanent',
      type: 'boolean',
      description: 'Turn this off if the redirect is temporary and you intend on removing it in the future. Keeping this on may mean the page From path can never be used again',
      initialValue: true,
    }),
    defineField({
      title: 'Group',
      name: 'group',
      type: 'string',
      description: 'Use groups to organise your redirects',
      options: {
        list: [
          { title: 'Redirections', value: 'redirections' },
          { title: 'Modified URLs', value: 'modifiedUrls' },
        ],
      },
      initialValue: 'redirections',
    }),
    defineField({
      title: 'Advanced',
      name: 'advanced',
      type: 'object',
      description: 'Optional',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          title: 'Header, Cookie, Host or Query matching',
          name: 'matching',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'match',
              fields: [
                {
                  type: 'string',
                  title: 'Has or Missing',
                  name: 'hasOrMissing',
                  options: {
                    list: [
                      { title: 'Has', value: 'has' },
                      { title: 'Missing', value: 'missing' },
                    ],
                  },
                  initialValue: 'has',
                },
                {
                  type: 'string',
                  title: 'Type',
                  name: 'type',
                  options: {
                    list: [
                      { title: 'Header', value: 'header' },
                      { title: 'Cookie', value: 'cookie' },
                      { title: 'Host', value: 'host' },
                      { title: 'Query', value: 'query' },
                    ],
                  },
                  initialValue: 'has',
                },
                {
                  type: 'string',
                  title: 'Key',
                  name: 'key',
                },
                {
                  type: 'string',
                  title: 'Value',
                  name: 'value',
                },
              ]
            }
          ],
        })
      ],
    })
  ],
  preview: {
    select: {
      to: 'to',
      from: 'from',
      isPermanent: 'isPermanent'
    },
    prepare({from, to, isPermanent}) {
      let title = 'New Redirect';
      if (from || to) {
        title = `${from || '?'} → ${to || '?'}`;
      }
      return {
        title,
        subtitle: isPermanent ? 'Permanent (301)' : 'Temporary (302)'
      };
    },
  },
});
