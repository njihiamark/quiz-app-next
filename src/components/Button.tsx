import React, { MouseEvent, MutableRefObject } from 'react';
import styles from './button.module.scss';

type Props = {
    label?: string,
    type?: string,
    theme?: string,
    onClick?: (event?: MouseEvent, value?: any) => void;
    refValue?: null | MutableRefObject<any>
  }

const Button = ({ label="Btn", type = 'filled', theme="dark", onClick= (event: MouseEvent) => {}, refValue = null}: Props) => (
    <button onClick={onClick} ref={refValue} className={styles["button"]+` ${theme === "dark" && type === "filled" ? styles["button--dark--filled"] : theme === "dark" && type === "outline" ? styles["button--dark--outline"]: theme === "light" && type === "filled" ? styles["button--light--filled"]:theme === "light" && type === "outline" ? styles["button--light--outline"] : "" }`}>{label}</button>
);

export default Button;