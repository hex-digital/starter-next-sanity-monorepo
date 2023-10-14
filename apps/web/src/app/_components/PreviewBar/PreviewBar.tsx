import { draftMode } from 'next/headers';
import styles from './PreviewBar.module.css';

export default function PreviewBar() {
  if (!draftMode().isEnabled) {
    return null;
  }

  return (
    <aside className={styles.cPreviewBar}>
      <a href="/api/disable-draft">Draft Preview Mode - click to exit</a>
    </aside>
  );
}
