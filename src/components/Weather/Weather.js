import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, weatherSelector } from "../../store/slices/weather";
import { usePosition } from "../../hooks/";
import { isObjectEmpty } from "../../helpers/isObjectEmpty";

import { WeatherContainer } from "./Weather.module";

export const Weather = () => {
  const { weather, weatherUnit, showWeather, loading, hasErrors } = useSelector(
    weatherSelector
  );
  const dispatch = useDispatch();

  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    if ((latitude && longitude) || error) {
      dispatch(fetchWeather(latitude, longitude, error));
    }
  }, [dispatch, latitude, longitude, error]);

  const renderWeather = () => {
    if (loading) return <p>Loading weather...</p>;
    if (hasErrors) return <p>Unable to display weather.</p>;

    const weatherTemp =
      weatherUnit === "imperial"
        ? `${weather.current?.temp_f}º`
        : `${weather.current?.temp_c}º`;

    return (
      !isObjectEmpty(weather) && (
        <WeatherContainer visible={showWeather}>
          <h2>{weatherTemp}</h2>
          <div>
            <p>{weather.location?.name}</p>
            <p>{weather.current?.condition?.text}</p>
          </div>
        </WeatherContainer>
      )
    );
  };

  return <div>{renderWeather()}</div>;
};
