import React from 'react';

import Header from './Header'
import Search from './Search'
import Articles from './Articles'
import Sidebar from './Sidebar'

export default class Headlines extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddSource = this.handleAddSource.bind(this)
        this.handleDeleteSource = this.handleDeleteSource.bind(this)
        this.state = {
            sources : ['bloomberg', 'business-insider', 'fortune'],
            userSettings: {}
        };
    }

    handleAddSource(sourceToAdd) {
        this.setState((prevState) => ({ 
            sources: prevState.sources.concat(sourceToAdd) 
        }));
    };

    handleDeleteSource(sourceToRemove) {
        this.setState((prevState) => ({
            sources: prevState.sources.filter((source) => sourceToRemove !== source)
        }));
    };
    
    render() {
        return (
            <div>
                <Header />

                <main>
                    <Search />
                    <Articles sources={this.state.sources} />
                    
                    <Sidebar 
                        sources={this.state.sources}
                        handleAddSource={this.handleAddSource}
                        handleDeleteSource={this.handleDeleteSource}
                    />
                </main>
            </div>
        );
    }
}