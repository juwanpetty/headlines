import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <form method="get" action="http://www.google.com/search?q=">
                    <div className="search__wrapper">
                        <input type="text" className="searchbar" placeholder="Search the Web" name="q" autoComplete="off" />
                        <div className="search__icon"><i data-feather="search"></i></div>
                        <button type="submit"><i data-feather="arrow-right"></i></button>
                    </div>
                </form>
            </div>
        );
    };
}