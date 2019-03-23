import React from 'react';

import styles from './Navigation.scss';

export default function Navigation({togglePanel, sourcesPanel}) {
  return (
    <div className={styles.Navigation}>
      <p
        onClick={() => togglePanel('sources')}
        className={
          sourcesPanel === 'sources' ? styles.Selected : styles.NavigationButton
        }
      >
        Sources
      </p>
      <p
        onClick={() => togglePanel('bookmark')}
        className={
          sourcesPanel === 'bookmark'
            ? styles.Selected
            : styles.NavigationButton
        }
      >
        Reading List
      </p>
      <p
        onClick={() => togglePanel('settings')}
        className={
          sourcesPanel === 'settings'
            ? styles.Selected
            : styles.NavigationButton
        }
      >
        Settings
      </p>
    </div>
  );
}
