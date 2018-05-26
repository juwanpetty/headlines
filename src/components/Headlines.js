import React from 'react';

import Header from './Header'
import Search from './Search'
import Article from './Article'
import Sidebar from './Sidebar'

export default class Headlines extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div>
                    <Search />
                    <Article />
                </div>
                
                <Sidebar />
            </div>
        );
    }
}