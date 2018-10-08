import React from 'react';
import FeatherIcon from 'feather-icons-react'; 

import styles from './EmptyState.scss';

export default class EmptyState extends React.Component {
    render() {
        return(
            <div className={styles.EmptyState}>
                <p className={styles.Content}>
                    There are no articles saved. 
                    Click the 
                    <span>
                        <FeatherIcon 
                            icon="bookmark" 
                            className={styles.Bookmark} 
                        />
                    </span> 
                    icon to save articles to read later.
                </p>
            </div>
        );
    }
}