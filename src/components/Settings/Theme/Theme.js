import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiSelector, updateTheme } from "../../../store/slices/ui";
import { Radio, RadioGroup } from "../../Common/";
import { Label, Header, Container } from "./Theme.module";

export const Theme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(uiSelector);

  return (
    <Container>
      <Header>
        <Label htmlfor="theme">Theme</Label>
        <p>Change the theme to light or dark mode.</p>
      </Header>
      <RadioGroup title="Choose a theme">
        <Radio
          label="Light"
          id="light"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={() => dispatch(updateTheme("light"))}
        />
        <Radio
          label="Dark"
          id="dark"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={() => dispatch(updateTheme("dark"))}
        />
      </RadioGroup>
    </Container>
  );
};
