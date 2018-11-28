import React from 'react';

import WeatherSkeleton from './components/WeatherSkeleton/WeatherSkeleton';
import styles from './WeatherWidget.scss';

export default class WeatherWidget extends React.Component {
    constructor(props) {
        super(props);
        this.allowGeolocation = this.allowGeolocation.bind(this)
        this.state = {
            weather: [],
            weatherError: null,
            weatherIsLoaded: false,
            weatherLocation: null
        };
    }

    componentDidMount() {
        this.fetchLocation();
    }

    fetchLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            }, (error) => {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        console.error("User denied the request for Geolocation.");
                        this.allowGeolocation("Allow access to your location to enable the weather functionality");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error("Location information is unavailable.")
                        break;
                    case error.TIMEOUT:
                        console.error("The request to get user location timed out.")
                        break;
                    case error.UNKNOWN_ERROR:
                        console.error("An unknown error occurred.")
                        break;
                }
            });
        } else {
            this.allowGeolocation("Geolocation is not supported in this browser");
        }
    }

    allowGeolocation(message) {
        this.props.allowGeolocation(message);
    }

    fetchWeather(latitude, longitude) {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/47e0ed37c8462d76eaa20c4a9688f807/${latitude},${longitude}?exclude=minutely,hourly,flags`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    weatherIsLoaded: true,
                    weather: result
                });
            }, (error) => {
                this.setState({
                    weatherIsLoaded: false,
                    weatherError: error.message
                });
            })
    }

    render() {
        let weather = this.state.weather;

        if (this.state.weatherError) {
            return <div className={this.props.showWeather ? styles.WeatherWidget : styles.WeatherWidgetHidden}>Error: {this.state.weatherError}</div>;
        } else if (!this.state.weatherIsLoaded) {
            return (
                <div className={this.props.showWeather ? styles.WeatherWidget : styles.WeatherWidgetHidden}>
                    <WeatherSkeleton />
                </div>);
        } else {
            return (
                <div className={this.props.showWeather ? styles.WeatherWidget : styles.WeatherWidgetHidden}>
                    <h2 className={styles.Temperature}>{this.props.weatherUnit === 'us' ? Math.trunc(weather.currently.temperature) : Math.trunc((weather.currently.temperature - 32) / 1.8)}º</h2>
                    <div className={styles.Details}>
                        <p className={styles.Location}>
                            {this.props.weatherUnit === 'us' ? Math.trunc(weather.daily.data[0].temperatureLow) : Math.trunc((weather.daily.data[0].temperatureLow - 32) / 1.8)}º / {this.props.weatherUnit === 'us' ? Math.trunc(weather.daily.data[0].temperatureHigh) : Math.trunc((weather.daily.data[0].temperatureHigh - 32) / 1.8)}º
                        </p>
                        <p className={styles.Condition}>{weather.currently.summary}</p>
                    </div>
                </div>
            );
        }
    };
}