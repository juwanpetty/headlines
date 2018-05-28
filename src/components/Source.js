import React from 'react';

export default class Source extends React.Component {
    constructor(props) {
        super(props);
        this.handleIsChecked = this.handleIsChecked.bind(this);
    }

    handleIsChecked(e) {
        // if false then remove method else add method
        if (e.target.checked) {
            this.props.handleAddSource(e.target.id);
        } else {
            this.props.handleDeleteSource(e.target.id);
        }
    }

    render() {
        const { id, name } = this.props.source;
        const { isChecked } = this.props;
        return (
            <div>
                <input 
                    name="source" 
                    id={id} 
                    value={name} 
                    type="checkbox" 
                    className="source__input"
                    defaultChecked={isChecked}
                    onClick={this.handleIsChecked}
                />
                <label htmlFor={id}>{name}</label>
            </div>
        );
    };
}