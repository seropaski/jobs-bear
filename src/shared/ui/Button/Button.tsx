import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button role="button" type="button" className={styles.button} {...props} />;
}

export { Button };
