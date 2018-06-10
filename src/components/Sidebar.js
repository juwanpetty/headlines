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

    togglePanel(panel) {
        this.props.togglePanel(panel);
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

                        <div className="sidebar__navigation">
                            <p 
                                onClick={() => this.togglePanel('sources')}
                                className={this.props.sourcesPanel ? 'navigation__button navigation__button--selected' : 'navigation__button'}>
                                <i data-feather="chevron-left" className="navigation__icon navigation__icon--left"></i>
                                Sources
                            </p>
                            <p 
                                onClick={() => this.togglePanel('settings')}
                                className={!this.props.sourcesPanel ? 'navigation__button navigation__button--selected' : 'navigation__button'}>
                                Settings
                                <i data-feather="chevron-right" className="navigation__icon navigation__icon--right"></i>
                            </p>
                        </div>

                        <div className="sidebar__container">
                            <div className={this.props.sourcesPanel ? 'sidebar__container__inner' : 'sidebar__container__inner sidebar__container__inner--hidden'}>
                                <Sources 
                                    sources={this.props.sources}
                                    sourceIsLoaded={this.props.sourceIsLoaded}
                                    sourceError={this.props.sourceError}
                                    storedSources={this.props.storedSources} 
                                    handleDeleteSource={this.props.handleDeleteSource}
                                    handleAddSource={this.props.handleAddSource}
                                />
                                
                                <p className="attribution">Powered by <a href="https://newsapi.org/">NewsAPI.org</a></p>
                            </div>

                            <Settings 
                                sourcesPanel={this.props.sourcesPanel} 
                                showWeather={this.props.showWeather}
                                weatherUnit={this.props.weatherUnit}
                                toggleShowWeather={this.props.toggleShowWeather}
                                toggleWeatherUnit={this.props.toggleWeatherUnit}
                            />
                        </div>

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