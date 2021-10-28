import React from 'react';
import styles from './scorecard.module.scss';
import Image from 'next/image';

type Props = {
    desc: string,
    status: string,
}

console.log(styles);
const ScoreCard =({desc = "", status = ""}: Props) => (
    <div className={styles["score-card"]+` ${status === "pass" ? styles["score-card--pass"] : styles["score-card--fail"]}`}>
        {desc}
        <span className={styles["score-card__mark"]}>{status === "pass" ? <Image src="/images/tick.svg" width={20} height={15} /> : <Image src="/images/cross.svg" width={15} height={15} />}</span>
    </div>
);

export default ScoreCard;