import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchSelector,
  toggleShowSearch,
  updateSearchEngine,
} from "../../../store/slices/search";
import { Toggle, Dropdown } from "../../Common/";
import { Label, Header, Container } from "./Search.module";

export const Search = () => {
  const dispatch = useDispatch();
  const { showSearch, searchEngine } = useSelector(searchSelector);

  const searchEngineOptions = [
    { value: "google", label: "Google" },
    { value: "duckduckgo", label: "DuckDuckGo" },
    { value: "bing", label: "Bing" },
  ];

  return (
    <Container disabled={!showSearch}>
      <Header>
        <Label htmlfor="search">Search</Label>
        <Toggle
          name="search"
          id="search"
          checked={showSearch}
          onChange={() => dispatch(toggleShowSearch())}
        />
        <p>Display the search on the new tab page.</p>
      </Header>
      <Dropdown
        defaultValue={searchEngine}
        options={searchEngineOptions}
        placeholder="Select search engine"
        onChange={(option) => dispatch(updateSearchEngine(option))}
        autoFocus
      />
    </Container>
  );
};
