import React from 'react';
import DOMPurify from 'dompurify';
import relativeDate from 'relative-date';
import startCase from 'lodash/startcase';

import AddToReadingList from './components/AddToReadingList/AddToReadingList';
import styles from './Article.scss';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.isValidImage = this.isValidImage.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
    this.relativeTime = this.relativeTime.bind(this);
  }

  isValidImage(e) {
    // displays placeholder if img is 1px (IGN)
    if (e.target.naturalWidth <= 100) {
      e.target.classList.add(styles.ImageBorder);
      return (e.target.src = 'assets/placeholder.jpg');
    }
  }

  handleImageError(e) {
    e.target.classList.add(styles.ImageBorder);
    return (e.target.src = 'assets/placeholder.jpg');
  }

  relativeTime(publishedAt) {
    var time = new Date(publishedAt).getTime();
    return relativeDate(time);
  }

  render() {
    delete this.props.article['content'];

    let {
      source,
      title,
      description,
      url,
      author,
      publishedAt,
    } = this.props.article;
    let {urlToImage} = this.props.article;
    let articleImage = urlToImage;

    title = DOMPurify.sanitize(title);
    description = DOMPurify.sanitize(description);

    if (urlToImage === null || urlToImage === 'self') {
      urlToImage = './assets/placeholder.jpg';
    }

    return (
      <li className={styles.Card}>
        <AddToReadingList
          article={this.props.article}
          readingList={this.props.readingList}
          handleUpdateReadingList={this.props.handleUpdateReadingList}
        />
        <a
          href={url}
          target={this.props.articleLink === 'same-window' ? '_top' : '_blank'}
        >
          <div className={styles.ImageWrapper}>
            <img
              onLoad={this.isValidImage}
              onError={this.handleImageError}
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
                {startCase(this.relativeTime(publishedAt))}{' '}
                {!author || author.length > 20 ? '' : ' — ' + author}
              </p>
            </div>
          </div>
        </a>
      </li>
    );
  }
}
