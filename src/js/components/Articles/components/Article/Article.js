import React from 'react';
import DOMPurify from 'dompurify';
import relativeDate from 'relative-date';
import startCase from 'lodash/startcase';

import AddToReadingList from './components/AddToReadingList/AddToReadingList';
import styles from './Article.scss';

export default function Article({
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

  delete article['content'];

  let {source, title, description, url, author, publishedAt} = article;
  let {urlToImage} = article;
  let articleImage = urlToImage;

  title = DOMPurify.sanitize(title);
  description = DOMPurify.sanitize(description);

  if (urlToImage === null || urlToImage === 'self') {
    urlToImage = './assets/placeholder.jpg';
  }

  return (
    <li className={styles.Card}>
      <AddToReadingList
        article={article}
        readingList={readingList}
        handleUpdateReadingList={handleUpdateReadingList}
      />
      <a href={url} target={articleLink === 'same-window' ? '_top' : '_blank'}>
        <div className={styles.ImageWrapper}>
          <img
            onLoad={isValidImage}
            onError={handleImageError}
            src={urlToImage}
            alt={title}
            className={articleImage ? styles.Image : styles.ImageBorder}
          />
        </div>

        <div>
          <p className={styles.Source}>{source.name}</p>
          <div className={styles.Overflow}>
            <h3
              className={styles.Title}
              dangerouslySetInnerHTML={{__html: title}}
            />
            <p
              className={styles.Description}
              dangerouslySetInnerHTML={{__html: description}}
            />
          </div>
          <div className={styles.Footer}>
            <p>
              {startCase(relativeTime(publishedAt))}{' '}
              {!author || author.length > 20 ? '' : ' — ' + author}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}
