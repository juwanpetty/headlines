import React from 'react';

import styles from './ClockSettings.scss';

export default class ClockSettings extends React.Component {
    render() {
        return (
            <div className={styles.Settings}>
                <div className={styles.Group}>
                    <div className={styles.Checkbox}>
                        <input type="checkbox" id="clock" checked={this.props.showClock} onChange={() => this.props.toggleShowClock()} />
                        <label htmlFor="clock">Clock</label>
                    </div>
                    <p className={styles.Subtitle}>Display a clock on the new tab page.</p>
                </div>
            </div>
        );
    };
}