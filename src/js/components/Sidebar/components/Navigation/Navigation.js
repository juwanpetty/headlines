import React from 'react';

import styles from './Navigation.scss';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className={styles.Navigation}>
                <p 
                    onClick={() => this.props.togglePanel('sources')}
                    className={this.props.sourcesPanel === 'sources' ? styles.Selected : styles.NavigationButton}>
                    Sources
                </p>
                <p 
                    onClick={() => this.props.togglePanel('bookmark')}
                    className={this.props.sourcesPanel === 'bookmark' ? styles.Selected : styles.NavigationButton}>
                    Reading List
                </p>
                <p 
                    onClick={() => this.props.togglePanel('settings')}
                    className={this.props.sourcesPanel === 'settings' ? styles.Selected : styles.NavigationButton}>
                    Settings
                </p>
                <p 
                    onClick={() => this.props.togglePanel('about')}
                    className={this.props.sourcesPanel === 'about' ? styles.Selected : styles.NavigationButton}>
                    About
                </p>
            </div>
        );
    }
}