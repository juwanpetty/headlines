import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../store/slices/ui";
import { Weather } from "../../Weather/Weather";
import { Container, SettingButton, SettingIcon } from "./Header.styles";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Weather />
      <SettingButton onClick={() => dispatch(toggleSidebar())}>
        <SettingIcon />
      </SettingButton>
    </Container>
  );
};
