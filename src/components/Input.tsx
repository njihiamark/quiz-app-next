import React from 'react';
import Image from 'next/image';
import styles from './input.module.scss';

type Props = {
    iconUrl?: string,
    label?: string,
    placeholder?: string,
    onChange?: () => void,
    type: string,
    theme?: string,
    value?: string | number,
}


const Input =({iconUrl="", label="", placeholder="",onChange= () => {}, type="text", value="", theme="dark"}: Props) => (
    <label>
        <div className={styles["label-container"]}><Image src={iconUrl} width={40} height={40} /> <span className="ml-1">{label}</span> </div>
        <input type={type} onChange={onChange} value={value} placeholder={placeholder} className={styles["outline-input"]+` ${theme === "light" ? styles["outline-input--light"] : styles["outline-input--dark"]}`}/>
    </label>
);

export default Input;
