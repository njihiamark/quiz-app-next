import React, { MouseEvent } from 'react';
import styles from './button.module.scss';

type Props = {
    label?: string,
    type?: string,
    theme?: string,
    onClick?: (event: MouseEvent) => void;
  }

const Button = ({ label="Btn", type = 'filled', theme="dark", onClick= (event: MouseEvent) => {}}: Props) => (
    <button onClick={onClick} className={styles["button"]+` ${theme === "dark" && type === "filled" ? styles["button--dark--filled"] : theme === "dark" && type === "outline" ? styles["button--dark--outline"]: theme === "light" && type === "filled" ? styles["button--light--filled"]:theme === "light" && type === "outline" ? styles["button--light--outline"] : "" }`}>{label}</button>
);

export default Button;