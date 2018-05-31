import React from 'react';

import Sources from './Sources';
import Settings from './Settings';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSidelines = this.toggleSidelines.bind(this);
        this.preventBubbling = this.preventBubbling.bind(this);
    }

    toggleSidelines(e) {
        e.stopPropagation();
        this.props.toggleSidelines(e);
    }

    preventBubbling(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <div>
                <aside 
                    className={this.props.isSidebarOpen ? "js-sidebar" : "js-sidebar hidden"}
                    onClick={this.preventBubbling}
                >
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
                    </form>
                </aside>

                <div 
                    className={this.props.isSidebarOpen ? "sidebar__footer" : "sidebar__footer hidden"}
                    onClick={this.preventBubbling}
                >
                    <button 
                        type="button" 
                        className="btn action js-done" 
                        value="Done" 
                        onClick={this.toggleSidelines}
                    >
                    Done
                    </button>
                </div>
            </div>
        );
    }
}