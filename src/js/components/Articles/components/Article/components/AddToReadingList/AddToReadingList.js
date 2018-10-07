import React from 'react';
import FeatherIcon from 'feather-icons-react';

import styles from './AddToReadingList.scss';

export default class AddToReadingList extends React.Component {
    constructor(props) {
        super(props);

        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.state = {
            checked: false
        }
    }

    componentDidMount() {
        // check if article has already been bookmarked
        const article = this.props.article;
        const readingList = JSON.parse(this.props.readingList);

        const isBookmarked = readingList.hasOwnProperty(article.url);
        isBookmarked ? this.setState({ checked: true }) : this.setState({ checked: false });
    }

    toggleBookmark() {
        const article = this.props.article;
        const isChecked = !this.state.checked;
        const readingList = JSON.parse(this.props.readingList);
        const maxNum = 2;

        this.setState((prevState) => ({
            checked: !(prevState.checked)
        }));

        if (Object.keys(readingList).length == maxNum && isChecked) {
            // if reached max number of properties in the list
            // and bookmark was just clicked to toggle to true (to add another one)
            // don't allow it to be set to true

            this.setState({checked: false});
        } else if (Object.keys(readingList).length == maxNum && !isChecked) { 
            // if reached max number of properties in the list
            // and bookmark was just clicked to toggle to false (to remove one)
            // remove bookmark from list

            this.removeBookmark(article);
        } else {
            isChecked ? this.addBookmark(article) : this.removeBookmark(article); 
        }

    }

    addBookmark(article) {
        const timeStamp = new Date().getTime();
        let readingList = JSON.parse(this.props.readingList);

        article['timestamp'] = timeStamp;
        readingList[article.url] = article;
        readingList = JSON.stringify(readingList);

        this.props.handleUpdateReadingList(readingList);
    }

    removeBookmark(article) {
        const id = article.url;
        let readingList = JSON.parse(this.props.readingList);
        delete readingList[id];

        readingList = JSON.stringify(readingList);

        this.props.handleUpdateReadingList(readingList);
    }

    render() {
        return (
            <div className={styles.Icon} onClick={this.toggleBookmark}>
                <FeatherIcon 
                    icon="bookmark"
                    className={this.state.checked ? styles.Added : ''}
                />
            </div>
        );
    }
}