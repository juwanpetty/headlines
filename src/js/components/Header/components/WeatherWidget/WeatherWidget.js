import React, {useEffect, useState} from 'react';

import WeatherSkeleton from './components/WeatherSkeleton/WeatherSkeleton';
import styles from './WeatherWidget.scss';

export default function WeatherWidget({showWeather, weatherUnit}) {
  const [weather, setWeather] = useState([]);
  const [weatherError, setWeatherError] = useState(null);
  const [weatherIsLoaded, setWeatherIsLoaded] = useState(false);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error('User denied the request for Geolocation.');
              allowGeolocation(
                'Allow access to your location to enable the weather functionality',
              );
              break;
            case error.POSITION_UNAVAILABLE:
              console.error('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              console.error('The request to get user location timed out.');
              break;
            case error.UNKNOWN_ERROR:
              console.error('An unknown error occurred.');
              break;
          }
        },
      );
    } else {
      allowGeolocation('Geolocation is not supported in this browser');
    }
  };

  const fetchWeather = (latitude, longitude) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47e0ed37c8462d76eaa20c4a9688f807/${latitude},${longitude}`,
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setWeather(result);
          setWeatherIsLoaded(true);
        },
        (error) => {
          setWeatherError(error.message);
          setWeatherIsLoaded(false);
        },
      );
  };

  if (weatherError) {
    return (
      <div
        className={
          showWeather ? styles.WeatherWidget : styles.WeatherWidgetHidden
        }
      >
        Error: {weatherError}
      </div>
    );
  } else if (!weatherIsLoaded) {
    return (
      <div
        className={
          showWeather ? styles.WeatherWidget : styles.WeatherWidgetHidden
        }
      >
        <WeatherSkeleton />
      </div>
    );
  } else {
    return (
      <div
        className={
          showWeather ? styles.WeatherWidget : styles.WeatherWidgetHidden
        }
      >
        <h2 className={styles.Temperature}>
          {weatherUnit === 'us'
            ? Math.trunc(weather.currently.temperature)
            : Math.trunc((weather.currently.temperature - 32) / 1.8)}
          º
        </h2>
        <div className={styles.Details}>
          <p className={styles.Location}>
            {weatherUnit === 'us'
              ? Math.trunc(weather.daily.data[0].temperatureLow)
              : Math.trunc((weather.daily.data[0].temperatureLow - 32) / 1.8)}
            º /{' '}
            {weatherUnit === 'us'
              ? Math.trunc(weather.daily.data[0].temperatureHigh)
              : Math.trunc((weather.daily.data[0].temperatureHigh - 32) / 1.8)}
            º
          </p>
          <p className={styles.Condition}>{weather.currently.summary}</p>
        </div>
      </div>
    );
  }
}
