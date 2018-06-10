import React from 'react';

import WeatherSettings from './WeatherSettings';
import ArticleSettings from './ArticleSettings';
import MessageBar from './MessageBar';

export default class Settings extends React.Component {
    render() {
        return (
            <div className={!this.props.sourcesPanel ? 'settings__container' : 'settings__container settings__container--hidden'}>
                {
                    this.props.allowGeolocation && 
                    (
                        <MessageBar 
                            type="generic"  
                            message={this.props.allowGeolocation}    
                        />
                    )
                }
                
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
            </div>
        );
    };
}