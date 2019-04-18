import React from 'react';
import styles from './DemoWrappers.less';

export const DemoGrid = props => (
  <div className={styles.demoContainer}>
    <h1 className={`${styles.demoMainHeader} ${styles.demoShadow}`}>UI KIT Demo</h1>
    <div className={styles.demoGrid}>
      {props.children}
    </div>
  </div>
);

export const DemoThemeContainer = props => (
  <div className={`${styles.demoShadow} ${styles.demoInnerContainer}`}>
    {props.title && <h2 className={styles.demoThemeHeader}>{props.title}</h2>}
    {props.children}
  </div>
);

export const DemoControlsContainer = props => (
  <div className={styles.demoSectionContainer}>
    {props.title && <h3>{props.title}</h3>}
    <div className={styles.demoInnerContainer}>
      {props.children}
    </div>
  </div>
);




