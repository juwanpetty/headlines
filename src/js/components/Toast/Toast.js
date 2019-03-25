import React from 'react';
import {toast} from 'react-toastify';
import FeatherIcon from 'feather-icons-react';
import styles from './Toast.scss';

export default function Toast({
  type = null,
  message,
  onAction = undefined,
  onActionMessage = undefined,
}) {
  let icon;

  switch (type) {
    case 'error':
      icon = 'x-circle';
      break;
    case 'warning':
      icon = 'alert-triangle';
      break;
    case 'success':
      icon = 'check';
      break;
    default:
      icon = 'info';
  }

  const ToastMarkup = () => (
    <span>
      <FeatherIcon icon={icon} />
      <div className={styles.ToastBody}>
        <p>{message}</p>
        {onAction && <button onClick={onAction}>{onActionMessage}</button>}
      </div>
      <FeatherIcon className={styles.Close} icon="x" />
    </span>
  );

  switch (type) {
    case 'error':
      return toast.error(<ToastMarkup />, {className: styles.Error});
    case 'warning':
      return toast.warn(<ToastMarkup />, {className: styles.Warning});
    case 'success':
      return toast.success(<ToastMarkup />, {className: styles.Success});
    default:
      return toast(<ToastMarkup />, {className: styles.Toast});
  }
}
