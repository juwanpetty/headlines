import React from "react";
import relativeDate from "relative-date";
import { startCase } from "../../../helpers/";
import {
  Container,
  Source,
  Title,
  Description,
  Overflow,
  ArticleImage,
  Footer,
} from "./Article.module";

export const Article = ({
  title,
  description,
  author,
  source,
  url,
  publishedAt,
}) => {
  const relativeTime = (publishedAt) => {
    var time = new Date(publishedAt).getTime();
    return relativeDate(time);
  };

  return (
    <Container href={url}>
      <ArticleImage />
      <Source>{source}</Source>
      <Overflow>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Overflow>
      <Footer>
        <p>
          {startCase(relativeTime(publishedAt))}{" "}
          {!author || author.length > 20 ? "" : " — " + author}
        </p>
      </Footer>
    </Container>
  );
};
