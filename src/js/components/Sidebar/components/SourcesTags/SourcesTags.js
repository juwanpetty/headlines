import React from 'react';

import FeatherIcon from 'feather-icons-react';
import styles from './SourcesTags.scss';

export default class SourcesTags extends React.Component {
    constructor(props) {
        super(props);
        this.removeTag= this.removeTag.bind(this);
    }

    removeTag(event) {
        const sourceId = event.currentTarget.dataset.sourceId;

        // if there is only one source left don't allow source to be removed
        if (this.props.storedSources.length == 1)
            return;

        this.props.handleDeleteSource(sourceId);
    }

    render() {
        const { storedSources, sources } = this.props;
        
        if (storedSources) {
            return (
                <div className={styles.SourceTags}>
                    {
                        storedSources.map((storedSources, index) => {
                            return (
                                sources.map(source => {
                                    if (storedSources === source.id) {
                                        return (
                                            <div className={styles.Tag} key={index}>
                                                <div className={styles.Container}>
                                                    <p>{source.name}</p>
                                                    <div 
                                                        className={styles.Icon}
                                                        data-source-id={source.id}
                                                        onClick={this.removeTag}
                                                    >
                                                        <FeatherIcon icon="x" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            )
                        })
                    }
                </div>
            );
        }  else {
            return null;
        }
    }
}