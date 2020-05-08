import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleShowArticles,
  updateOpenIn,
  articlesSelector,
} from "../../../store/slices/articles";
import { Toggle, Dropdown } from "../../Common/";
import { Label, Header, Container } from "./Articles.module";

const articlesOptions = [
  { value: "same-tab", label: "Same tab" },
  { value: "new-tab", label: "New tab" },
  { value: "new-tab-background", label: "New tab (background)" },
];

export const Articles = () => {
  const dispatch = useDispatch();
  const { showArticles, openIn } = useSelector(articlesSelector);

  return (
    <Container disabled={!showArticles}>
      <Header>
        <Label htmlfor="articles">Articles</Label>
        {/* <Toggle
          name="articles"
          id="articles"
          checked={showArticles}
          onChange={() => dispatch(toggleShowArticles())}
        /> */}
        <p>Display articles on the new tab page.</p>
      </Header>
      <Dropdown
        defaultValue={openIn}
        options={articlesOptions}
        placeholder="Select search engine"
        onChange={(option) => dispatch(updateOpenIn(option))}
        autoFocus
      />
    </Container>
  );
};
