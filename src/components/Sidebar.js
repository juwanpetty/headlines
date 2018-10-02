import React from 'react';
import FeatherIcon from 'feather-icons-react'; 
import Sources from './Sources';
import Settings from './Settings';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.preventBubbling = this.preventBubbling.bind(this);
    }

    toggleSidebar(e) {
        e.stopPropagation();
        this.props.toggleSidebar(e);
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
                                <FeatherIcon icon="chevron-left" className="navigation__icon navigation__icon--left" />
                                Sources
                            </p>
                            <p 
                                onClick={() => this.togglePanel('settings')}
                                className={!this.props.sourcesPanel ? 'navigation__button navigation__button--selected' : 'navigation__button'}>
                                Settings
                                <FeatherIcon icon="chevron-right" className="navigation__icon navigation__icon--right" />
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

                                weatherUnit={this.props.weatherUnit}
                                toggleWeatherUnit={this.props.toggleWeatherUnit}

                                articleLink={this.props.articleLink}
                                toggleArticleLink={this.props.toggleArticleLink}

                                showWeather={this.props.showWeather}
                                toggleShowWeather={this.props.toggleShowWeather}

                                showArticles={this.props.showArticles}
                                toggleShowArticles={this.props.toggleShowArticles}
                                
                                allowGeolocation={this.props.allowGeolocation}

                                showClock={this.props.showClock}
                                toggleShowClock={this.props.toggleShowClock}
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
                        onClick={this.toggleSidebar}
                    >
                    Done
                    </button>
                </div>
            </div>
        );
    }
}