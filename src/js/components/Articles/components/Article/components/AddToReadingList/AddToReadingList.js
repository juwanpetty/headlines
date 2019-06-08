import React, {useState, useEffect} from 'react';
import FeatherIcon from 'feather-icons-react';
import Toast from '../../../../../Toast/Toast';
import styles from './AddToReadingList.scss';

const AddToReadingList = ({article, readingList, handleUpdateReadingList}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const parsedReadingList = JSON.parse(readingList);
    const isBookmarked = parsedReadingList.hasOwnProperty(article.title);

    if (isBookmarked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, []);

  useEffect(() => {
    const parsedReadingList = JSON.parse(readingList);

    const isBookmarked = parsedReadingList.hasOwnProperty(article.title);
    if (!isBookmarked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [readingList]);

  useEffect(() => {
    const parsedReadingList = JSON.parse(readingList);

    const isBookmarked = parsedReadingList.hasOwnProperty(article.title);
    if (!isBookmarked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [article]);

  const addBookmark = (article) => {
    let parsedReadingList = JSON.parse(readingList);

    parsedReadingList[article.title] = article;
    parsedReadingList = JSON.stringify(parsedReadingList);

    handleUpdateReadingList(parsedReadingList);
  };

  const removeBookmark = (article) => {
    const id = article.title;
    let parsedReadingList = JSON.parse(readingList);
    delete parsedReadingList[id];

    parsedReadingList = JSON.stringify(parsedReadingList);

    handleUpdateReadingList(parsedReadingList);
  };

  const toggleBookmark = () => {
    const isChecked = !checked;
    const parsedReadingList = JSON.parse(readingList);
    const MAX_NUM = 20;

    setChecked(!checked);

    if (Object.keys(parsedReadingList).length == MAX_NUM && isChecked) {
      // if reached max number of properties in the list
      // and bookmark was just clicked to toggle to true (to add another one)
      // don't allow it to be set to true

      Toast({
        type: 'warning',
        message: `There cannot be more than ${MAX_NUM} articles added.`,
      });

      setChecked(false);
    } else if (Object.keys(parsedReadingList).length == MAX_NUM && !isChecked) {
      // if reached max number of properties in the list
      // and bookmark was just clicked to toggle to false (to remove one)
      // remove bookmark from list

      removeBookmark(article);
    } else {
      if (isChecked) {
        addBookmark(article);
      } else {
        removeBookmark(article);
      }
    }
  };

  return (
    <div className={styles.Icon} onClick={toggleBookmark}>
      <FeatherIcon icon="bookmark" className={checked ? styles.Added : ''} />
    </div>
  );
};

export default AddToReadingList;
