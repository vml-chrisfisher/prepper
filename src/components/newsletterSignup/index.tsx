import React from 'react';
import * as baseStyles from '../base.module.css';
import * as styles from './styles.module.css';

const NewsletterSignup = () => {
    return (
        <div className={styles.newsletterSignupContainer}>
             <div className={styles.newsletterSignupScroll}>
                 <div className={styles.newsletterSignupForm}>
                 <h3 className={[baseStyles.whiteText, styles.newsletterSignupTitle].join(' ')}>Get our latest updates</h3>
                <p>Sign up to our newsletter and get exclusive Seedlings news, updates and others.</p>
                <input className={styles.newsletterInput} placeholder="seedlings@seedlings.com" />
                <button className={[baseStyles.primaryButton].join(' ')}>Sign up</button>
                 </div>
                
            </div>
        </div>
       
    )
}

export default NewsletterSignup