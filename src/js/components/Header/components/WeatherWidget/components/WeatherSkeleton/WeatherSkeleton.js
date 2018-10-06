import React from 'react';

import styles from './WeatherSkeleton.scss';

const WeatherSkeleton = props => 
(
    <div className={styles.Skeleton}>
        <h2 className={styles.Temperature}></h2>
        <div className>
            <div className={styles.Location}></div>
            <div className={styles.Condition}></div>
        </div>
    </div>
);


export default WeatherSkeleton;