import React from 'react';

import styles from './Search.scss';

export default class Search extends React.Component { 
    constructor(props) {
        super(props);
        this.handleSearchEngine = this.handleSearchEngine.bind(this)

        this.state = {
            currentSearchEngine: 'Google',
            search: {
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
            }
        }
    }

    componentDidMount() {
        if (localStorage.currentSearchEngine) {
            if (Object.keys(this.state.search).includes(localStorage.currentSearchEngine)) {
                this.setState({ 
                    currentSearchEngine: localStorage.getItem('currentSearchEngine')
                });
            } else {
                localStorage.setItem('currentSearchEngine', 'Google');
            }
        } else {
            localStorage.setItem('currentSearchEngine', 'Google');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentSearchEngine !== this.state.currentSearchEngine) {
            localStorage.setItem('currentSearchEngine', this.state.currentSearchEngine);
        }
    }
    
    handleSearchEngine(e) {
        this.setState({
            currentSearchEngine: e.target.closest('li').children[1].textContent
        });

        this.props.toggleSearchMenu();
    }

    render() {
        const searchParams = this.state.search[this.state.currentSearchEngine].searchParams;
        const imageSrc = this.state.search[this.state.currentSearchEngine].src;

        return (
            <div className={styles.Search}>
                <form method="get" action={searchParams}>
                    <div className={styles.Wrapper}>
                        <input type="text" className={styles.SearchBar} placeholder="Search the Web" name="q" autoComplete="off" id="search" />
                        <div className={styles.SearchEngine} htmlFor="search" onClick={this.props.toggleSearchMenu}>
                            <div>
                                <img src={imageSrc}/>
                            </div>
                        </div>
                        <button type="submit"><i data-feather="arrow-right"></i></button>
                    </div>
                </form>

                {this.props.isSearchMenuOpen && (
                    <ul className={styles.Dropdown} onClick={this.handleSearchEngine}>
                        <li>
                            <div className={styles.Container}>
                                <img src={this.state.search["Google"].src} alt=""/>
                            </div>
                            <p>Google</p>
                        </li>
                        <li>
                            <div className={styles.Container}>
                                <img src={this.state.search["DuckDuckGo"].src} alt=""/>
                            </div>
                            <p>DuckDuckGo</p>
                        </li>
                        <li>
                            <div className={styles.Container}>
                                <img src={this.state.search["Bing"].src} alt=""/>
                            </div>
                            <p>Bing</p>
                        </li>
                    </ul>
                )}
            </div>
        );
    }
}