import React from 'react';
import styles from './scorecard.module.scss';
import Image from 'next/image';

type Props = {
    desc: string,
    status: string,
}

const ScoreCard =({desc = "", status = ""}: Props) => (
    <div className={styles["score-card"]+` ${status === "pass" ? styles["score-card--pass"] : styles["score-card--fail"]}`}>
        {desc}
        <span className={styles["score-card__mark"]}>{status === "pass" ? <Image src="/images/tick.svg" width={20} height={15} layout="fixed" /> : <Image src="/images/cross.svg" width={15} height={15} layout="fixed" />}</span>
    </div>
);

export default ScoreCard;