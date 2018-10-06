import React from 'react';

import styles from './ArticleSettings.scss';

export default class ArticleSettings extends React.Component {
    render() {
        return (
            <div className={styles.Settings}>
                <div className={styles.Group}>
                    <div className={styles.Checkbox}>
                        <input type="checkbox" id="articles" checked={this.props.showArticles} onChange={() => this.props.toggleShowArticles()} />
                        <label htmlFor="articles">Articles</label>
                    </div>
                    <p className={styles.Subtitle}>Display articles on the new tab page.</p>
                </div>

                <div className={styles.Group}>
                    <p className={styles.Subtitle}>Articles Open In</p>
                    <div className={styles.Radio}>
                        <input type="radio" id="same-window" name="article-link" value="same-window" 
                            checked={this.props.articleLink === 'same-window'} 
                            onChange={() => this.props.toggleArticleLink('same-window')}
                        />
                        <label htmlFor="same-window">Same Window</label>
                    </div>
                    <div className={styles.Radio}>
                        <input type="radio" id="new-tab" name="article-link" value="new-tab"
                            checked={this.props.articleLink === 'new-tab'} 
                            onChange={() => this.props.toggleArticleLink('new-tab')}
                        />
                        <label htmlFor="new-tab">New Tab</label>
                    </div>
                </div>
            </div>
        );
    };
}