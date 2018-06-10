import React from 'react';

import WeatherSettings from './WeatherSettings';
import MessageBar from './MessageBar';

export default class Settings extends React.Component {
    render() {
        return (
            <div className={!this.props.sourcesPanel ? 'settings__container' : 'settings__container settings__container--hidden'}>
                {
                    !this.props.allowGeolocation && 
                    (
                        <MessageBar 
                            type="generic"  
                            message="Allow the broswer to access your location to enable the weather functionality"    
                        />
                    )
                }
                
                <WeatherSettings
                    sourcesPanel={this.props.sourcesPanel} 
                    showWeather={this.props.showWeather}
                    weatherUnit={this.props.weatherUnit}
                    toggleShowWeather={this.props.toggleShowWeather}
                    toggleWeatherUnit={this.props.toggleWeatherUnit}
                    allowGeolocation={this.props.allowGeolocation}
                />
            </div>
        );
    };
}