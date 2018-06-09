import React from 'react';

export default class WeatherWidget extends React.Component {
    constructor(props) {
        super(props);
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
                this.fetchWeatherLocation(position.coords.latitude, position.coords.longitude);
            });
        } else {
            // not allowed or no browser support
        }
    }

    fetchWeather(latitude, longitude) {
        fetch(`https://api.darksky.net/forecast/47e0ed37c8462d76eaa20c4a9688f807/${latitude},${longitude}?exclude=minutely,hourly,daily,flags`)
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

    fetchWeatherLocation(latitude, longitude) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAsE6Kr4sVkKR6bUTbGlaFZ3qwiDZvFUAs`)
            .then(res => res.json())
            .then((result) => {

                const location = result.results[0].address_components;

                for (let i = 0; i < location.length; i++) {

                    if (location[i].types.includes('political')) {
                        this.setState({
                            weatherLocation: location[i].long_name
                        });
                        break;
                    }

                }
            }, (error) => {
                
            })
    }

    render() {
        let weather = this.state.weather;

        if (this.state.weatherError) {
            return <div>Error: {this.state.weatherError}</div>;
        } else if (!this.state.weatherIsLoaded) {
            return <div className="weather__widget"></div>;
        } else {
            return (
                <div className="weather__widget">
                    <h2 className="weather__temperature">{Math.trunc(weather.currently.temperature)}</h2>
                    <div className="weather__details">
                        <p className="weather__location">{this.state.weatherLocation}</p>
                        <p className="weather__condition">{weather.currently.summary}</p>
                    </div>
                </div>
            );
        }
    };
}