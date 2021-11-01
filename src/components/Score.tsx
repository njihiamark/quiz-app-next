import React from 'react';
import styles from './score.module.scss';
import Image from 'next/image';
import Link from 'next/link'

type Props = {
    page_url: string,
    score: number,
    max_score: number,
}

const Score = ({page_url = "welcome", score = 8, max_score=10}: Props) => (
    <div className="mb-1">    
        <div className={styles["score-info"]+" mb-1"}>
            <div className={styles["score-info__first-sec"]}>
                <div className={styles["score-info__avatar"]}>
                    <Image src="/images/avatar.svg" layout="fixed" width={46} height={46} />
                </div>
                <span> You scored <span className={styles["score-info__actual"]}>{score}</span>/<span className={styles["score-info__base"]}>{max_score}</span></span>
            </div>
            <div className={styles["score-info__cross"]}>
                <Link href={page_url}>
                    <Image src="/images/white-cross.svg" width={17} height={17} />
                </Link>
            </div>    
        </div>
        <div className={styles["star-ratings"]+" "+styles["eighth"]}></div>
    </div>

    
);

export default Score;