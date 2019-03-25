import React from 'react';
import FeatherIcon from 'feather-icons-react';
import Toast from '../../../../../Toast/Toast';
import styles from './AddToReadingList.scss';

export default class AddToReadingList extends React.Component {
  constructor(props) {
    super(props);

    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.state = {
      checked: false,
    };
  }

  componentDidMount() {
    // check if article has already been bookmarked
    const {article, readingList} = this.props;
    const parsedReadingList = JSON.parse(readingList);

    const isBookmarked = parsedReadingList.hasOwnProperty(article.title);

    isBookmarked
      ? this.setState({checked: true})
      : this.setState({checked: false});
  }

  componentDidUpdate(prevProps) {
    const {article, readingList} = this.props;

    if (prevProps.readingList.length !== readingList.length) {
      const parsedReadingList = JSON.parse(readingList);

      const isBookmarked = parsedReadingList.hasOwnProperty(article.title);
      if (!isBookmarked) {
        this.setState({checked: false});
      } else {
        this.setState({checked: true});
      }
    }

    if (prevProps.article.title.length !== article.title.length) {
      const parsedReadingList = JSON.parse(readingList);

      const isBookmarked = parsedReadingList.hasOwnProperty(article.title);
      if (!isBookmarked) {
        this.setState({checked: false});
      } else {
        this.setState({checked: true});
      }
    }
  }

  toggleBookmark() {
    const {article, readingList} = this.props;
    const {checked} = this.state;

    const isChecked = !checked;
    const parsedReadingList = JSON.parse(readingList);
    const MAX_NUM = 20;

    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));

    if (Object.keys(parsedReadingList).length == MAX_NUM && isChecked) {
      // if reached max number of properties in the list
      // and bookmark was just clicked to toggle to true (to add another one)
      // don't allow it to be set to true

      Toast({
        type: 'warning',
        message: `There cannot be more than ${MAX_NUM} articles added.`,
      });

      this.setState({checked: false});
    } else if (Object.keys(parsedReadingList).length == MAX_NUM && !isChecked) {
      // if reached max number of properties in the list
      // and bookmark was just clicked to toggle to false (to remove one)
      // remove bookmark from list

      this.removeBookmark(article);
    } else {
      isChecked ? this.addBookmark(article) : this.removeBookmark(article);
    }
  }

  addBookmark(article) {
    const {readingList, handleUpdateReadingList} = this.props;
    let parsedReadingList = JSON.parse(readingList);

    parsedReadingList[article.title] = article;
    parsedReadingList = JSON.stringify(parsedReadingList);

    handleUpdateReadingList(parsedReadingList);
  }

  removeBookmark(article) {
    const {readingList, handleUpdateReadingList} = this.props;

    const id = article.title;
    let parsedReadingList = JSON.parse(readingList);
    delete parsedReadingList[id];

    parsedReadingList = JSON.stringify(parsedReadingList);

    handleUpdateReadingList(parsedReadingList);
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
