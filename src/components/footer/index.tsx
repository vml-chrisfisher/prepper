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
        <div className="row" style={{ paddingBottom: '175px' }}>
          <div className="col3" />
          <div className="col3">
            <FooterTitle theme={themeValue}>Shop</FooterTitle>
            <FooterParagraph theme={themeValue}>
              Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
            </FooterParagraph>
            <FooterLinkMain theme={themeValue} href="">
              Shop Now
            </FooterLinkMain>
          </div>
          <div className="col3">
            <FooterTitle theme={themeValue}>Recipes</FooterTitle>
            <FooterParagraph theme={themeValue}>
              Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
            </FooterParagraph>
            <FooterLinkMain theme={themeValue} href="">
              Get Recipes
            </FooterLinkMain>
          </div>
          <div className="col3">
            <FooterTitle theme={themeValue}>Story</FooterTitle>
            <FooterParagraph theme={themeValue}>
              Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
            </FooterParagraph>
            <FooterLinkMain theme={themeValue} href="">
              Read
            </FooterLinkMain>
          </div>
        </div>
        <div className="row" style={{ paddingBottom: '100px' }}>
          <div className="col3" />
          <div className="col9">
            <div className="col4">
              <a href="">
                <FooterSocialIcon alt="Zephyr and Hare Facebook" src={'/facebook.svg'} />
              </a>
              <a href="">
                <FooterSocialIcon alt="Zephyr and Hare Instagram" src={'/instagram.svg'} />
              </a>
              <a href="">
                <FooterSocialIcon alt="Zephyr and Hare Pinterest" src={'/pinterest.svg'} />
              </a>
            </div>
            <div className="col8">
              <FooterBottomLinkContainer>
                <FooterLinkBottom theme={themeValue} href="/plants">
                  Plants
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="">
                  Recipes
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="">
                  Contact Us
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="">
                  Shipping
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="">
                  Returns
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="">
                  Privacy
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="">
                  Terms
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="">
                  Careers
                </FooterLinkBottom>
              </FooterBottomLinkContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const FooterTitle = styled.div<ThemeProps>`
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  font-size: 1.5em;
  letter-spacing: -0.5px;
  padding-bottom: 50px;
`

const FooterParagraph = styled.div<ThemeProps>`
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  font-size: 0.8125em;
  font-family: 'Nunito', sans-serif;
  letter-spacing: -0.5px;
  padding-bottom: 66px;
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
  &:hover {
    color: #999999;
    transition: color 1s ease;
  }
`

export default Footer
