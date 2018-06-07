import React from 'react';

const Search = props => 
    (
        <div className="search">
            <form method="get" action="http://www.google.com/search?q=">
                <div className="search__wrapper">
                    <input type="text" className="searchbar" placeholder="Search the Web" name="q" autoComplete="off" id="search" />
                    <label className="search__icon" htmlFor="search"><i data-feather="search"></i></label>
                    <button type="submit"><i data-feather="arrow-right"></i></button>
                </div>
            </form>
        </div>
    );


export default Search;