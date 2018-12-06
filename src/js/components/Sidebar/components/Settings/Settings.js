import React from 'react';

import WeatherSettings from './components/WeatherSettings/WeatherSettings';
import ArticleSettings from './components/ArticleSettings/ArticleSettings';
import ClockSettings from './components/ClockSettings/ClockSettings';
import WallpaperSettings from './components/WallpaperSettings/WallpaperSettings';

export default class Settings extends React.Component {
    render() {
        return (
            <div>
                <ClockSettings 
                    toggleHourFormat={this.props.toggleHourFormat}
                    toggleShowClock={this.props.toggleShowClock}
                    hourFormat={this.props.hourFormat}
                    showClock={this.props.showClock} 
                />

                <WeatherSettings
                    sourcesPanel={this.props.sourcesPanel} 
                    
                    weatherUnit={this.props.weatherUnit}
                    toggleWeatherUnit={this.props.toggleWeatherUnit}

                    toggleShowWeather={this.props.toggleShowWeather}
                    showWeather={this.props.showWeather}
                    
                    allowGeolocation={this.props.allowGeolocation}
                />

                <ArticleSettings
                    showArticles={this.props.showArticles}
                    toggleShowArticles={this.props.toggleShowArticles}

                    articleLink={this.props.articleLink}
                    toggleArticleLink={this.props.toggleArticleLink}
                />

                <WallpaperSettings
                    showWallpaper={this.props.showWallpaper}
                    toggleShowWallpaper={this.props.toggleShowWallpaper}
                />
            </div>
        );
    };
}