import React from 'react';

export default class Article extends React.Component {
    render() {
        const { source, title, description, url, urlToImage } = this.props.article

        return (
            <li className="article__item">
                <a href={url}>
                    <div className="article__image__container">
                        <img className="article__image" src={urlToImage} alt={title} />
                    </div>
                    <div className="article__details">
                        <p className="article__source">{source.name}</p>
                        <div className="article__overflow">
                            <h3 className="article__title">{title}</h3>
                            <p className="article__description">{description}</p>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}