import React, { ReactNode } from 'react';
import Head from 'next/head';

import styles from './layout.module.scss';

type Props = {
  children?: ReactNode,
  title?: string,
  theme?: string,
}
console.log(styles);
const Layout = ({ children, title = 'Quiz app', theme = "dark" }: Props) => (  
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles["app"]+` ${theme === "light" ? styles["app--light"] : styles["app--dark"]}`}>
        <div className={styles["pattern1"]}>pattern1</div>
        <div className={styles["pattern2"]}>pattern2</div>
        <div className={styles["pattern3"]}>pattern3</div>
        <div className={styles["pattern4"]}>pattern4</div>
        <div className="container">
            {children}
        </div>
    </div>
  </div>
)

export default Layout
