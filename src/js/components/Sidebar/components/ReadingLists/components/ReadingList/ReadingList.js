import React from 'react';
import DOMPurify from 'dompurify';
import relativeDate from 'relative-date';
import startCase from 'lodash/startcase';

import RemoveBoomark from './components/RemoveBoomark/RemoveBoomark';
import styles from './ReadingList.scss';

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
            <li className={styles.Bookmark}>
                <RemoveBoomark 
                        article={this.props.article} 
                        readingList={this.props.readingList}
                        handleUpdateReadingList={this.props.handleUpdateReadingList}
                />
                <a href={url} target={this.props.articleLink === "same-window" ? "_top" : "_blank"}>
                    <p>{title}</p>
                </a>
            </li>
        );
    }
}