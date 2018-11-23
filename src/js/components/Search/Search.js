import React from 'react';

import styles from './Search.scss';

export default class Search extends React.Component { 
    constructor(props) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.handleSearchEngine = this.handleSearchEngine.bind(this)

        this.state = {
            dropdownOpen: false,
            currentSearchEngine: 'Google'
        }
    }

    componentDidMount() {
        if (localStorage.currentSearchEngine) {
            this.setState({ 
                currentSearchEngine: localStorage.getItem('currentSearchEngine')
            });
        } else {
            localStorage.setItem('currentSearchEngine', 'Google');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentSearchEngine !== this.state.currentSearchEngine) {
            localStorage.setItem('currentSearchEngine', this.state.currentSearchEngine);
        }
    }

    toggleDropdown() {
        this.setState((prevState) => ({
            dropdownOpen: !(prevState.dropdownOpen)
        }));
    }

    handleSearchEngine(e) {
        this.setState({
            currentSearchEngine: e.target.textContent
        });

        this.toggleDropdown();
    }

    render() {
        const search = {
            "Google": {
                "searchParams": "http://www.google.com/search?q=",
                "src": "assets/search/google.png"
            },
            "DuckDuckGo": {
                "searchParams": "https://duckduckgo.com/?q=",
                "src": "assets/search/duckduckgo.png"
            },
            "Bing": {
                "searchParams": "http://www.bing.com/search?q=",
                "src": "assets/search/bing.png"
            }
        };
        
        return (
            <div className={styles.Search}>
                <form method="get" action={search[this.state.currentSearchEngine].searchParams}>
                    <div className={styles.Wrapper}>
                        <input type="text" className={styles.SearchBar} placeholder="Search the Web" name="q" autoComplete="off" id="search" />
                        <div className={styles.SearchEngine} htmlFor="search" onClick={this.toggleDropdown}>
                            <div>
                                <img src={search[this.state.currentSearchEngine].src} alt={this.state.currentSearchEngine}/>
                            </div>
                        </div>
                        <button type="submit"><i data-feather="arrow-right"></i></button>
                    </div>
                </form>

                {this.state.dropdownOpen && (
                    <ul className={styles.Dropdown} onClick={this.handleSearchEngine}>
                        <li>
                            <div className={styles.Container}>
                                <img src={search["Google"].src} alt=""/>
                            </div>
                            <p>Google</p>
                        </li>
                        <li>
                            <div className={styles.Container}>
                                <img src={search["DuckDuckGo"].src} alt=""/>
                            </div>
                            <p>DuckDuckGo</p>
                        </li>
                        <li>
                            <div className={styles.Container}>
                                <img src={search["Bing"].src} alt=""/>
                            </div>
                            <p>Bing</p>
                        </li>
                    </ul>
                )}
            </div>
        );
    }
}