import React from 'react';

import Article from './Article';

export default class Articles extends React.Component {
    render() {
        const { articleError, articleIsLoaded, articles } = this.props;

        if (articleError) {
            return <div>Error: {error.message}</div>;
        } else if (!articleIsLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section className="section">
                    <div className="section__wrapper">
                        <ul className="articles js-articles">
                            {
                                articles.map((article, index) => {
                                    return <Article key={index} article={article} />
                                })
                            }
                        </ul>
                    </div>
                </section>
            );
        }
    };
}