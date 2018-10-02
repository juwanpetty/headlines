import React from 'react';

export default class ClockSettings extends React.Component {
    render() {
        return (
            <div className="settings clock__settings">
                <div className="settings__group">
                    <div className="checkbox">
                        <input type="checkbox" id="clock" checked={this.props.showClock} onChange={() => this.props.toggleShowClock()} />
                        <label htmlFor="clock">Clock</label>
                    </div>
                    <p className="settings__subtitle">Display a clock on the new tab page.</p>
                </div>
            </div>
        );
    };
}