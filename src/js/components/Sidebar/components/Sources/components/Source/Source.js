import React from 'react';

import styles from './Source.scss';

export default function Source({
  storedSources,
  handleAddSource,
  handleDeleteSource,
  source,
  isChecked,
}) {
  const handleIsChecked = (e) => {
    // if there is only one source left AND it's been unchecked
    if (storedSources.length == 1 && e.target.checked == false) {
      // don't allow checkbox to be unchecked

      e.target.checked = true;
    } else if (storedSources.length == 20 && e.target.checked == true) {
      e.target.checked = false;
    } else {
      // if true then add method else delete method
      if (e.target.checked) {
        handleAddSource(e.target.id);
      } else {
        handleDeleteSource(e.target.id);
      }
    }
  };

  const {id, name} = source;

  return (
    <div>
      <input
        name="source"
        id={id}
        value={name}
        type="checkbox"
        className={styles.Input}
        defaultChecked={isChecked}
        onClick={handleIsChecked}
      />
      <label className={styles.Label} htmlFor={id}>
        {name}
      </label>
    </div>
  );
}
