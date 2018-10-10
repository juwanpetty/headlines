import React from 'react';

import styles from './Source.scss';

export default class Source extends React.Component {
    constructor(props) {
        super(props);
        this.handleIsChecked = this.handleIsChecked.bind(this);
    }

    handleIsChecked(e) {
        // if there is only one source left AND it's been unchecked
        if (this.props.storedSources.length == 1 && e.target.checked == false) {
            // don't allow checkbox to be unchecked
            
            e.target.checked = true;
        } else if (this.props.storedSources.length == 20 && e.target.checked == true) {
            e.target.checked = false;
        } else {
            // if true then add method else delete method
            if (e.target.checked) {
                this.props.handleAddSource(e.target.id);
            } else {
                this.props.handleDeleteSource(e.target.id);
            }
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
                    className={styles.Input}
                    checked={isChecked}
                    onClick={this.handleIsChecked}
                />
                <label className={styles.Label} htmlFor={id}>{name}</label>
            </div>
        );
    };
}