import React, {useEffect, useState} from 'react';

import styles from './Search.scss';

export default function Search({toggleSearchMenu, isSearchMenuOpen}) {
  const [currentSearchEngine, setCurrentSearchEngine] = useState('Google');
  const [search, setSearch] = useState({
    Google: {
      searchParams: 'http://www.google.com/search?q=',
      src: 'assets/search/google.png',
    },
    DuckDuckGo: {
      searchParams: 'https://duckduckgo.com/?q=',
      src: 'assets/search/duckduckgo.png',
    },
    Bing: {
      searchParams: 'http://www.bing.com/search?q=',
      src: 'assets/search/bing.png',
    },
  });

  useEffect(() => {
    if (localStorage.currentSearchEngine) {
      setCurrentSearchEngine(localStorage.getItem('currentSearchEngine'));
    } else {
      localStorage.setItem('currentSearchEngine', 'Google');
    }
  }, [currentSearchEngine]);

  const handleSearchEngine = (e) => {
    const searchEngine = e.target.closest('li').children[1].textContent;

    setCurrentSearchEngine(searchEngine);
    updateLocalStorage(searchEngine);
    toggleSearchMenu();
  };

  const updateLocalStorage = (searchEngine) => {
    localStorage.setItem('currentSearchEngine', searchEngine);
  };

  const searchParams = search[currentSearchEngine].searchParams;
  const imageSrc = search[currentSearchEngine].src;

  return (
    <div className={styles.Search}>
      <form method="get" action={searchParams}>
        <div className={styles.Wrapper}>
          <input
            type="text"
            className={styles.SearchBar}
            placeholder="Search the Web"
            name="q"
            autoComplete="off"
            id="search"
          />
          <div
            className={styles.SearchEngine}
            htmlFor="search"
            onClick={toggleSearchMenu}
          >
            <div>
              <img src={imageSrc} />
            </div>
          </div>
          <button type="submit">
            <i data-feather="arrow-right" />
          </button>
        </div>
      </form>

      {isSearchMenuOpen && (
        <ul className={styles.Dropdown} onClick={handleSearchEngine}>
          <li>
            <div className={styles.Container}>
              <img src={search['Google'].src} alt="" />
            </div>
            <p>Google</p>
          </li>
          <li>
            <div className={styles.Container}>
              <img src={search['DuckDuckGo'].src} alt="" />
            </div>
            <p>DuckDuckGo</p>
          </li>
          <li>
            <div className={styles.Container}>
              <img src={search['Bing'].src} alt="" />
            </div>
            <p>Bing</p>
          </li>
        </ul>
      )}
    </div>
  );
}
