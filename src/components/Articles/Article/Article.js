import React from "react";
import {
  Container,
  Source,
  Title,
  Description,
  Overflow,
  ArticleImage,
  Footer,
} from "./Article.module";

export const Article = ({ title, description, author, source, url }) => {
  return (
    <Container href={url}>
      <ArticleImage />
      <Source>{source}</Source>
      <Overflow>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Overflow>
      <Footer>
        <p>7 Minutes Ago — {author}</p>
      </Footer>
    </Container>
  );
};
