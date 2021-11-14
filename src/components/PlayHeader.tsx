import React from 'react';
import styles from './playHeader.module.scss';

type Props = {
    difficulty_setting: string
}

const WelcomeHeader = ({difficulty_setting = "easy"}: Props) => (
    <div className={styles["header"]}>
        <div className={styles["header__title"]}>Entertainment:</div>
        <div className={styles["header__title"]}>Videogames</div>
        <div className="mb-1"></div>
        <div className={styles["header__level"]}>level {difficulty_setting == "easy"? 1 : 2}</div>
    </div>
);

export default WelcomeHeader;