import styled from '@emotion/styled';
import React, { PureComponent } from 'react';
import { NewsletterProps } from './interface';

interface NewsletterPositionProps {
  stage: number
}

class NewsletterSignup extends PureComponent<NewsletterProps> {

  componentDidMount() {
    this.props.onReset();
  }

  render() {
    const position = this.props.position;
    return (
        <NewsletterSignupContainer>
              <NewsletterSignupScroll stage={position}>
                  <NewsletterSignupForm>
                    <NewsletterSignupTitle className="white-text">Get our latest updates</NewsletterSignupTitle>
                    <p>Sign up to our newsletter and get exclusive Seedlings news, updates and others.</p>
                    <NewsletterSignupInput placeholder="seedlings@seedlings.com" />
            <button onClick={() => this.props.onSubmit('sdfd@sdfds.com') } className="primaryButton">Sign up</button>
                  </NewsletterSignupForm>
                  <NewsletterSignupStatus>sfds</NewsletterSignupStatus>
                  <NewsletterSignupConfirmation></NewsletterSignupConfirmation>
            </NewsletterSignupScroll>
        </NewsletterSignupContainer>
        
    )
  }
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

const NewsletterSignupScroll = styled.div<NewsletterPositionProps>`
  background-color: #FF0000;
  height: 300%;
  position: absolute;
  top: ${(props) => { 
    return (props.stage === 0 ? '0%' : props.stage === 1 ? '-100%': '-200%' )
  }};
  -webkit-transition: top 5s ease-out;
  -moz-transition: top .5s ease-out;
  -ms-transition: top .5s ease-out;
  -o-transition: top .5s ease-out;
  transition: top .5s ease-out;
`

const NewsletterSignupForm = styled.div`
  height: 33.33%;
  padding-top: 30%;
  margin-left: 10%;
  width: 80%;
`
const NewsletterSignupStatus = styled.div`
  height: 33.33%;
  width: 100%;
`

const NewsletterSignupConfirmation = styled.div`
  height: 33.33%;
  width: 100%;
`

export default NewsletterSignup