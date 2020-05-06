import React from 'react';
import styles from './styles.css';
import styled from '@emotion/styled'

const NewsletterSignup = () => {
    return (
        <div className={styles.newsletterSignupContainer}>
             <div className={styles.newsletterSignupScroll}>
                 <div className={styles.newsletterSignupForm}>
                 <NewsletterSignupTitle className="white-text">Get our latest updates</NewsletterSignupTitle>
                <p>Sign up to our newsletter and get exclusive Seedlings news, updates and others.</p>
                <NewsletterSignupInput placeholder="seedlings@seedlings.com" />
                <button className="primaryButton">Sign up</button>
                 </div>
                
            </div>
        </div>
       
    )
}

const NewsletterSignupTitle = styled.h3`
    font-size: 1.5em;
`

const NewsletterSignupInput = styled.input`
    width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  border-bottom: solid .5px #FFFFFF;
  font-size: 19px;
  color: #FFFFFF;
  font-family: 'Nunito', sans-serif;
  margin-bottom: 20px;
`

export default NewsletterSignup