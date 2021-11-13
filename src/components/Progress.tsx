import React from 'react';
import styles from './progress.module.scss';

type Props = {
    current_qn: number,
    total_qns: number
}

const Progress = ({ current_qn = 1, total_qns = 10 }: Props) => {
    const raw_percentage = (current_qn/total_qns) * 100;
    const floored_percentage = (raw_percentage);
    return (
        <>
            <div className={styles["progress-label"]}><span className={styles["progress-label__status"]}>{current_qn}</span>/{total_qns}</div>
            <div className={styles["progress"]}>
                <div className={styles["progress__bar"]} style={{ width: `${floored_percentage}%` }}></div>
            </div>
            <div className="mb-3"></div>
            <div className={styles["question-text"]}>The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial</div>
            <div className="mb-3"></div>
        </>
    )

};

export default Progress;