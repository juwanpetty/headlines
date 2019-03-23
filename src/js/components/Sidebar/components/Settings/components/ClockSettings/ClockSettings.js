import React from 'react';

import styles from './ClockSettings.scss';

export default function ClockSettings({
  showClock,
  toggleShowClock,
  hourFormat,
  toggleHourFormat,
}) {
  return (
    <div className={styles.Settings}>
      <div className={styles.Group}>
        <div className={styles.Checkbox}>
          <input
            type="checkbox"
            id="clock"
            checked={showClock}
            onChange={() => toggleShowClock()}
          />
          <label htmlFor="clock">Clock</label>
        </div>
        <p className={styles.Subtitle}>Display a clock on the new tab page.</p>
      </div>

      <div className={styles.Group}>
        <p className={styles.Subtitle}>Choose an hour format</p>
        <div className={styles.Radio}>
          <input
            type="radio"
            id="12-hour"
            name="hour-format"
            value="12-hour"
            checked={hourFormat === '12'}
            onChange={() => toggleHourFormat('12')}
          />
          <label htmlFor="12-hour">12-hour</label>
        </div>
        <div className={styles.Radio}>
          <input
            type="radio"
            id="24-hour"
            name="hour-format"
            value="24-hour"
            checked={hourFormat === '24'}
            onChange={() => toggleHourFormat('24')}
          />
          <label htmlFor="24-hour">24-hour</label>
        </div>
      </div>
    </div>
  );
}
