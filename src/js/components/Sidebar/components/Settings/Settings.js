import React from 'react';

import WeatherSettings from './components/WeatherSettings/WeatherSettings';
import ArticleSettings from './components/ArticleSettings/ArticleSettings';
import ClockSettings from './components/ClockSettings/ClockSettings';

export default function Settings({
  sourcesPanel,
  weatherUnit,
  toggleWeatherUnit,
  showWeather,
  toggleShowWeather,
  allowGeolocation,
  toggleHourFormat,
  toggleShowClock,
  hourFormat,
  showClock,
  showArticles,
  toggleShowArticles,
  articleLink,
  toggleArticleLink,
}) {
  return (
    <div>
      <WeatherSettings
        sourcesPanel={sourcesPanel}
        weatherUnit={weatherUnit}
        toggleWeatherUnit={toggleWeatherUnit}
        toggleShowWeather={toggleShowWeather}
        showWeather={showWeather}
        allowGeolocation={allowGeolocation}
      />

      <ClockSettings
        toggleHourFormat={toggleHourFormat}
        toggleShowClock={toggleShowClock}
        hourFormat={hourFormat}
        showClock={showClock}
      />

      <ArticleSettings
        showArticles={showArticles}
        toggleShowArticles={toggleShowArticles}
        articleLink={articleLink}
        toggleArticleLink={toggleArticleLink}
      />
    </div>
  );
}
