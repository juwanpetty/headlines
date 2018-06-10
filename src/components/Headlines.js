const shuffle = require('lodash/shuffle');

import React from 'react';

import Header from './Header'
import Search from './Search'
import Articles from './Articles'
import Sidebar from './Sidebar'

export default class Headlines extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddSource = this.handleAddSource.bind(this)
        this.handleDeleteSource = this.handleDeleteSource.bind(this)
        this.fetchSources = this.fetchSources.bind(this)
        this.fetchArticles = this.fetchArticles.bind(this)
        this.toggleSidelines = this.toggleSidelines.bind(this)
        this.togglePanel = this.togglePanel.bind(this)
        this.toggleSidelinesOnBodyClick = this.toggleSidelinesOnBodyClick.bind(this)
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
            userSettings: {},
            sourcesPanel: true
        };
    }

    componentDidMount() {
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

    toggleSidelines(e) {
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

    toggleSidelinesOnBodyClick() {
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
            console.log('sources');
            this.setState({ 
                sourcesPanel: true 
            });
        } else if (panel === 'settings') {
            console.log('settings');
            this.setState({ 
                sourcesPanel: false 
            });
        }
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
            <div onClick={this.toggleSidelinesOnBodyClick}>
                <Header 
                    isSidebarOpen={this.state.isSidebarOpen} 
                    toggleSidelines={this.toggleSidelines}
                />

                <main>
                    <Search />
                    <Articles 
                        storedSources={this.state.storedSources}
                        articles={this.state.articles}
                        articleIsLoaded={this.state.articleIsLoaded}
                        articleError={this.state.error}
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
                    toggleSidelines={this.toggleSidelines}
                    togglePanel={this.togglePanel}
                    sourcesPanel={this.state.sourcesPanel}
                />
            </div>
        );
    }
}