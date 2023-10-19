import { defineField, defineType } from 'sanity'
import { DOCUMENT, SINGLETON } from '../../constants';
import { BsMegaphone } from 'react-icons/bs';

export default defineType({
  name: SINGLETON.ANNOUNCEMENT,
  title: 'Announcement',
  type: 'document',
  icon: BsMegaphone,
  fields: [
    defineField({
      title: 'Active Announcement',
      name: 'activeAnnouncement',
      description: 'Select the announcement to display at the top of all pages, no remove to show no announcement',
      type: 'reference',
      to: { type: DOCUMENT.ANNOUNCEMENTS },
    }),
  ],
})
