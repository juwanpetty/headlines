import React from 'react';

const ArticleSkeleton = props => 
    (
        <li className="article__skeleton">
            <div className="article__image__container">
                <div className="article__image__container--image"></div>
            </div>

            <div className="article__details">
                <p className="article__source">
                    <div className="article__source--line"></div>
                </p>
                <div className="article__overflow">
                    <div className="article__overflow--title"></div>
                    <div className="article__overflow--line"></div>
                    <div className="article__overflow--line"></div>
                </div>
                <div className="article__social">
                    <div className="article__social--line"></div>
                </div>
            </div>
        </li>
    );


export default ArticleSkeleton;