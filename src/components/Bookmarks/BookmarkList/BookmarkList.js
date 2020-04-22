import React from "react";
import { useSelector } from "react-redux";
import { bookmarksSelector } from "../../../store/slices/bookmarks";
import { Container } from "./BookmarkList.module";
import { Bookmark } from "../";

export const BookmarkList = () => {
  const { bookmarks } = useSelector(bookmarksSelector);

  const renderBookmarks = () => {
    if (bookmarks.length === 0) {
      return <p>No bookmarks saved</p>;
    }

    return bookmarks.map((bookmark) => {
      const { title, publishedAt, author } = bookmark;

      return (
        <Bookmark
          key={title}
          title={title}
          publishedAt={publishedAt}
          author={author}
          bookmark={bookmark}
        />
      );
    });
  };

  return <Container>{renderBookmarks()}</Container>;
};
