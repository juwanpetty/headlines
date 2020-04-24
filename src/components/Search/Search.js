import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "../../store/slices/search";
import {
  Container,
  SearchInput,
  SearchButton,
  SearchButtonIcon,
  SearchEngine,
} from "./Search.module";

export const Search = () => {
  const { searchEngine } = useSelector(searchSelector);

  const searchParams = {
    google: "http://www.google.com/search?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    bing: "http://www.bing.com/search?q=",
  };

  return (
    <Container>
      <SearchEngine />
      <form method="get" action={searchParams[searchEngine.value]}>
        <SearchInput
          type="text"
          placeholder="Search the web"
          name="q"
          autoComplete="off"
        />
        <SearchButton type="submit">
          <SearchButtonIcon />
        </SearchButton>
      </form>
    </Container>
  );
};
