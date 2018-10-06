import React from 'react';

import styles from './WeatherSettings.scss';

export default class WeatherSettings extends React.Component {
    render() {
        return (
            <div className={!this.props.allowGeolocation ? styles.Settings : styles.SettingsDisabled}>
                <div className={styles.Group}>
                    <div className={styles.Checkbox}>
                        <input type="checkbox" id="weather" checked={this.props.showWeather && !this.props.allowGeolocation} onChange={() => this.props.toggleShowWeather()} />
                        <label htmlFor="weather">Weather</label>
                    </div>
                    <p className={styles.Subtitle}>Display current weather, updated every 30 minutes.</p>
                </div>
                
                <div className={styles.Group}>
                    <p className={styles.Subtitle}>Choose a unit</p>
                    <div className={styles.Radio}>
                        <input type="radio" id="fahrenheit" name="unit" value="fahrenheit"
                            checked={this.props.weatherUnit === 'us'} 
                            onChange={() => this.props.toggleWeatherUnit('us')}
                        />
                        <label htmlFor="fahrenheit">Fahrenheit</label>
                    </div>
                    <div className={styles.Radio}>
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