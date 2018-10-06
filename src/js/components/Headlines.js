const shuffle = require('lodash/shuffle');

import React from 'react';

import Header from './Header/Header'
import Search from './Search/Search'
import Articles from './Articles/Articles'
import Sidebar from './Sidebar/Sidebar'
import Clock from './Clock/Clock'

import styles from './Headlines.scss';

export default class Headlines extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddSource = this.handleAddSource.bind(this)
        this.handleDeleteSource = this.handleDeleteSource.bind(this)

        this.fetchSources = this.fetchSources.bind(this)
        this.fetchArticles = this.fetchArticles.bind(this)

        this.toggleSidebar = this.toggleSidebar.bind(this)
        this.togglePanel = this.togglePanel.bind(this)
        this.toggleSidebarOnBodyClick = this.toggleSidebarOnBodyClick.bind(this)

        this.toggleShowWeather = this.toggleShowWeather.bind(this)
        this.toggleShowArticles = this.toggleShowArticles.bind(this)

        this.toggleWeatherUnit = this.toggleWeatherUnit.bind(this)
        this.toggleArticleLink = this.toggleArticleLink.bind(this)

        this.allowGeolocation = this.allowGeolocation.bind(this)

        this.toggleShowClock = this.toggleShowClock.bind(this)
        this.toggleHourFormat = this.toggleHourFormat.bind(this)

        this.handleUpdateReadingList = this.handleUpdateReadingList.bind(this)
        this.state = {
            storedSources: [],
            passedSources: [],
            sources : [],
            sourceIsLoaded: false,
            sourceError: null,

            articles: [],
            articleIsLoaded: false,
            articleError: null,

            isSidebarOpen: false,
            sourcesPanel: true,

            showWeather: true,
            weatherUnit: 'us',

            showArticles: true,
            articleLink: 'same-window',

            allowGeolocation: '',

            showClock: true,
            hourFormat: '12',

            readingList: '{}'
        };
    }

    componentDidMount() {
        if (localStorage.showWeather) {
            if (localStorage.getItem('showWeather') === 'true') {
                this.setState({ showWeather: true });
            } else {
                this.setState({ showWeather: false });
            }
        } else {
            localStorage.setItem('showWeather', true);
        }

        if (localStorage.showArticles) {
            if (localStorage.getItem('showArticles') === 'true') {
                this.setState({ showArticles: true });
            } else {
                this.setState({ showArticles: false });
            }
        } else {
            localStorage.setItem('showArticles', true);
        }

        if (localStorage.weatherUnit) {
            this.setState({ 
                weatherUnit: localStorage.getItem('weatherUnit')
            });
        } else {
            localStorage.setItem('weatherUnit', 'us');
        }

        if (localStorage.articleLink) {
            this.setState({ 
                articleLink: localStorage.getItem('articleLink')
            });
        } else {
            localStorage.setItem('articleLink', 'same-window');
        }

        if (localStorage.showClock) {
            if (localStorage.getItem('showClock') === 'true') {
                this.setState({ showClock: true });
            } else {
                this.setState({ showClock: false });
            }
        } else {
            localStorage.setItem('showClock', true);
        }

        if (localStorage.hourFormat) {
            this.setState({ 
                hourFormat: localStorage.getItem('hourFormat')
            });
        } else {
            localStorage.setItem('hourFormat', '12');
        }

        if (localStorage.readingList) {
            this.setState({ 
                readingList: localStorage.getItem('readingList')
            });
        } else {
            localStorage.setItem('readingList', '{}');
        }

        try {
            let storedSources = localStorage.getItem('sources');
            storedSources = storedSources.split(',');

            if (storedSources) {
                this.setState(() => ( { storedSources } ));
            }

            // fetch articles
            this.fetchArticles(storedSources.join());
        } catch (e) {
            // if there are no sources stored, fetch sources
            fetch(`https://newsapi.org/v2/sources?country=us&apiKey=9e0f251af2d2433793804d01f677f4ba`)
                .then(res => res.json())
                .then((result) => {
                    const { sources } = result;
                    let randomSources = [];

                    // grab three random sources and update state
                    shuffle(sources).slice(0, 3).map((source) => {
                        randomSources.push(source.id)
                    });

                    // make a source localStorage
                    localStorage.setItem('sources', randomSources.join());

                    this.setState({
                        sourceIsLoaded: true,
                        storedSources: randomSources,
                        sources
                    });

                    this.fetchArticles(randomSources.join());
                }, (error) => {
                    this.setState({
                        sourceIsLoaded: false,
                        sourceError
                    });
                })          
        }

        // fetch sources
        this.fetchSources();

        // render icons in view
        feather.replace();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.storedSources.length !== this.state.storedSources.length) {
            const sources = this.state.storedSources.join();
            localStorage.setItem('sources', sources);
        }

        if (prevState.showWeather !== this.state.showWeather) {
            localStorage.setItem('showWeather', this.state.showWeather);
        }

        if (prevState.showArticles !== this.state.showArticles) {
            localStorage.setItem('showArticles', this.state.showArticles);
        }

        if (prevState.weatherUnit !== this.state.weatherUnit) {
            localStorage.setItem('weatherUnit', this.state.weatherUnit);
        }

        if (prevState.articleLink !== this.state.articleLink) {
            localStorage.setItem('articleLink', this.state.articleLink);
        }

        if (prevState.showClock !== this.state.showClock) {
            localStorage.setItem('showClock', this.state.showClock);
        }

        if (prevState.hourFormat !== this.state.hourFormat) {
            localStorage.setItem('hourFormat', this.state.hourFormat);
        }

        if (prevState.readingList.length !== this.state.readingList.length) {
            localStorage.setItem('readingList', this.state.readingList);
        }
    };

    handleAddSource(sourceToAdd) {
        this.setState((prevState) => ({ 
            // using slice to avoid mutating the prevState.storedSources directly
            storedSources: prevState.storedSources
                                .slice(0, prevState.storedSources.length)
                                .concat(sourceToAdd) 
        }));
    };

    handleDeleteSource(sourceToRemove) {
        this.setState((prevState) => ({
            // using slice to avoid mutating the prevState.storedSources directly
            storedSources: prevState.storedSources
                                .slice(0, prevState.storedSources.length)
                                .filter((source) => sourceToRemove !== source)
        }));
    };

    toggleSidebar(e) {
        e.stopPropagation();

        this.setState((prevState) => ({
            isSidebarOpen: !(prevState.isSidebarOpen)
        }));

        // if Sidebar is open, then it has been clicked to be closed
        if (this.state.isSidebarOpen) {
            // check if sources are the same
            if (!this.sameSources(this.state.passedSources.split(','), this.state.storedSources)) {
                this.fetchArticles(this.state.storedSources.join());
            }
        }
    };

    toggleSidebarOnBodyClick() {
        // if Sidebar is open, then it has been clicked to be closed
        if (this.state.isSidebarOpen) {
            this.setState((prevState) => ({ 
                isSidebarOpen: false 
            }));

            // check if sources are the same, if they are different then update
            if (!this.sameSources(this.state.passedSources.split(','), this.state.storedSources)) {
                this.fetchArticles(this.state.storedSources.join());
            }
        }
    }

    sameSources(oldSource, currentSource) {
        // check if they are different lengths
        if ((oldSource.length !== currentSource.length)) {
            
            return false;

        } else { // else they are the same length, check content

            for (let i = 0; i < currentSource.length; i++) {
                if (oldSource.includes(currentSource[i])) { // if found, check next item
                    continue;
                } 

                return false;
            }

        }
        
        // default return true = don't update
        return true;
    }

    togglePanel(panel) {
        if (panel === 'sources') {
            this.setState({ 
                sourcesPanel: true 
            });
        } else if (panel === 'settings') {
            this.setState({ 
                sourcesPanel: false 
            });
        }
    }

    toggleShowWeather() {
        this.setState((prevState) => ({ 
            showWeather: !(prevState.showWeather)
        }));
    }

    toggleShowArticles() {
        this.setState((prevState) => ({ 
            showArticles: !(prevState.showArticles)
        }));
    }

    toggleWeatherUnit(unit) {
        if (unit === 'si') {
            this.setState({ 
                weatherUnit: 'si' 
            });
        } else if (unit === 'us') {
            this.setState({ 
                weatherUnit: 'us' 
            });
        }
    }

    toggleArticleLink(action) {
        if (action === 'new-tab') {
            this.setState({ 
                articleLink: 'new-tab' 
            });
        } else if (action === 'same-window') {
            this.setState({ 
                articleLink: 'same-window' 
            });
        }
    }

    allowGeolocation(message) {
        this.setState({ 
            allowGeolocation: message 
        });
    }

    toggleShowClock() {
        this.setState((prevState) => ({ 
            showClock: !(prevState.showClock)
        }));
    }

    toggleHourFormat(format) {
        if (format === '12') {
            this.setState({ 
                hourFormat: '12' 
            });
        } else if (format === '24') {
            this.setState({ 
                hourFormat: '24' 
            });
        }
    }

    handleUpdateReadingList(string) {
        this.setState({
            readingList: string
        });
    }

    fetchSources() {
        fetch(`https://newsapi.org/v2/sources?country=us&apiKey=9e0f251af2d2433793804d01f677f4ba`)
                .then(res => res.json())
                .then((result) => {
                    const { sources } = result;

                    this.setState({
                        sourceIsLoaded: true,
                        sources: sources
                    });
                }, (error) => {
                    this.setState({
                        sourceIsLoaded: false,
                        sourceError
                    });
                })
    };

    fetchArticles(sources) {
        fetch(`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=9e0f251af2d2433793804d01f677f4ba`)
            .then(res => res.json())
            .then((result) => {

                this.setState({
                    articleIsLoaded: true,
                    articles: result.articles.slice(0, 3) // only get three from data
                });
            }, (error) => {
                this.setState({
                    articleIsLoaded: false,
                    articleError
                });
            })

        // fetchArticles will pass down the sources it just used to keep track of
        this.setState({
            passedSources: sources,
        });
    };

    render() {
        return (
            <div onClick={this.toggleSidebarOnBodyClick}>
                <Header 
                    isSidebarOpen={this.state.isSidebarOpen} 
                    toggleSidebar={this.toggleSidebar}

                    showWeather={this.state.showWeather}
                    weatherUnit={this.state.weatherUnit}
                    allowGeolocation={this.allowGeolocation}
                />

                <main className={styles.Main}>
                    <Clock 
                        showClock={this.state.showClock} 
                        hourFormat={this.state.hourFormat}
                    />
                    <Search />
                    <Articles 
                        storedSources={this.state.storedSources}
                        
                        articles={this.state.articles}
                        articleIsLoaded={this.state.articleIsLoaded}
                        articleError={this.state.error}

                        showArticles={this.state.showArticles}
                        articleLink={this.state.articleLink}

                        readingList={this.state.readingList}
                        handleUpdateReadingList={this.handleUpdateReadingList}
                    />
                </main>

                <Sidebar 
                    sources={this.state.sources}
                    sourceIsLoaded={this.state.sourceIsLoaded}
                    sourceError={this.state.sourceError}
                    storedSources={this.state.storedSources}
                    isSidebarOpen={this.state.isSidebarOpen}
                    handleAddSource={this.handleAddSource}
                    handleDeleteSource={this.handleDeleteSource}
                    toggleSidebar={this.toggleSidebar}
                    togglePanel={this.togglePanel}
                    sourcesPanel={this.state.sourcesPanel}
                    
                    weatherUnit={this.state.weatherUnit}
                    articleLink={this.state.articleLink}
                    
                    toggleWeatherUnit={this.toggleWeatherUnit}
                    toggleArticleLink={this.toggleArticleLink}
                    
                    showWeather={this.state.showWeather}
                    toggleShowWeather={this.toggleShowWeather}

                    showArticles={this.state.showArticles}
                    toggleShowArticles={this.toggleShowArticles}

                    allowGeolocation={this.state.allowGeolocation}

                    showClock={this.state.showClock}
                    hourFormat={this.state.hourFormat}
                    toggleShowClock={this.toggleShowClock}
                    toggleHourFormat={this.toggleHourFormat}
                />
            </div>
        );
    }
}