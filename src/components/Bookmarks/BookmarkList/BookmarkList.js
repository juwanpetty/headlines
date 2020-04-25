import React from "react";
import { useSelector } from "react-redux";
import { bookmarksSelector } from "../../../store/slices/bookmarks";
import { BsBookmark } from "react-icons/bs";
import { Container, EmptyState, BookmarkIcon } from "./BookmarkList.module";
import { Bookmark } from "../";

export const BookmarkList = () => {
  const { bookmarks } = useSelector(bookmarksSelector);

  const renderBookmarks = () => {
    if (bookmarks.length === 0) {
      return (
        <EmptyState>
          <p>
            There are no articles saved. Click the
            <BookmarkIcon>
              <BsBookmark />
            </BookmarkIcon>
            icon to save articles to read later.
          </p>
        </EmptyState>
      );
    }

    return bookmarks.map((bookmark) => {
      const { title, publishedAt, author, urlToImage } = bookmark;

      return (
        <Bookmark
          key={title}
          title={title}
          imageUrl={urlToImage}
          publishedAt={publishedAt}
          author={author}
          bookmark={bookmark}
        />
      );
    });
  };

  return <Container>{renderBookmarks()}</Container>;
};
