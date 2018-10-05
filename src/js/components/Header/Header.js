import React from 'react';
import FeatherIcon from 'feather-icons-react'; 
import WeatherWidget from './components/WeatherWidget/WeatherWidget';

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
            <nav>
                <WeatherWidget
                    showWeather={this.props.showWeather}
                    weatherUnit={this.props.weatherUnit}
                    allowGeolocation={this.props.allowGeolocation}
                />

                <div 
                    className={this.props.isSidebarOpen ? "svg__wrapper js-menu sidebar-open" : "svg__wrapper js-menu"}
                    onClick={this.toggleSidebar}
                >
                    <FeatherIcon icon="settings" className="js-open" />
                    <FeatherIcon icon="x" className="js-close" />
                </div>
            </nav>
        );
    };
}