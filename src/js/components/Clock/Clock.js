import React from  'react';

import styles from './Clock.scss';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    formatDate(hourFormat = false) {
        hourFormat = Boolean(hourFormat === '12');

        let date = new Date();
        let dateString = date.toLocaleTimeString([], {hour12: hourFormat, hour: '2-digit', minute: '2-digit'});
        let hour = date.getHours();

        // const period = hour >= 12 ? 'PM' : 'AM';

        if (hourFormat)
            return dateString;

        if (hour === 0)
            hour = 24;

        dateString = dateString.split(':');
        dateString[0] = hour;
        dateString = dateString.join(':');

        dateString = `${dateString}`;
        return dateString;
    }

    render() {
        return (
            <div className={this.props.showClock ? styles.Clock : styles.Hidden}>
                <h2 className={styles.ClockText}>
                    {this.formatDate(this.props.hourFormat)}
                </h2>
            </div>
        );
    }
}