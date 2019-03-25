import React from 'react';
import Toast from '../../../../../Toast/Toast';
import styles from './Source.scss';

export default function Source({
  storedSources,
  handleAddSource,
  handleDeleteSource,
  source,
  isChecked,
}) {
  const MAX_NUM = 20;

  const handleIsChecked = (e) => {
    // if there is only one source left AND it's been unchecked
    if (storedSources.length == 1 && e.target.checked == false) {
      // don't allow checkbox to be unchecked
      Toast({
        type: 'warning',
        message: 'There must be at least 1 source selected.',
      });

      e.target.checked = true;
    } else if (storedSources.length == MAX_NUM && e.target.checked == true) {
      Toast({
        type: 'warning',
        message: `There cannot be more than ${MAX_NUM} sources selected.`,
      });

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
