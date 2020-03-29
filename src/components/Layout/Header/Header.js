import React from "react";
import {
  Container,
  SettingButton,
  SettingIcon,
  WeatherContainer
} from "./Header.styles";

export const Header = ({ onSetSidebarVisible }) => {
  return (
    <Container>
      <WeatherContainer>
        <h2>53º</h2>
        <div>
          <p>59º / 68º</p>
          <p>Possible Drizzle</p>
        </div>
      </WeatherContainer>
      <SettingButton onClick={() => onSetSidebarVisible(true)}>
        <SettingIcon />
      </SettingButton>
    </Container>
  );
};
