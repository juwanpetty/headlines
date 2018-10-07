import React from 'react';
import FeatherIcon from 'feather-icons-react'; 

import styles from './Navigation.scss';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className={styles.Navigation}>
                <p 
                    onClick={() => this.props.togglePanel('sources')}
                    className={this.props.sourcesPanel ? styles.Selected : styles.NavigationButton}>
                    <FeatherIcon icon="chevron-left" className={styles.IconLeft} />
                    Sources
                </p>
                <p 
                    onClick={() => this.props.togglePanel('settings')}
                    className={!this.props.sourcesPanel ? styles.Selected : styles.NavigationButton}>
                    Settings
                    <FeatherIcon icon="chevron-right" className={styles.IconRight} />
                </p>
            </div>
        );
    }
}