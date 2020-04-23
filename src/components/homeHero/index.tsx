import React from 'react';
import * as baseStyles from '../base.module.css';
import VideoBackgroundProps from './interface';
import * as styles from './styles.module.css';

const HomeHero = (props: VideoBackgroundProps) => (
  (<div className={styles.container}>
    <div className={styles.overlay}>
      <div className={styles.questionOverlay}>
        <h1 className={[styles.headline, baseStyles.whiteText].join(' ')} dangerouslySetInnerHTML={
        {__html: props.headline}
      }></h1>
      <h2 className={styles.question}>{props.searchQuestion}</h2>
      <input className={styles.questionInput} placeholder={props.searchPlaceholder} />}
      </div>
    
    </div>
  </div>)
)

export default HomeHero
