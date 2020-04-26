import React from "react";
import { useDispatch } from "react-redux";
import { removeBookmark } from "../../../store/slices/bookmarks";
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

  const relativeTime = (publishedAt) => {
    var time = new Date(publishedAt).getTime();
    return relativeDate(time);
  };

  const onRemoveBookmkark = () => {
    setTimeout(() => {
      dispatch(removeBookmark(bookmark));
    }, 100);
  };

  return (
    <Container href={url} alt={title}>
      <Title>{title}</Title>
      <Image>
        <img src={imageUrl} alt={title} />
      </Image>
      <Meta>
        {startCase(relativeTime(publishedAt))} — <Source>{source}</Source>
      </Meta>
      <Remove onClick={() => onRemoveBookmkark()}>Remove</Remove>
    </Container>
  );
};
