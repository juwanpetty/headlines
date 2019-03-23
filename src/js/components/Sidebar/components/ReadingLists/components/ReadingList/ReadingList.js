import React from 'react';
import DOMPurify from 'dompurify';
import relativeDate from 'relative-date';
import startCase from 'lodash/startcase';

import RemoveBoomark from './components/RemoveBoomark/RemoveBoomark';
import styles from './ReadingList.scss';

export default function ReadingList({
  article,
  articleLink,
  readingList,
  handleUpdateReadingList,
}) {
  const isValidImage = (e) => {
    // displays placeholder if img is 1px (IGN)
    if (e.target.naturalWidth <= 100) {
      e.target.classList.add(styles.ImageBorder);
      return (e.target.src = 'assets/placeholder.jpg');
    }
  };

  const handleImageError = (e) => {
    e.target.classList.add(styles.ImageBorder);
    return (e.target.src = 'assets/placeholder.jpg');
  };

  const relativeTime = (publishedAt) => {
    var time = new Date(publishedAt).getTime();
    return relativeDate(time);
  };

  let {source, title, description, url, author, publishedAt} = article;
  let {urlToImage} = article;
  let articleImage = urlToImage;

  title = DOMPurify.sanitize(title);
  description = DOMPurify.sanitize(description);

  if (urlToImage === null || urlToImage === 'self') {
    urlToImage = './assets/placeholder.jpg';
  }

  return (
    <li className={styles.Bookmark}>
      <RemoveBoomark
        article={article}
        readingList={readingList}
        handleUpdateReadingList={handleUpdateReadingList}
      />
      <div className={styles.Card}>
        <div>
          <p className={styles.Source}>{source.name}</p>
          <div className={styles.Overflow}>
            <a
              href={url}
              target={articleLink === 'same-window' ? '_top' : '_blank'}
            >
              <h3
                className={styles.Title}
                dangerouslySetInnerHTML={{__html: title}}
              />
            </a>
          </div>
          <div className={styles.Footer}>
            <p>
              {startCase(relativeTime(publishedAt))}{' '}
              {!author || author.length > 20 ? '' : ' — ' + author}
            </p>
          </div>
        </div>

        <div className={styles.ImageWrapper}>
          <a
            href={url}
            target={articleLink === 'same-window' ? '_top' : '_blank'}
          >
            <img
              onLoad={isValidImage}
              onError={handleImageError}
              src={urlToImage}
              alt={title}
              className={articleImage ? styles.Image : styles.ImageBorder}
            />
          </a>
        </div>
      </div>
    </li>
  );
}
