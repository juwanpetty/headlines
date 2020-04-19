import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleShowWeather,
  weatherSelector,
} from "../../../store/slices/weather";
import { Toggle } from "../../Common/";
import { Label, Header, Container } from "./Weather.module";

export const Weather = () => {
  const dispatch = useDispatch();
  const { showWeather } = useSelector(weatherSelector);

  return (
    <Container disabled={!showWeather}>
      <Header>
        <Label htmlfor="weather">Weather</Label>
        <Toggle
          name="weather"
          id="weather"
          checked={showWeather}
          onChange={() => dispatch(toggleShowWeather())}
        />
        <p>Display current weather, updated every 30 minutes.</p>
      </Header>
    </Container>
  );
};
