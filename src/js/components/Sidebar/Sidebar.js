import React from 'react';
import FeatherIcon from 'feather-icons-react'; 
import Sources from './components/Sources/Sources';
import Settings from './components/Settings/Settings';

import styles from './Sidebar.scss';

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
                    className={this.props.isSidebarOpen ? styles.Sidebar : styles.SidebarHidden}
                    onClick={this.preventBubbling}
                >
                    <form>
                        <div className={styles.Header}>
                            <h3 className={styles.Title}>Sources</h3>
                            <p className={styles.Subtitle}>Choose what you see on the page.</p>
                        </div>

                        <div className={styles.Navigation}>
                            <p 
                                onClick={() => this.togglePanel('sources')}
                                className={this.props.sourcesPanel ? styles.Selected : styles.NavigationButton}>
                                <FeatherIcon icon="chevron-left" className={styles.IconLeft} />
                                Sources
                            </p>
                            <p 
                                onClick={() => this.togglePanel('settings')}
                                className={!this.props.sourcesPanel ? styles.Selected : styles.NavigationButton}>
                                Settings
                                <FeatherIcon icon="chevron-right" className={styles.IconRight} />
                            </p>
                        </div>

                        <div className={styles.Container}>
                            <div className={this.props.sourcesPanel ? styles.ContainerInner : styles.ContainerInnerHidden}>
                                <Sources 
                                    sources={this.props.sources}
                                    sourceIsLoaded={this.props.sourceIsLoaded}
                                    sourceError={this.props.sourceError}
                                    storedSources={this.props.storedSources} 
                                    handleDeleteSource={this.props.handleDeleteSource}
                                    handleAddSource={this.props.handleAddSource}
                                />
                                
                                <p className={styles.Attribution}>Powered by <a href="https://newsapi.org/">NewsAPI.org</a></p>
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
                                hourFormat={this.props.hourFormat}
                                toggleShowClock={this.props.toggleShowClock}
                                toggleHourFormat={this.props.toggleHourFormat}
                            />
                        </div>

                    </form>
                </aside>

                <div 
                    className={this.props.isSidebarOpen ? styles.Footer : styles.FooterHidden}
                    onClick={this.preventBubbling}
                >
                    <button 
                        type="button" 
                        className={styles.ActionButton} 
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