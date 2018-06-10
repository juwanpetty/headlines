import React from 'react';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={!this.props.sourcesPanel ? 'settings__container' : 'settings__container settings__container--hidden'}>
                <p>Settings Component</p>
            </div>
        );
    };
}