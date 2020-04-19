import React from "react";
import {
  Container,
  SearchInput,
  SearchButton,
  SearchButtonIcon,
  SearchEngine,
} from "./Search.module";

export const Search = () => {
  return (
    <Container>
      <SearchEngine />
      <SearchInput type="text" placeholder="Search the web" />
      <SearchButton>
        <SearchButtonIcon />
      </SearchButton>
    </Container>
  );
};
