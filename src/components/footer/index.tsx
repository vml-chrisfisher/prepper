import React from 'react';
import styled from '@emotion/styled'

const Footer = () => (
  <div>
    <div className="row" style={{paddingBottom: '175px'}}>
      <div className="col3}" />
      <div className="col3">
          <FooterTitle>Shop</FooterTitle>
          <FooterParagraph>
            Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
          </FooterParagraph>
          <FooterLinkMain href="">
            Shop Now
          </FooterLinkMain>
      </div>
      <div className="col3">
          <FooterTitle>Recipes</FooterTitle>
          <FooterParagraph>
            Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
          </FooterParagraph>
          <FooterLinkMain href="">
            Get Recipes
          </FooterLinkMain>
      </div>
      <div className="col3">
          <FooterTitle>Story</FooterTitle>
          <FooterParagraph>
            Sign up to our newsletter and get exclusive. Seedlings news, updates and offers.
          </FooterParagraph>
          <FooterLinkMain href="">
            Read
          </FooterLinkMain>
      </div>
    </div>
    <div className="row" style={{ paddingBottom: '100px' }}>
      <div className="col3" />
      <div className="col9">
        <div className="col4">
          <a href="">
            <FooterSocialIcon src={'/facebook.svg'} />
          </a>
          <a href="">
            <FooterSocialIcon src={'/instagram.svg'} />
          </a>
          <a href="">
            <FooterSocialIcon src={'/pinterest.svg'} />
          </a>
        </div>
        <div className="col8">
          <FooterBottomLinkContainer>
            <FooterLinkBottom href="">Plants</FooterLinkBottom>
            <FooterLinkBottom href="">Recipes</FooterLinkBottom>
            <FooterLinkBottom href="">Contact Us</FooterLinkBottom>
            <FooterLinkBottom href="">Shipping</FooterLinkBottom>
            <FooterLinkBottom href="">Returns</FooterLinkBottom>
            <FooterLinkBottom href="">Privacy</FooterLinkBottom>
            <FooterLinkBottom href="">Terms</FooterLinkBottom>
            <FooterLinkBottom href="">Careers</FooterLinkBottom>
          </FooterBottomLinkContainer>
        </div>
      </div>
    </div>
  </div>
)

const FooterTitle = styled.div`
  color: #FFFFFF;
  font-size: 1.5em;
  letter-spacing: -0.5px;
  padding-bottom: 50px;
`

const FooterParagraph = styled.div`
  color: #FFFFFF;
  font-size: .8125em;
  font-family: 'Nunito', sans-serif;
  letter-spacing: -0.5px;
  padding-bottom: 66px;
`

const FooterLinkMain = styled.a`
  border-bottom: #FFFFFF solid .5px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: .875em;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  letter-spacing: -0.5px;
  padding-bottom: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 1.0s ease;
  transition-property: color, border;
  &:hover {
    border-bottom: #999999 solid .5px;;
    color: #999999;
    transition: all 1.0s ease;
    transition-property: color, border;
  }
`

const FooterSocialIcon = styled.img`
  display: inline-block;;
  padding-right: 20px;
  width: 20px;
`

const FooterBottomLinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const FooterLinkBottom = styled.a`
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: .5625em;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  letter-spacing: -0.5px;
  padding-top: 10px;
  text-align: justify;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 1.0s ease;
  &:hover {
    color: #999999;
    transition: color 1.0s ease;
  }
`

export default Footer
