import React from 'react';
import styles from './styles.css';

const Footer = () => (
  <div>
    <div className="row" style={{paddingBottom: '175px'}}>
      <div className="col3}" />
      <div className="col3">
          <div className={styles.footerTitle}>Shop</div>
          <div className={styles.footerParagraph}>
            Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
          </div>
          <a href="" className={styles.footerLinkMain}>
            Shop Now
          </a>
      </div>
      <div className="col3">
          <div className={styles.footerTitle}>Recipes</div>
          <div className={styles.footerParagraph}>
            Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
          </div>
          <a href="" className={styles.footerLinkMain}>
            Get Recipes
          </a>
      </div>
      <div className="col3">
          <div className={styles.footerTitle}>Story</div>
          <div className={styles.footerParagraph}>
            Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
          </div>
          <a href="" className={styles.footerLinkMain}>
            Read
          </a>
      </div>
    </div>
    <div className="row" style={{ paddingBottom: '100px' }}>
      <div className="col3" />
      <div className="col9">
        <div className="col4">
          <a href="">
            <img className={styles.footerSocialIcon} src={'/facebook.svg'} />
          </a>
          <a href="">
            <img className={styles.footerSocialIcon} src={'/instagram.svg'} />
          </a>
          <a href="">
            <img className={styles.footerSocialIcon} src={'/pinterest.svg'} />
          </a>
        </div>
        <div className="col8">
          <div className={styles.footerBottomLinkContainer}>
            <a href="" className={styles.footerLinkBottom}>Plants</a>
            <a href="" className={styles.footerLinkBottom}>Recipes</a>
            <a href="" className={styles.footerLinkBottom}>Contact Us</a>
            <a href="" className={styles.footerLinkBottom}>Shipping</a>
            <a href="" className={styles.footerLinkBottom}>Returns</a>
            <a href="" className={styles.footerLinkBottom}>Privacy</a>
            <a href="" className={styles.footerLinkBottom}>Terms</a>
            <a href="" className={styles.footerLinkBottom}>Careers</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
