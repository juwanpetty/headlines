import React from 'react';

import WeatherSkeleton from './components/WeatherSkeleton/WeatherSkeleton';

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
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=d2baab033029d23257d1f1c79b0aedb5&units=imperial`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    weatherIsLoaded: true,
                    weatherLocation: result.name, 
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
            return <div className={this.props.showWeather ? "weather__widget" : "weather__widget weather__widget--hidden"}>Error: {this.state.weatherError}</div>;
        } else if (!this.state.weatherIsLoaded) {
            return (
                <div className={this.props.showWeather ? "weather__widget" : "weather__widget weather__widget--hidden"}>
                    <WeatherSkeleton />
                </div>);
        } else {
            return (
                <div className={this.props.showWeather ? "weather__widget" : "weather__widget weather__widget--hidden"}>
                    <h2 className="weather__temperature">{this.props.weatherUnit === 'us' ? Math.trunc(weather.main.temp) : Math.trunc((weather.main.temp - 32) / 1.8)}</h2>
                    <div className="weather__details">
                        <p className="weather__location">{this.state.weatherLocation}</p>
                        <p className="weather__condition">{weather.weather[0].main}</p>
                    </div>
                </div>
            );
        }
    };
}