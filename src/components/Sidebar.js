import React from 'react';

import Sources from './Sources';
import Settings from './Settings';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <Sources />
                <Settings />
            </div>
        );
    }
}