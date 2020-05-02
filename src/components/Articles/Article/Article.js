import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import {
  bookmarksSelector,
  addBookmark,
  removeBookmark,
} from "../../../store/slices/bookmarks";
import { articlesSelector } from "../../../store/slices/articles";
import relativeDate from "relative-date";
import { startCase } from "../../../helpers/";
import {
  Container,
  Source,
  Title,
  Image,
  Description,
  Overflow,
  ArticleImage,
  Footer,
  Bookmark,
} from "./Article.module";
import placeholder from "../../../assets/article/placeholder.jpg";

export const Article = ({
  title,
  description,
  author,
  source,
  url,
  imageUrl,
  publishedAt,
  article,
}) => {
  const [checked, setChecked] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [published, setPublished] = useState(() => {
    const time = new Date(publishedAt).getTime();
    return relativeDate(time);
  });

  const imageRef = useRef();
  const dispatch = useDispatch();
  const { bookmarks } = useSelector(bookmarksSelector);
  const { openIn } = useSelector(articlesSelector);

  // checks if article is bookmarked
  useEffect(() => {
    setChecked(bookmarks.some((bookmark) => bookmark.title === title));
  }, [bookmarks, title]);

  // updates relative publish date every second
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    if (imageUrl === null || imageUrl === "self") {
      imageRef.current.src = placeholder;
    }
  }, [imageUrl]);

  const tick = () => {
    setPublished(relativeTime(publishedAt));
  };

  const relativeTime = (publishedAt) => {
    const time = new Date(publishedAt).getTime();
    return relativeDate(time);
  };

  const onHandleClick = (e) => {
    // prevent from redirecting to link
    e.preventDefault();

    if (checked) {
      dispatch(removeBookmark(article));
    } else {
      dispatch(addBookmark(article));
    }
  };

  const onImageLoad = () => {
    setImgLoaded(true);
  };

  return (
    <Container href={url} target={openIn === "same-tab" ? "_self" : "_blank"}>
      <ArticleImage>
        <Image
          loaded={imgLoaded}
          ref={imageRef}
          src={imageUrl}
          alt={title}
          onLoad={() => onImageLoad()}
        />
      </ArticleImage>
      <Source>{source}</Source>
      <Overflow>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Overflow>
      <Footer>
        <p>
          {startCase(published)}{" "}
          {!author || author.length > 20 ? "" : " — " + author}
        </p>
        <Bookmark onClick={(e) => onHandleClick(e)}>
          {checked ? <BsBookmarkFill /> : <BsBookmark />}
        </Bookmark>
      </Footer>
    </Container>
  );
};
