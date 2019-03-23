import React from 'react';

import Article from './components/Article/Article';
import ArticleSkeleton from './components/EmptyState/ArticleSkeleton';

import styles from './Articles.scss';

export default function Articles({
  articleError,
  articleIsLoaded,
  articles,
  showArticles,
  articleLink,
  readingList,
  handleUpdateReadingList,
}) {
  if (articleError) {
    return <div>Error: {error.message}</div>;
  } else if (!articleIsLoaded) {
    return (
      <div className={showArticles ? styles.Normal : styles.Hidden}>
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
      </div>
    );
  } else {
    return (
      <section className={styles.Section}>
        <div className={styles.SectionWrapper}>
          <ul className={showArticles ? styles.Normal : styles.Hidden}>
            {articles.map((article, index) => {
              return (
                <Article
                  key={index}
                  article={article}
                  articleLink={articleLink}
                  readingList={readingList}
                  handleUpdateReadingList={handleUpdateReadingList}
                />
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}
