import React from "react";
import {
  Container,
  Source,
  Title,
  Description,
  Overflow,
  ArticleImage,
  Published,
  Footer,
} from "./ArticleSkeleton.module";

export const ArticleSkeleton = () => (
  <Container>
    <ArticleImage />
    <Source />
    <Overflow>
      <Title>
        <div />
        <div />
        <div />
      </Title>
      <Description />
    </Overflow>
    <Footer>
      <Published />
    </Footer>
  </Container>
);
