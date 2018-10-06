import React from 'react';

import styles from './Search.scss';

const Search = props => 
    (
        <div className={styles.Search}>
            <form method="get" action="http://www.google.com/search?q=">
                <div className={styles.Wrapper}>
                    <input type="text" className={styles.SearchBar} placeholder="Search the Web" name="q" autoComplete="off" id="search" />
                    <label className={styles.Icon} htmlFor="search"><i data-feather="search"></i></label>
                    <button type="submit"><i data-feather="arrow-right"></i></button>
                </div>
            </form>
        </div>
    );


export default Search;