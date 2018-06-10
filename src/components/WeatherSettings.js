import React from 'react';

export default class WeatherSettings extends React.Component {
    render() {
        return (
            <div className={this.props.allowGeolocation ? "settings" : "settings settings--disable-settings"}>
                <div className="settings__group">
                    <div className="checkbox">
                        <input type="checkbox" id="weather" checked={this.props.showWeather && this.props.allowGeolocation} onChange={() => this.props.toggleShowWeather()} />
                        <label htmlFor="weather">Weather</label>
                    </div>
                    <p className="settings__subtitle">Display current weather, updated every 30 minutes.</p>
                </div>
                
                <div className="settings__group">
                    <p className="settings__subtitle">Choose a unit</p>
                    <div className="radio">
                        <input type="radio" id="fahrenheit" name="unit" value="fahrenheit"
                            checked={this.props.weatherUnit === 'us'} 
                            onChange={() => this.props.toggleWeatherUnit('us')}
                        />
                        <label htmlFor="fahrenheit">Fahrenheit</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="celcius" name="unit" value="celcius" 
                            checked={this.props.weatherUnit === 'si'} 
                            onChange={() => this.props.toggleWeatherUnit('si')}
                        />
                        <label htmlFor="celcius">Celcius</label>
                    </div>
                </div>
            </div>
        );
    };
}