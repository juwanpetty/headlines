import React from 'react';

export default class ArticleSettings extends React.Component {
    render() {
        return (
            <div className="settings article__settings">
                <div className="settings__group">
                    <div className="checkbox">
                        <input type="checkbox" id="articles" checked={this.props.showArticles} onChange={() => this.props.toggleShowArticles()} />
                        <label htmlFor="articles">Articles</label>
                    </div>
                    <p className="settings__subtitle">Display articles on the new tab page.</p>
                </div>

                <div className="settings__group">
                    <p className="settings__subtitle">Articles Open In</p>
                    <div className="radio">
                        <input type="radio" id="same-window" name="article-link" value="same-window" 
                            checked={this.props.articleLink === 'same-window'} 
                            onChange={() => this.props.toggleArticleLink('same-window')}
                        />
                        <label htmlFor="same-window">Same Window</label>
                    </div>
                    <div className="radio">
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