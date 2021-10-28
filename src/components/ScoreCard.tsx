import React from 'react';
import styles from './scorecard.module.scss';
import Image from 'next/image';

type Props = {
    
}

console.log(styles);
const ScoreCard =() => (
    <div className={styles["score-card"]+" "+styles["score-card--fail"]}>
        The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.
        <span className={styles["score-card__mark"]}><Image src="/images/tick.svg" width={20} height={15} /></span>
    </div>
);

export default ScoreCard;