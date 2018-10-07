import React from 'react';
import FeatherIcon from 'feather-icons-react';

import styles from './RemoveBoomark.scss';

export default class RemoveBoomark extends React.Component {
    constructor(props) {
        super(props);

        this.removeBookmark = this.removeBookmark.bind(this);
    }

    removeBookmark() {
        const article = this.props.article;
        console.log(article);

        const id = article.url;
        let readingList = JSON.parse(this.props.readingList);
        delete readingList[id];

        readingList = JSON.stringify(readingList);

        this.props.handleUpdateReadingList(readingList);
    }

    render() {
        return (
            <div className={styles.Icon} onClick={this.removeBookmark}>
                <FeatherIcon 
                    icon="bookmark"
                    className={styles.Added}
                />
            </div>
        );
    }
}