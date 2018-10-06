const startCase = require('lodash/startcase');

import React from 'react';

import Source from './components/Source/Source';
import styles from './Sources.scss';

export default class Sources extends React.Component {
    render() {
        let filteredSources;
        const { sourceError, sourceIsLoaded, sources } = this.props;
        const categories = ['business', 'entertainment', 'technology', 
                            'general', 'science', 'sports', 'health'];

        if (sourceError) {
            return <div>Error: {error.message}</div>;
        } else if (!sourceIsLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className={styles.Sources}>
                    {
                        // go through each category
                        categories.map((category, index) => { 
                            // only use the sources with matching categories
                            filteredSources = sources.filter((sources) => {
                                return sources.category == category;
                            });
    
                            return (
                                <div key={index}>
                                    <h3 className={styles.Title}>{startCase(category)}</h3>
                                    <div className={styles.SourceGroup}>
                                        { 
                                            filteredSources.map((source, index) => {
                                                return <Source 
                                                        key={index} 
                                                        source={source} 
                                                        storedSources={this.props.storedSources}
                                                        isChecked={this.props.storedSources.includes(source.id)}
                                                        handleDeleteSource={this.props.handleDeleteSource}
                                                        handleAddSource={this.props.handleAddSource}
                                                        />
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
    };
}