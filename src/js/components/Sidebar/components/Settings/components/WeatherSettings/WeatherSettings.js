import React from 'react';

import styles from './WeatherSettings.scss';

export default function WeatherSettings({
  allowGeolocation,
  showWeather,
  toggleShowWeather,
  weatherUnit,
  toggleWeatherUnit,
}) {
  return (
    <div
      className={!allowGeolocation ? styles.Settings : styles.SettingsDisabled}
    >
      <div className={styles.Group}>
        <div className={styles.Checkbox}>
          <input
            type="checkbox"
            id="weather"
            checked={showWeather && !allowGeolocation}
            onChange={() => toggleShowWeather()}
          />
          <label htmlFor="weather">Weather</label>
        </div>
        <p className={styles.Subtitle}>
          Display current weather, updated every 30 minutes.
        </p>
      </div>

      <div className={styles.Group}>
        <p className={styles.Subtitle}>Choose a unit</p>
        <div className={styles.Radio}>
          <input
            type="radio"
            id="fahrenheit"
            name="unit"
            value="fahrenheit"
            checked={weatherUnit === 'us'}
            onChange={() => toggleWeatherUnit('us')}
          />
          <label htmlFor="fahrenheit">Fahrenheit</label>
        </div>
        <div className={styles.Radio}>
          <input
            type="radio"
            id="celcius"
            name="unit"
            value="celcius"
            checked={weatherUnit === 'si'}
            onChange={() => toggleWeatherUnit('si')}
          />
          <label htmlFor="celcius">Celcius</label>
        </div>
      </div>
    </div>
  );
}
