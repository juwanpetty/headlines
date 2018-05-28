import React from 'react';

import WeatherWidget from './WeatherWidget'; 

export default class Header extends React.Component {
    render() {
        return (
            <nav>
                <WeatherWidget />

                <div className="js-menu">
                    <i data-feather="settings" className="js-open"></i>
                    <i data-feather="x" className="js-close"></i>
                </div>
            </nav>
        );
    };
}