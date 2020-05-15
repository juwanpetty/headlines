import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "../../store/slices/search";
import {
  Container,
  SearchInput,
  SearchButton,
  SearchButtonIcon,
  SearchEngine,
} from "./Search.module";
import googleImg from "../../assets/search/google.png";
import bingImg from "../../assets/search/bing.png";
import duckduckgoImg from "../../assets/search/duckduckgo.png";

export const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchImg, setSearchImg] = useState(googleImg);
  const { searchEngine } = useSelector(searchSelector);

  const searchParams = {
    google: "http://www.google.com/search?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    bing: "http://www.bing.com/search?q=",
  };

  useEffect(() => {
    switch (searchEngine.value) {
      case "google":
        setSearchImg(googleImg);
        break;
      case "bing":
        setSearchImg(bingImg);
        break;
      case "duckduckgo":
        setSearchImg(duckduckgoImg);
        break;
      default:
        break;
    }
  }, [searchEngine]);

  const handleOnFocus = () => setIsFocus(true);
  const handleOnBlur = () => setIsFocus(false);

  return (
    <Container isFocus={isFocus}>
      <SearchEngine htmlFor="searchbar">
        <img src={searchImg} alt={`${searchEngine.label} logo`} />
      </SearchEngine>
      <form method="get" action={searchParams[searchEngine.value]}>
        <SearchInput
          onFocus={() => handleOnFocus()}
          onBlur={() => handleOnBlur()}
          id="searchbar"
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
