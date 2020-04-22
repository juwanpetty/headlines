import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleShowArticles,
  updateOpenIn,
  articlesSelector,
} from "../../../store/slices/articles";
import { Toggle, Radio, RadioGroup } from "../../Common/";
import { Label, Header, Container } from "./Articles.module";

export const Articles = () => {
  const dispatch = useDispatch();
  const { showArticles, openIn } = useSelector(articlesSelector);

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
      <RadioGroup title="Articles open in">
        <Radio
          label="Same tab"
          id="same-tab"
          name="article-link"
          value="same-tab"
          checked={openIn === "same-tab"}
          onChange={() => dispatch(updateOpenIn("same-tab"))}
        />
        <Radio
          label="New tab"
          id="new-tab"
          name="article-link"
          value="new-tab"
          checked={openIn === "new-tab"}
          onChange={() => dispatch(updateOpenIn("new-tab"))}
        />
      </RadioGroup>
    </Container>
  );
};
