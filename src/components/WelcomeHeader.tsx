import React from 'react';
import styles from './welcomeHeader.module.scss';
import Image from 'next/image';

const WelcomeHeader = () => (
    <div>
        <div className={styles["header-title"]}>Welcome to the</div>
        <div className="mb-1"></div>
        <Image src="/images/trivia-logo.png" layout="responsive" width={100} height={40}/>
        <div className="mb-4"></div>
    </div>
);

export default WelcomeHeader;