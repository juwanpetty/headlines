import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleShowArticles,
  articlesSelector,
} from "../../../store/slices/articles";
import { Toggle } from "../../Common/";
import { Label, Header, Container } from "./Articles.module";

export const Articles = () => {
  const dispatch = useDispatch();
  const { showArticles } = useSelector(articlesSelector);

  return (
    <Container disabled={!showArticles}>
      <Header>
        <Label htmlfor="articles">Articles</Label>
        <Toggle
          name="articles"
          id="articles"
          checked={showArticles}
          onChange={() => dispatch(toggleShowArticles())}
        />
        <p>Display articles on the new tab page.</p>
      </Header>
    </Container>
  );
};
