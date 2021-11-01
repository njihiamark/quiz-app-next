import React from 'react';
import styles from './score.module.scss';
import Image from 'next/image';

type Props = {
    
  }

const Score = () => (
    <div className="mb-1">    
        <div className={styles["score-info"]+" mb-1"}>
            <div className={styles["score-info__first-sec"]}>
                <div className={styles["score-info__avatar"]}>
                    <Image src="/images/avatar.svg" layout="fixed" width={46} height={46} />
                </div>
                <span> You scored <span className={styles["score-info__actual"]}>08</span>/<span className={styles["score-info__base"]}>10</span></span>
            </div>
            <div className={styles["score-info__cross"]}>
                <Image src="/images/white-cross.svg" width={17} height={17} />
            </div>    
        </div>
        <div className={styles["star-ratings"]+" "+styles["eighth"]}></div>
    </div>

    
);

export default Score;