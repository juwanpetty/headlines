import React from 'react';

import Sources from './Sources';
import Settings from './Settings';

export default class Sidebar extends React.Component {
    handleSubmit(e) {
        console.log('Form submitted...');
        e.preventDefault();
    }

    render() {
        return (
            <aside className="js-sidebar">
                <form onSubmit={this.handleSubmit}>
                    <div className="sidebar__header">
                        <h3 className="sidebar__title">Sources</h3>
                        <p className="sidebar__subtitle">Choose what you see on the page.</p>
                    </div>

                    <div>
                        <Sources sources={this.props.sources} />
                        <Settings />
                    </div>

                    <p className="attribution">Powered by <a href="https://newsapi.org/">NewsAPI.org</a></p>

                    <div className="sidebar__footer">
                        <input type="submit" className="btn action js-done" value="Done" />
                    </div>
                </form>
            </aside>
        );
    }
}