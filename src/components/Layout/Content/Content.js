import React from "react";
import { Clock } from "../../Clock/Clock";
import { ArticleList } from "../../Articles/";
import {
  Container,
  SearchContainer,
  Search,
  SearchButton,
  SearchButtonIcon,
  SearchEngine,
  ShortcutList,
  Shortcut,
} from "./Content.styles";

export const Content = () => {
  return (
    <Container>
      <Clock />

      <SearchContainer>
        <SearchEngine />
        <Search type="text" placeholder="Search the web" />
        <SearchButton>
          <SearchButtonIcon />
        </SearchButton>
      </SearchContainer>

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
