import React from 'react';

import Sources from './Sources';
import Settings from './Settings';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.fetchArticles = this.fetchArticles.bind(this);
    }

    fetchArticles() {
        this.props.fetchArticles(this.props.storedSources.join());
    }

    render() {
        return (
            <aside className="js-sidebar">
                <form>
                    <div className="sidebar__header">
                        <h3 className="sidebar__title">Sources</h3>
                        <p className="sidebar__subtitle">Choose what you see on the page.</p>
                    </div>

                    <div>
                        <Sources 
                            sources={this.props.sources}
                            sourceIsLoaded={this.props.sourceIsLoaded}
                            sourceError={this.props.sourceError}
                            storedSources={this.props.storedSources} 
                            handleDeleteSource={this.props.handleDeleteSource}
                            handleAddSource={this.props.handleAddSource}
                        />
                        <Settings />
                    </div>

                    <p className="attribution">Powered by <a href="https://newsapi.org/">NewsAPI.org</a></p>

                    <div className="sidebar__footer">
                        <button 
                            type="button" 
                            className="btn action js-done" 
                            value="Done" 
                            onClick={this.fetchArticles}
                        >
                        Done
                        </button>
                    </div>
                </form>
            </aside>
        );
    }
}