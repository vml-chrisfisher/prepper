import styled from '@emotion/styled';
import React from 'react';
import { NewsletterProps } from './interface'

const NewsletterSignup = (props: NewsletterProps) => {
    return (
        <NewsletterSignupContainer>
             <NewsletterSignupScroll>
                 <NewsletterSignupForm>
                    <NewsletterSignupTitle className="white-text">Get our latest updates</NewsletterSignupTitle>
                    <p>Sign up to our newsletter and get exclusive Seedlings news, updates and others.</p>
                    <NewsletterSignupInput placeholder="seedlings@seedlings.com" />
            <button onClick={() => props.onSubmit('sdfd@sdfds.com') } className="primaryButton">Sign up</button>
                 </NewsletterSignupForm>
            </NewsletterSignupScroll>
        </NewsletterSignupContainer>
       
    )
}

const NewsletterSignupTitle = styled.h3`
  color: #FFFFFF;
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
  &:placeholder {
    color: #8D8B8B;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    font-family: 'Nunito', sans-serif;
  }
`

const NewsletterSignupContainer = styled.div`
  background-color: #1B3414;
  padding-top: 150%;
  width: 100%;
`

const NewsletterSignupScroll = styled.div`
  position: absolute;
  top: 0;
`

const NewsletterSignupForm = styled.div`
  padding-top: 30%;
  margin-left: 10%;
  width: 80%;
`

export default NewsletterSignup