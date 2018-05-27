import React from 'react';

export default class Source extends React.Component {
    render() {
        const { id, name } = this.props.source;
        return (
            <div>
                <input name="source" id={id} value={name} type="checkbox" className="source__input" />
                <label htmlFor={id}>{name}</label>
            </div>
        );
    };
}