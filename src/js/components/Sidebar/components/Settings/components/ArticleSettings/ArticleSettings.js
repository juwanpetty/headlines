import React from 'react';

import styles from './ArticleSettings.scss';

export default function ArticleSettings({
  showArticles,
  toggleShowArticles,
  articleLink,
  toggleArticleLink,
}) {
  return (
    <div className={styles.Settings}>
      <div className={styles.Group}>
        <div className={styles.Checkbox}>
          <input
            type="checkbox"
            id="articles"
            checked={showArticles}
            onChange={() => toggleShowArticles()}
          />
          <label htmlFor="articles">Articles</label>
        </div>
        <p className={styles.Subtitle}>Display articles on the new tab page.</p>
      </div>

      <div className={styles.Group}>
        <p className={styles.Subtitle}>Articles Open In</p>
        <div className={styles.Radio}>
          <input
            type="radio"
            id="same-window"
            name="article-link"
            value="same-window"
            checked={articleLink === 'same-window'}
            onChange={() => toggleArticleLink('same-window')}
          />
          <label htmlFor="same-window">Same Window</label>
        </div>
        <div className={styles.Radio}>
          <input
            type="radio"
            id="new-tab"
            name="article-link"
            value="new-tab"
            checked={articleLink === 'new-tab'}
            onChange={() => toggleArticleLink('new-tab')}
          />
          <label htmlFor="new-tab">New Tab</label>
        </div>
      </div>
    </div>
  );
}
