import React from 'react';
import FeatherIcon from 'feather-icons-react';

import styles from './RemoveBoomark.scss';

export default function RemoveBookMark({
  article,
  readingList,
  handleUpdateReadingList,
}) {
  const removeBookmark = () => {
    const id = article.title;

    let parsedReadingList = readingList;
    delete parsedReadingList[id];

    parsedReadingList = JSON.stringify(parsedReadingList);

    handleUpdateReadingList(parsedReadingList);
  };

  return (
    <div className={styles.Icon} onClick={removeBookmark}>
      <FeatherIcon icon="bookmark" className={styles.Added} />
    </div>
  );
}
