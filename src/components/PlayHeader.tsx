import React from 'react';
import styles from './playHeader.module.scss';

type Props = {
    difficulty_setting: string
}

const WelcomeHeader = ({difficulty_setting = "easy"}: Props) => {
    const SetLevel = (difficulty:string) => {
        if(difficulty == "easy"){
            return 1;
        }
        if(difficulty == "medium"){
            return 2;
        }
        if(difficulty == "hard"){
            return 3;
        }
    }
    return (
        <div className={styles["header"]}>
            <div className={styles["header__title"]}>Entertainment:</div>
            <div className={styles["header__title"]}>Videogames</div>
            <div className="mb-1"></div>
            <div className={styles["header__level"]}>level {SetLevel(difficulty_setting)}</div>
        </div>
    )
};

export default WelcomeHeader;