import React from 'react';

const WeatherSkeleton = props => 
(
    <div className="weather__skeleton">
        <h2 className="weather__temperature"></h2>
        <div className="weather__details">
            <div className="weather__location"></div>
            <div className="weather__condition"></div>
        </div>
    </div>
);


export default WeatherSkeleton;