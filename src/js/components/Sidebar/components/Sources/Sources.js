const startCase = require('lodash/startcase');

import React from 'react';

import Source from './components/Source/Source';
import styles from './Sources.scss';

export default function Sources({
  sourceError,
  sourceIsLoaded,
  sources,
  storedSources,
  handleAddSource,
  handleDeleteSource,
}) {
  let filteredSources;
  const categories = [
    'business',
    'entertainment',
    'technology',
    'general',
    'science',
    'sports',
    'health',
  ];

  if (sourceError) {
    return <div>Error: {error.message}</div>;
  } else if (!sourceIsLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={styles.Sources}>
        {// go through each category
        categories.map((category, index) => {
          // only use the sources with matching categories
          filteredSources = sources.filter((sources) => {
            return sources.category == category;
          });

          return (
            <div key={index}>
              <h3 className={styles.Title}>{startCase(category)}</h3>
              <div className={styles.SourceGroup}>
                {filteredSources.map((source, index) => {
                  return (
                    <Source
                      key={index}
                      source={source}
                      storedSources={storedSources}
                      isChecked={storedSources.includes(source.id)}
                      handleDeleteSource={handleDeleteSource}
                      handleAddSource={handleAddSource}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
