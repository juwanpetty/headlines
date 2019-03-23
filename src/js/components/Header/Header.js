import React from 'react';
import FeatherIcon from 'feather-icons-react';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';

import styles from './Header.scss';

export default function Header({
  showWeather,
  weatherUnit,
  allowGeolocation,
  isSidebarOpen,
  toggleSidebar,
}) {
  return (
    <nav className={styles.Navigation}>
      <WeatherWidget
        showWeather={showWeather}
        weatherUnit={weatherUnit}
        allowGeolocation={allowGeolocation}
      />

      <div className={styles.Icon} onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <FeatherIcon icon="x" />
        ) : (
          <FeatherIcon icon="settings" />
        )}
      </div>
    </nav>
  );
}
