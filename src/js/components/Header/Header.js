import React from 'react';
import FeatherIcon from 'feather-icons-react'; 
import WeatherWidget from './components/WeatherWidget/WeatherWidget';

import styles from './Header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar(e) {
        e.stopPropagation();
        this.props.toggleSidebar(e);
    }

    render() {
        return (
            <nav className={styles.Navigation}>
                <WeatherWidget
                    showWeather={this.props.showWeather}
                    weatherUnit={this.props.weatherUnit}
                    allowGeolocation={this.props.allowGeolocation}
                    showWallpaper={this.props.showWallpaper}
                />

                <div 
                    className={styles.Icon}
                    onClick={this.toggleSidebar}
                >
                {
                    this.props.isSidebarOpen 
                        ? <FeatherIcon icon="x" />
                        : <FeatherIcon icon="settings" />
                }
                </div>
            </nav>
        );
    };
}