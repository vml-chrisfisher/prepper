import React from 'react';
import ArticleSummary from '../articleSummary';
import * as baseStyles from '../base.module.css';
import * as styles from './styles.module.css';

const GeneralContentRow = () => {
  return (
    <div className={[baseStyles.row, styles.container].join(' ')}>
      <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
        <div className={styles.vegetableContainer}>
          <div className={styles.vegetableBackground}>
            <div className={styles.vegetableImage}>
              <img src={'/story-background.png'} />
            </div>
            <div className={styles.vegetableOverlay}>
              <div className={[baseStyles.col3, styles.col3Full].join(' ')} />
                <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
                  <div className={styles.vegetableDetailContainer}>
                    <h2 className={styles.vegetableTitle}>
                      This is the story of Seedlings
                  </h2>
                    <button className={[baseStyles.primaryButton, baseStyles.outline].join(' ')}>Learn More</button>
                  </div>
                </div>
              <div className={[baseStyles.col3, styles.col3Full].join(' ')} />
            </div>
          </div>
        </div>
      </div>
      <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
        <div className={baseStyles.row}>
          <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
          <ArticleSummary {...
            {
              title: 'A guide to gardening tools',
              description: 'sdfsdfds sdf  sdf sdf',
              slug: 'sdfds',
              imagePath: '/tools-background.png'
            }
          } />
          </div>
          
        <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
          <ArticleSummary {...
            {
              title: 'A guide to gardening tools',
              description: 'sdfsdfds sdf  sdf sdf',
              slug: 'sdfds',
              imagePath: '/okra-corn.png'
            }
          } />
        </div>
      </div>
    </div>
  </div>
  )
}

export default GeneralContentRow