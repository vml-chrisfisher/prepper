import React from 'react';
import * as baseStyles from '../base.module.css';
import VideoBackgroundProps from './interface';
import * as styles from './styles.module.css';

const HomeHero = (props: VideoBackgroundProps) => (
  <div>
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={baseStyles.row}>
          <div className={baseStyles.col3}>
          </div>
          <div className={baseStyles.col6}>
            <div className={styles.questionOverlay}>
              <h1 className={[styles.headline, baseStyles.whiteText].join(' ')} dangerouslySetInnerHTML={
                { __html: props.headline }
              }></h1>
              <h3 className={styles.question}>{props.searchQuestion}</h3>
              <input className={styles.questionInput} placeholder={props.searchPlaceholder} />
      </div>
          </div>
          <div className={baseStyles.col3}>

          </div>
        </div>
        

      </div>
    </div>
  </div>
)

export default HomeHero
