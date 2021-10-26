import React from 'react';
import styles from './progress.module.scss';

type Props = {
    label?: string,
    type?: string,
    theme?: string,
    onClick?: () => void;
  }

const Progress = () => (
    <>
    <div className={styles["progress-label"]}><span className={styles["progress__status"]}>08</span>/10</div>
    <div className={styles["progress"]}>
        <div className={styles["progress__bar"]} style={{width:"80%"}}></div>
    </div>
    </>
    
);

export default Progress;