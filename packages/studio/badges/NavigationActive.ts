import { DocumentBadgeDescription, DocumentBadgeProps, useClient } from 'sanity';
import { SINGLETON } from '../schemas/constants';

const navigationMenus = ['mainNav', 'mainFooter'];

export function NavigationActiveBadge(props: DocumentBadgeProps): DocumentBadgeDescription {
  const client = useClient({ apiVersion: '2023-10-16' });

  const badge: DocumentBadgeDescription = {};

  /** I'm sure there's a better way of doing this */
  client.fetch(`*[_type == "${SINGLETON.NAVIGATION}"][0]`)
    .then((data) => {
      navigationMenus.some((navName) => {
        if (data[navName]._ref === props.id) {
          badge.label = 'Active';
          badge.title = 'This navigation menu is active';
          badge.color = 'success';
        }
      });
    });

  return badge;
}
