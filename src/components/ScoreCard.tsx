import React from 'react';
import styles from './scorecard.module.scss';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';

type Props = {
    desc: string,
    status: boolean
}

const ScoreCard =({desc = "", status = false}: Props) => (
    <div className={styles["score-card"]+` ${status ? styles["score-card--pass"] : styles["score-card--fail"]}`} >
        {ReactHtmlParser(desc)}
        <span className={styles["score-card__mark"]}>{status ? <Image src="/images/tick.svg" width={20} height={15} layout="fixed" /> : <Image src="/images/cross.svg" width={15} height={15} layout="fixed" />}</span>
    </div>
);

export default ScoreCard;