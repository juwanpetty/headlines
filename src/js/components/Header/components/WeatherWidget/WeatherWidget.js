import React, {useEffect, useState} from 'react';
import Toast from '../../../Toast/Toast';
import WeatherSkeleton from './components/WeatherSkeleton/WeatherSkeleton';
import styles from './WeatherWidget.scss';

export default function WeatherWidget({showWeather, weatherUnit}) {
  const [weather, setWeather] = useState([]);
  const [weatherError, setWeatherError] = useState(null);
  const [weatherIsLoaded, setWeatherIsLoaded] = useState(false);

  const API_KEY = '47e0ed37c8462d76eaa20c4a9688f807';
  const apiUrl = 'https://api.darksky.net/forecast';
  const flags = 'exclude=hourly, minutely';

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
              Toast({
                type: 'warning',
                message:
                  'Allow access to your location to enable the weather functionality',
              });
              break;
            case error.POSITION_UNAVAILABLE:
              Toast({
                type: 'error',
                message: 'Location information is unavailable.',
                onAction: () =>
                  fetchWeather(
                    position.coords.latitude,
                    position.coords.longitude,
                  ),
                onActionMessage: 'Retry',
              });
              break;
            case error.TIMEOUT:
              Toast({
                type: 'error',
                message: 'The request to get user location timed out.',
                onAction: () =>
                  fetchWeather(
                    position.coords.latitude,
                    position.coords.longitude,
                  ),
                onActionMessage: 'Retry',
              });
              break;
            case error.UNKNOWN_ERROR:
              Toast({
                type: 'error',
                message: 'An unknown error occurred.',
                onAction: () =>
                  fetchWeather(
                    position.coords.latitude,
                    position.coords.longitude,
                  ),
                onActionMessage: 'Retry',
              });
              break;
          }
        },
      );
    } else {
      Toast({
        type: 'warning',
        message: 'Geolocation is not supported in this browser',
      });
    }
  };

  const fetchWeather = (latitude, longitude) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/${apiUrl}/${API_KEY}/${latitude},${longitude}?${flags}`,
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.error) {
            console.log(result.error);

            setWeatherError(result.error);

            Toast({
              type: 'error',
              message: result.error,
              onAction: () => fetchWeather(latitude, longitude),
              onActionMessage: 'Retry',
            });

            setWeatherIsLoaded(false);
          } else {
            setWeather(result);
            setWeatherIsLoaded(true);
          }
        },
        (error) => {},
      );
  };

  if (weatherError) {
    return (
      <div
        className={
          showWeather ? styles.WeatherWidget : styles.WeatherWidgetHidden
        }
      >
        <WeatherSkeleton />
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
