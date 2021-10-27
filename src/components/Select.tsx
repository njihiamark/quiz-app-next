import React from 'react';
import styles from './input.module.scss';
import Image from 'next/image';

type Props = {
    iconUrl?: string,
    label?: string,
    options?: string[],
    theme?: string,
    onChange?: () => void,
    value?: string
}


function Select({iconUrl="", label="",onChange= () => {}, value="", theme="dark"}: Props) {
    return (
        <label>
            <div className={styles["label-container"]}><Image src={iconUrl} width={40} height={40} /> <span className="ml-1">{label}</span> </div>
            <select value={value} onChange={onChange} className={styles["outline-input"]+' '+styles["custom-select"]+` ${theme === "light" ? styles["outline-input--light"] + " " + styles["custom-select--light"] : styles["outline-input--dark"]+ " " + styles["custom-select--dark"]}`}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
            </select> 
        </label>
    )
}

export default Select;
