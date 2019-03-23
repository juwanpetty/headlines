import React, {useEffect, useState} from 'react';

import styles from './Clock.scss';

export default function Clock({showClock, hourFormat}) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  const formatDate = (hourFormat = false) => {
    hourFormat = Boolean(hourFormat === '12');

    let date = new Date();
    let dateString = date.toLocaleTimeString([], {
      hour12: hourFormat,
      hour: '2-digit',
      minute: '2-digit',
    });
    let hour = date.getHours();

    if (hourFormat) return dateString;

    if (hour === 0) hour = 24;

    dateString = dateString.split(':');
    dateString[0] = hour;
    dateString = dateString.join(':');

    dateString = `${dateString}`;
    return dateString;
  };

  return (
    <div className={showClock ? styles.Clock : styles.Hidden}>
      <h2 className={styles.ClockText}>{formatDate(hourFormat)}</h2>
    </div>
  );
}
