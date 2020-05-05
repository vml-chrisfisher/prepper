import React from 'react';
import ArticleSummary from '../articleSummary';
import baseStyles from '../base.css';
import styles from './styles.css';

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
      <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
        <div className={baseStyles.row}>
          <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
            <div className={styles.ratio1Point5Height}>
              <div className={styles.vegetablePricingSummaryContainer}>
                < img className={styles.vegetablePricingImage} src={'/okra_square.jpg'} />
                <div className={styles.vegetablePricingCategory}>Seeds</div>
                <div className={styles.vegetablePricingPrice}>$12</div>
                <div className={styles.vegetableProductContainer}>
                  <div className={[styles.vegetablePricingProduct, styles.selected].join(' ')}>12 seeds</div>
                  <div className={styles.vegetablePricingProduct}>36 seeds</div>
                </div>
              </div>
            </div>
          </div>
          
        <div className={[baseStyles.col6, styles.col6Full].join(' ')}>
          <ArticleSummary {...
            {
              title: 'Okra Corn',
              description: 'sdfsdfds sdf  sdf sdf',
              slug: 'sdfds',
              imagePath: '/okra-corn.png'
            }
          } />
        </div>
      </div>
      <div className={baseStyles.row}>
          <div className={[baseStyles.col3, styles.col3Full].join(' ')} />
          <div className={[baseStyles.col6, styles.col6Full].join(' ')} style={{paddingTop: '15%'}}>
            <h3 className={[baseStyles.center, baseStyles.whiteText].join(' ')}>Okra</h3>
            <p>I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage </p>
            <button className={baseStyles.primaryButton}>Learn More</button>
          </div>
          <div className={[baseStyles.col3, styles.col3Full].join(' ')} />
      </div>
    </div>
  </div>
  )
}

export default FeaturedVegetableRow