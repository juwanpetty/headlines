import React from "react";
import { Clock } from "../../Clock/Clock";
import { ArticleList } from "../../Articles/";
import { Search } from "../../Search/";
import { Container, ShortcutList, Shortcut } from "./Content.styles";

export const Content = () => {
  return (
    <Container>
      <Clock />

      <Search />

      <ArticleList />

      <ShortcutList>
        <Shortcut>
          <p>(2) YouTube</p>
        </Shortcut>
        <Shortcut>
          <p>Dribbble - Discover the...</p>
        </Shortcut>
        <Shortcut>
          <p>Twitter</p>
        </Shortcut>
      </ShortcutList>
    </Container>
  );
};
