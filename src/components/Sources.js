import React from 'react';

import Source from './Source';

export default class Sources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            loadedSources: []
        };
    }

    componentDidMount() {
        fetch(`https://newsapi.org/v2/sources?country=us&apiKey=9e0f251af2d2433793804d01f677f4ba`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    loadedSources: result.sources
                });
            }, (error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            })
    }

    handleCapatilize(label) {
        let category = label.split("");
        category[0] = category[0].toUpperCase();
        category = category.join("");
        return category;
    }
    
    render() {
        let filteredSources;
        const { error, isLoaded, loadedSources } = this.state;
        const categories = ['business', 'entertainment', 'technology', 
                            'general', 'science', 'sports', 'health'];

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="js-sources">
                    {
                        // go through each category
                        categories.map((category, index) => { 
                            // only use the sources with matching categories
                            filteredSources = loadedSources.filter((sources) => {
                                return sources.category == category;
                            });
    
                            return (
                                <div key={index}>
                                    <h3>{this.handleCapatilize(category)}</h3>
                                    <div className="source__group">
                                        { 
                                            filteredSources.map((source, index) => {
                                                return <Source 
                                                        key={index} 
                                                        source={source} 
                                                        isChecked={this.props.sources.includes(source.id)}
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