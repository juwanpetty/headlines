import React from 'react';

import ReadingList from './components/ReadingList/ReadingList';
import EmptyState from './components/EmptyState/EmptyState';
import styles from './ReadingLists.scss';

export default function ReadingLists({
  articleLink,
  readingList,
  handleUpdateReadingList,
}) {
  let parsedReadingList = JSON.parse(readingList);
  const bookmarksExist = Boolean(Object.keys(parsedReadingList).length > 0);

  const reverseList = (obj) => {
    let newObj = {};
    let revObj = Object.keys(obj).reverse();
    revObj.forEach((i) => {
      newObj[i] = obj[i];
    });

    return newObj;
  };

  const reversedReadingList = reverseList(parsedReadingList);

  if (bookmarksExist) {
    return (
      <div>
        {Object.keys(reversedReadingList).map((e, index) => {
          const article = reversedReadingList[e];

          return (
            <ReadingList
              key={index}
              article={article}
              articleLink={articleLink}
              readingList={parsedReadingList}
              handleUpdateReadingList={handleUpdateReadingList}
            />
          );
        })}
      </div>
    );
  } else {
    return <EmptyState />;
  }
}
