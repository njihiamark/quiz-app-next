import React from 'react';
import styles from './score.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import cssRatingClasses from '../utils/cssRatingClasses';

type Props = {
    page_url: string,
    score: number,
    max_score: number,
}

const Score = ({ page_url = "welcome", score = 8, max_score = 10 }: Props) => {
    const score_percentage = (score / max_score) * 100;
    const rounded_percentage = Math.round(score_percentage);
    const nearest_ten_percentage = Math.round(rounded_percentage/ 10) * 10;
    return (
        <div className="mb-1">
            <div className={styles["score-info"] + " mb-1"}>
                <div className={styles["score-info__first-sec"]}>
                    <div className={styles["score-info__avatar"]}>
                        <Image src="/images/avatar.svg" layout="fixed" width={46} height={46} />
                    </div>
                    {max_score == 10 ? <span> You scored <span className={styles["score-info__actual"]}>{score == 10 ? 10 : "0"+score }</span>/<span className={styles["score-info__base"]}>{max_score}</span></span> : <span> You scored <span className={styles["score-info__actual"]}>{rounded_percentage}%</span></span>}
                </div>
                <div className={styles["score-info__cross"]}>
                    <Link href={page_url}>
                        <Image src="/images/white-cross.svg" width={17} height={17} />
                    </Link>
                </div>
            </div>
            <div className={styles["star-ratings"] + " " + styles[cssRatingClasses(rounded_percentage, nearest_ten_percentage)]}></div>
        </div>
    )

};

export default Score;