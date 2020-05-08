import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleShowWeather,
  updateWeahterUnit,
  weatherSelector,
} from "../../../store/slices/weather";
import { Toggle, Radio, RadioGroup } from "../../Common/";
import { Label, Header, Container } from "./Weather.module";

export const Weather = () => {
  const dispatch = useDispatch();
  const { showWeather, weatherUnit } = useSelector(weatherSelector);

  return (
    <Container disabled={!showWeather}>
      <Header>
        <Label htmlfor="weather">Weather</Label>
        {/* <Toggle
          name="weather"
          id="weather"
          checked={showWeather}
          onChange={() => dispatch(toggleShowWeather())}
        /> */}
        <p>Display current weather, updated every 30 minutes.</p>
      </Header>
      <RadioGroup title="Choose a unit">
        <Radio
          label="Fahrenheit"
          id="imperial"
          name="unit"
          value="imperial"
          checked={weatherUnit === "imperial"}
          onChange={() => dispatch(updateWeahterUnit("imperial"))}
        />
        <Radio
          label="Celcius"
          id="metric"
          name="unit"
          value="metric"
          checked={weatherUnit === "metric"}
          onChange={() => dispatch(updateWeahterUnit("metric"))}
        />
      </RadioGroup>
    </Container>
  );
};
