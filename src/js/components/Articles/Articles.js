import React from 'react';

import Article from './components/Article/Article';
import ArticleSkeleton from './components/EmptyState/ArticleSkeleton';

import styles from './Articles.scss';

export default class Articles extends React.Component {
    render() {
        const { articleError, articleIsLoaded, articles } = this.props;

        if (articleError) {
            return <div >Error: {error.message}</div>;
        } else if (!articleIsLoaded) {
            return (
                <div className={this.props.showArticles ? styles.Normal : styles.Hidden}>
                    <ArticleSkeleton />
                    <ArticleSkeleton />
                    <ArticleSkeleton />
                </div>
            );
        } else {
            return (
                <section className={styles.Section}>
                    <div className={styles.SectionWrapper}>
                        <ul className={this.props.showArticles ? styles.Normal : styles.Hidden}>
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