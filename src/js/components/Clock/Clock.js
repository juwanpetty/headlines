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
        return (
            <div className={this.props.showClock ? styles.Clock : styles.Hidden}>
                <h2 className={styles.ClockText}>
                    {this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </h2>
            </div>
        );
    }
}