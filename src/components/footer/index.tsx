import { Link } from 'gatsby';
import React from 'react';
import * as baseStyles from '../base.module.css';
import * as styles from './styles.module.css';

const Footer = () => (
  <div className={baseStyles.row} style={{paddingBottom: '100px'}}>
    <div className={baseStyles.col3}>
     
    </div>
    <div className={baseStyles.col3}>
        <div className={styles.footerTitle}>Shop</div>
        <div className={styles.footerParagraph}>
          Sign up to our newsletter and get exclusive. Seedlip news, updates and offers.
        </div>
        <div className={styles.footerLinkMain}>
          Shop Now
        </div>
    </div>
    <div className={baseStyles.col3}>
        <div className={styles.footerTitle}>Recipes</div>
        <div className={styles.footerParagraph}>
          Sign up to our newsletter and get exclusive. Seedlip news, updates and offers.
        </div>
        <div className={styles.footerLinkMain}>
          Get Recipes
        </div>
    </div>
    <div className={baseStyles.col3}>
        <div className={styles.footerTitle}>Story</div>
        <div className={styles.footerParagraph}>
          Sign up to our newsletter and get exclusive. Seedlip news, updates and offers.
        </div>
        <div className={styles.footerLinkMain}>
          Read
        </div>
    </div>
  </div>
)

export default Footer
