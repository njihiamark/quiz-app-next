import React from 'react';
import styles from './progress.module.scss';

type Props = {
    current_qn: number,
    total_qns: number,
    percentage: number,
  }

const Progress = ({current_qn=1, total_qns=10,percentage=10}: Props) => (
    <>
        <div className={styles["progress-label"]}><span className={styles["progress__status"]}>{current_qn}</span>/{total_qns}</div>
        <div className={styles["progress"]}>
            <div className={styles["progress__bar"]} style={{width:`${percentage}%`}}></div>
        </div>
    </>
    
);

export default Progress;