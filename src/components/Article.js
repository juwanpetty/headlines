import React from 'react';

const relativeDate = require('relative-date');
const startCase = require('lodash/startcase');

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.checkImage = this.checkImage.bind(this);
        this.relativeTime = this.relativeTime.bind(this);
    }

    checkImage(e) {
        // placeholder if no image path exists
        if (e.target.src === null) {
            return e.target.src = "assets/placeholder.jpg";
        }

        // displays placeholder if img is 1px (IGN)
        if (e.target.naturalWidth <= 1) {
            return e.target.src = "assets/placeholder.jpg";
        }
    }

    relativeTime(publishedAt) {
        var time = new Date(publishedAt).getTime();
        return (relativeDate(time));
    }

    render() {
        const { source, title, description, url, urlToImage, author, publishedAt } = this.props.article;

        return (
            <li className="article__item">
                <a href={url}>
                    <div className="article__image__container">
                        <img className="article__image" onLoad={this.checkImage} src={urlToImage} alt={title} />
                    </div>
                    <div className="article__details">
                        <p className="article__source">{source.name}</p>
                        <div className="article__overflow">
                            <h3 className="article__title" dangerouslySetInnerHTML={{ __html: title }}></h3>
                            <p className="article__description">{description}</p>
                        </div>
                        <div className="article__social">
                            <p>{startCase(this.relativeTime(publishedAt))} {author ? ' — ' + author : ""}</p>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}