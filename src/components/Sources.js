const startCase = require('lodash/startcase');

import React from 'react';

import Source from './Source';

export default class Sources extends React.Component {
    constructor(props) {
        super(props);
    }

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
                <div className="js-sources">
                    {
                        // go through each category
                        categories.map((category, index) => { 
                            // only use the sources with matching categories
                            filteredSources = sources.filter((sources) => {
                                return sources.category == category;
                            });
    
                            return (
                                <div key={index}>
                                    <h3>{startCase(category)}</h3>
                                    <div className="source__group">
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