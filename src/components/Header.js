import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSidelines = this.toggleSidelines.bind(this);
    }

    toggleSidelines(e) {
        e.stopPropagation();
        this.props.toggleSidelines(e);
    }

    render() {
        return (
            <nav>
                <div 
                    className={this.props.isSidebarOpen ? "js-menu sidebar-open" : "js-menu"}
                    onClick={this.toggleSidelines}
                >
                    <i data-feather="settings" className="js-open"></i>
                    <i data-feather="x" className="js-close"></i>
                </div>
            </nav>
        );
    };
}