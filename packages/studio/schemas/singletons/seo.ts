import { GrSearch } from 'react-icons/gr';
import { defineType } from 'sanity';
import { SINGLETON } from '../constants';
import { defineSeoFields } from '../../utils/defineSeoFields';

export default defineType({
  name: SINGLETON.CONFIG_SEO,
  title: 'SEO + Social',
  type: 'document',
  icon: GrSearch,
  fields: [
    ...defineSeoFields({
      group: '',
      collapsible: false,
      description: 'These settings are optional but extremely important as they will significantly increase engagement. These options will be overridden by pages that specify their own.',
    }),
  ],
});
