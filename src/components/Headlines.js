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
        this.state = {
            storedSources: [],
            sources : [],
            sourceIsLoaded: false,
            sourceError: null,
            articles: [],
            articleIsLoaded: false,
            articleError: null,
            userSettings: {}
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
            storedSources: prevState.storedSources.concat(sourceToAdd) 
        }));
    };

    handleDeleteSource(sourceToRemove) {
        this.setState((prevState) => ({
            storedSources: prevState.storedSources.filter((source) => sourceToRemove !== source)
        }));
    };

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
    }

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
    }

    render() {
        return (
            <div>
                <Header />

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
                    handleAddSource={this.handleAddSource}
                    handleDeleteSource={this.handleDeleteSource}
                    fetchArticles={this.fetchArticles}
                />
            </div>
        );
    }
}