import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, toggleShowSearch } from "../../../store/slices/search";
import { Toggle } from "../../Common/";
import { Label, Header, Container } from "./Search.module";

export const Search = () => {
  const dispatch = useDispatch();
  const { showSearch } = useSelector(searchSelector);

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
        <p>PLEASE CHANGE ME</p>
      </Header>
    </Container>
  );
};
