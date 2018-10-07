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
    
    formatDate(hourFormat) {
        let date = new Date();
        let hour = date.getHours();

        let customHour;

        if (hourFormat === '24' && (hour === 0 || hour === 23)) {
            customHour = hour;
            customHour += 1;
        }

        if (hourFormat === '12') {
            customHour = hour;
            customHour -= 12;
        }

        let minutes = date.getMinutes();
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        
        const period = hour >= 12 ? 'PM' : 'AM';

        const time = `${customHour}:${minutes} ${period}`;
        
        return time;
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