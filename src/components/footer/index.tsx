import styled from '@emotion/styled'
import React, { PureComponent } from 'react'
import FooterProps from './interface'

interface ThemeProps {
  theme: string
}

class Footer extends PureComponent<FooterProps> {
  render() {
    const themeValue = this.props.theme
    return (
      <div>
        <FooterColumnsContainer className="row">
          <FooterColumn className="col3" />
          <FooterColumn className="col3">
            <FooterTitle theme={themeValue}>Shop</FooterTitle>
            <FooterParagraph theme={themeValue}>
              Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
            </FooterParagraph>
            <FooterLinkMain theme={themeValue} href="">
              Shop Now
            </FooterLinkMain>
          </FooterColumn>
          <FooterColumn className="col3">
            <FooterTitle theme={themeValue}>Recipes</FooterTitle>
            <FooterParagraph theme={themeValue}>
              Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
            </FooterParagraph>
            <FooterLinkMain theme={themeValue} href="">
              Get Recipes
            </FooterLinkMain>
          </FooterColumn>
          <FooterColumn className="col3">
            <FooterTitle theme={themeValue}>Story</FooterTitle>
            <FooterParagraph theme={themeValue}>
              Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
            </FooterParagraph>
            <FooterLinkMain theme={themeValue} href="">
              Read
            </FooterLinkMain>
          </FooterColumn>
        </FooterColumnsContainer>
        <FooterBottomContainer className="row">
          <div className="col3" />
          <div className="col9">
            <div className="col4">
              <a href="">
                <FooterSocialIcon
                  alt="Zephyr and Hare Facebook"
                  src={
                    '//images.ctfassets.net/ce6fbxhy1t51/6yYrd2D1fVD8j7LtZ76sy/1ef98cc5c29e67cb01df9a60b4df9d42/facebook.svg'
                  }
                />
              </a>
              <a href="">
                <FooterSocialIcon
                  alt="Zephyr and Hare Instagram"
                  src={
                    '//images.ctfassets.net/ce6fbxhy1t51/2MNwT4CYIQUPMp540OF0HU/d9f43fa3de2e7f64ea068cc15af6c7c9/instagram.svg'
                  }
                />
              </a>
              <a href="">
                <FooterSocialIcon
                  alt="Zephyr and Hare Pinterest"
                  src={
                    '//images.ctfassets.net/ce6fbxhy1t51/6PsbRIEHqAunj8DT6d9Qod/207e4a09ebe4d00b5dff6abe9b45893d/pinterest.svg'
                  }
                />
              </a>
            </div>
            <div className="col8">
              <FooterBottomLinkContainer>
                <FooterLinkBottom theme={themeValue} href="/plants">
                  Plants
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="/recipes">
                  Recipes
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="/contact">
                  Contact Us
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="/shipping">
                  Shipping
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="/returns">
                  Returns
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="/privacy">
                  Privacy
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="/terms">
                  Terms
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="careers">
                  Careers
                </FooterLinkBottom>
              </FooterBottomLinkContainer>
            </div>
          </div>
        </FooterBottomContainer>
      </div>
    )
  }
}

const FooterColumnsContainer = styled.div`
  padding-bottom: '100px';
  @media (max-width: 767px) {
    padding-top: 100px;
  }
`

const FooterBottomContainer = styled.div`
  padding-bottom: '175px';
  padding-top: 100px;
  @media (max-width: 767px) {
    padding-bottom: 100px;
    padding-top: 20px;
  }
`

const FooterColumn = styled.div`
  width: 21%;
  padding-right: 4%;
  @media (max-width: 767px) {
    padding-bottom: 100px;
    padding-left: 5%;
    width: 90%;
  }
`

const FooterTitle = styled.div<ThemeProps>`
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  font-size: 1.5em;
  letter-spacing: -0.5px;
  padding-bottom: 50px;
  @media (max-width: 767px) {
    padding-bottom: 20px;
  }
`

const FooterParagraph = styled.div<ThemeProps>`
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  font-size: 0.8125em;
  font-family: 'Nunito', sans-serif;
  letter-spacing: -0.5px;
  padding-bottom: 66px;
  @media (max-width: 767px) {
    font-size: 1em;
    padding-bottom: 20px;
  }
`

const FooterLinkMain = styled.a<ThemeProps>`
  border-bottom: ${props => {
    return props.theme === 'white' ? '#FFFFFF solid .5px' : '#464646 solid .5px'
  }};
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  cursor: pointer;
  display: inline-block;
  font-size: 0.875em;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  letter-spacing: -0.5px;
  padding-bottom: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 1s ease;
  transition-property: color, border;
  &:hover {
    border-bottom: #999999 solid 0.5px;
    color: #999999;
    transition: all 1s ease;
    transition-property: color, border;
  }
`

const FooterSocialIcon = styled.img`
  display: inline-block;
  padding-right: 20px;
  width: 20px;
`

const FooterBottomLinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 767px) {
    display: block;
    padding-left: 5%;
  }
`

const FooterLinkBottom = styled.a<ThemeProps>`
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  cursor: pointer;
  display: inline-block;
  font-size: 0.5625em;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  letter-spacing: -0.5px;
  padding-top: 10px;
  text-align: justify;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 1s ease;
  @media (max-width: 767px) {
    padding-bottom: 30px;
    padding-top: 0;
    display: block;
    font-size: 1em;
    width: 100%;
  }
  &:hover {
    color: #999999;
    transition: color 1s ease;
  }
`

export default Footer
