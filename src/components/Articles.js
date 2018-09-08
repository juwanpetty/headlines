import React from 'react';

import Article from './Article';
import ArticleSkeleton from './ArticleSkeleton';

export default class Articles extends React.Component {
    render() {
        const { articleError, articleIsLoaded, articles } = this.props;

        if (articleError) {
            return <div >Error: {error.message}</div>;
        } else if (true) {
            return (
                <div className={this.props.showArticles ? "articles" : "articles articles--hidden"}>
                    <ArticleSkeleton />
                    <ArticleSkeleton />
                    <ArticleSkeleton />
                </div>
            );
        } else {
            return (
                <section className="section">
                    <div className="section__wrapper">
                        <ul className={this.props.showArticles ? "articles" : "articles articles--hidden"}>
                            {
                                articles.map((article, index) => {
                                    return <Article key={index} article={article} articleLink={this.props.articleLink} />
                                })
                            }
                        </ul>
                    </div>
                </section>
            );
        }
    };
}