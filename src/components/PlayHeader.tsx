import React from 'react';
import styles from './playHeader.module.scss';


const WelcomeHeader = () => (
    <div className={styles["header"]}>
        <div className={styles["header__title"]}>Entertainment:</div>
        <div className={styles["header__title"]}>Videogames</div>
        <div className="mb-1"></div>
        <div className={styles["header__level"]}>level 1</div>
    </div>
);

export default WelcomeHeader;