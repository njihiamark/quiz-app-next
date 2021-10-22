import React from 'react';
import styles from './layout.module.scss';

type Props = {
    label?: string,
    type?: string,
    onClick?: () => void;
  }

console.log(styles);
const Button = ({ label="Btn", type = 'filled', onClick= () => {}}: Props) => (
    <button onClick={onClick} className={styles["button"]+` ${type === "filled" ? styles["button--filled"] : styles["button--outline"]}`}>{label}</button>
);

export default Button;