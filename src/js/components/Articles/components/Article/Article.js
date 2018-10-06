import React from 'react';
import DOMPurify from 'dompurify';
import relativeDate from 'relative-date';
import startCase from 'lodash/startcase';

import styles from './Article.scss';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.checkImageSize = this.checkImageSize.bind(this);
        this.relativeTime = this.relativeTime.bind(this);
    }

    checkImageSize(e) {
        // displays placeholder if img is 1px (IGN)
        if (e.target.naturalWidth <= 100) {
            e.target.classList.add('image-border');
            return e.target.src = "assets/placeholder.jpg";
        }
    }

    relativeTime(publishedAt) {
        var time = new Date(publishedAt).getTime();
        return (relativeDate(time));
    }

    render() {
        let { source, title, description, url, author, publishedAt } = this.props.article;
        let { urlToImage } = this.props.article;
        let articleImage = urlToImage;

        title = DOMPurify.sanitize(title);
        description = DOMPurify.sanitize(description);

        if (urlToImage === null || urlToImage === 'self') {
            urlToImage = "./assets/placeholder.jpg";
        }

        return (
            <li className={styles.Card}>
                <a href={url} target={this.props.articleLink === "same-window" ? "_top" : "_blank"}>
                    <div className={styles.ImageWrapper}>
                        <img onLoad={this.checkImageSize} src={urlToImage} alt={title} className={articleImage ? styles.Image : styles.ImageBorder}/>
                    </div>

                    <div>
                        <p className={styles.Source}>{source.name}</p>
                        <div className={styles.Overflow}>
                            <h3 className={styles.Title} dangerouslySetInnerHTML={{ __html: title }}></h3>
                            <p className={styles.Description} dangerouslySetInnerHTML={{ __html: description }}></p>
                        </div>
                        <div className={styles.Footer}>
                            <p>{startCase(this.relativeTime(publishedAt))} {!author || author.length > 20 ? "" : ' — ' + author }</p>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}