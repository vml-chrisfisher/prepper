import React from 'react'
import * as styles from './styles.module.css'
import * as baseStyles from '../base.module.css'

const FeaturedVegetableRow = () => {
  return (
    <div className={[baseStyles.row, styles.container].join(' ')}>
      <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
        <div className={styles.vegetableContainer}>
          <div className={styles.vegetableBackground}>
            <div className={styles.vegetableImage}>
              <img src={'/perkins-okra.jpg'} />
            </div>
            <div className={styles.vegetableOverlay}>
              <div className={[baseStyles.col3, styles.col3Full].join(' ')} />
              <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
                <div className={styles.vegetableDetailContainer}>
                  <h2 className={styles.vegetableTitle}>
                    Perkins Long Pod Okra
                </h2>
                  <p className={styles.vegetableDescription}>
                    I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage.
                </p>
                  <button className={[baseStyles.primaryButton, baseStyles.outline].join(' ')}>Learn More</button>
                </div>
              </div>
              <div className={[baseStyles.col3, styles.col3Full].join(' ')} />
            </div>
          </div>
        </div>
      </div>
      <div className={[baseStyles.col3, styles.col3Full].join(' ')}>
        <div className={baseStyles.row}>
          <div className={baseStyles.col12}>
            <div className={styles.vegetablePricingSummaryContainer}>
              <img src={} />
              
            </div>
          </div>
        </div>
        <div className={baseStyles.row}>
          <div className={baseStyles.col12}>

          </div>
        </div>
      </div>
      <div className={[baseStyles.col3, styles.col3Full].join(' ')}>
        
      </div>
    </div>
  )
}

export default FeaturedVegetableRow