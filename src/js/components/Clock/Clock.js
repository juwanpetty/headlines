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

    render() {
        const hourFormat = this.props.hourFormat === '12' ? true : false;
        const is24Hour = !hourFormat;
        const currentHour = this.state.date.getHours();

        return (
            <div className={this.props.showClock ? styles.Clock : styles.Hidden}>
                <h2 className={styles.ClockText}>
                    {this.state.date.toLocaleTimeString([], {hour12: hourFormat, hour: '2-digit', minute:'2-digit'})}
                    {is24Hour ? (currentHour >= 12 ? ' PM': ' AM') : null}
                </h2>
            </div>
        );
    }
}