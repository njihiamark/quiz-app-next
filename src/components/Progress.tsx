import React from 'react';
import styles from './progress.module.scss';
import ReactHtmlParser from 'react-html-parser';

type Props = {
    current_qn: number,
    total_qns: number,
    qn_text: string,
}

const Progress = ({ current_qn = 1, total_qns = 10, qn_text = ""}: Props) => {
    const raw_percentage = (current_qn/total_qns) * 100;
    const floored_percentage = (raw_percentage);
    return (
        <>
            <div className={styles["progress-label"]}><span className={styles["progress-label__status"]}>{current_qn}</span>/{total_qns}</div>
            <div className={styles["progress"]}>
                <div className={styles["progress__bar"]} style={{ width: `${floored_percentage}%` }}></div>
            </div>
            <div className="mb-3"></div>
            <div className={styles["question-text"]}>{ReactHtmlParser(qn_text)}</div>
            <div className="mb-3"></div>
        </>
    )

};

export default Progress;