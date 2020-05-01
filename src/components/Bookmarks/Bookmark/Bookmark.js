import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmark } from "../../../store/slices/bookmarks";
import { articlesSelector } from "../../../store/slices/articles";
import relativeDate from "relative-date";
import { startCase } from "../../../helpers/";
import {
  Container,
  Source,
  Title,
  Meta,
  Image,
  Remove,
} from "./Bookmark.module";

export const Bookmark = ({
  bookmark,
  url,
  source,
  title,
  publishedAt,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const { openIn } = useSelector(articlesSelector);

  const relativeTime = (publishedAt) => {
    var time = new Date(publishedAt).getTime();
    return relativeDate(time);
  };

  const onRemoveBookmkark = (e) => {
    e.preventDefault();

    dispatch(removeBookmark(bookmark));
  };

  return (
    <Container
      href={url}
      alt={title}
      target={openIn === "same-tab" ? "_self" : "_blank"}
    >
      <Title>{title}</Title>
      <Image>
        <img src={imageUrl} alt={title} />
      </Image>
      <Meta>
        <Source>{source}</Source> — {startCase(relativeTime(publishedAt))}
      </Meta>
      <Remove onClick={(e) => onRemoveBookmkark(e)}>Remove</Remove>
    </Container>
  );
};
