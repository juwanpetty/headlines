import React from "react";
import { Clock } from "../../Clock/Clock";
import { ArticleList } from "../../Articles/";
import { Search } from "../../Search/";
import { ShortcutGrid } from "../../Shortcuts/";
import { Container } from "./Content.styles";

export const Content = () => {
  return (
    <Container>
      <Clock />

      <Search />

      <ArticleList />

      <ShortcutGrid />
    </Container>
  );
};
