import React from 'react';

import Article from './Article';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            loadedArticles: []
        };
    }

    componentDidMount() {
        fetch(`https://newsapi.org/v2/top-headlines?sources=ign&apiKey=9e0f251af2d2433793804d01f677f4ba`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    loadedArticles: result.articles.slice(0, 3) // only get three from data
                });
            }, (error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            })
    }

    render() {
        const { error, isLoaded, loadedArticles } = this.state;
        console.log(loadedArticles);

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul className="articles js-articles">
                    {
                        loadedArticles.map((article, index) => {
                            return <Article key={index} article={article} />
                        })
                    }
                </ul>
            );
        }
    };
}