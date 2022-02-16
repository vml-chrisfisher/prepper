import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { PureComponent } from 'react'
import LazyLoad from 'react-lazy-load'
import FooterProps from './interface'

interface ThemeProps {
  pageTheme: string
}

const Footer = (props: FooterProps) => {
  const { theme } = props
  const FooterColumnsContainer = styled.div`
    padding-bottom: 100px;
    @media (max-width: 767px) {
      padding-top: 100px;
      padding-bottom: 0px;
    }
  `

  const FooterBottomContainer = styled.div`
    padding-bottom: 100px;
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
    color: ${(props) => {
      return props.pageTheme === 'white' ? '#FFFFFF' : '#464646'
    }};
    font-size: 1.5em;
    letter-spacing: -0.5px;
    padding-bottom: 50px;
    @media (max-width: 767px) {
      padding-bottom: 20px;
    }
  `

  const FooterParagraph = styled.div<ThemeProps>`
    color: ${(props) => {
      return props.pageTheme === 'white' ? '#FFFFFF' : '#464646'
    }};
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    letter-spacing: 0px;
    min-height: 150px;
    @media (max-width: 767px) {
      font-size: 1em;
      padding-bottom: 20px;
      min-height: 100px;
    }
  `

  const FooterLinkMain = styled.a<ThemeProps>`
    border-bottom: ${(props) => {
      return props.pageTheme === 'white' ? '#FFFFFF solid .5px' : '#464646 solid .5px'
    }};
    color: ${(props) => {
      return props.pageTheme === 'white' ? '#FFFFFF' : '#464646'
    }};
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    letter-spacing: -0.5px;
    padding-bottom: 10px;
    text-decoration: none;
    transition: all 1s ease;
    transition-property: color, border;
    &:hover {
      border-bottom: #999999 solid 0.5px;
      color: #f24e11;
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

  const FooterLinkBottom = styled((props) => <Link {...props} />)<ThemeProps>`
    color: ${(props) => {
      return props.pageTheme === 'white' ? '#FFFFFF' : '#464646'
    }};
    cursor: pointer;
    display: inline-block;
    font-size: 9px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    letter-spacing: -0.5px;
    padding-top: 5px;
    padding-right: 20px;
    padding-bottom: 100px;
    text-align: justify;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 1s ease;
    display: block;
    min-width: 48px;
    min-height: 48px;
    height: 48px;
    @media (max-width: 767px) {
      padding-bottom: 0px;
      padding-right: 0px;
      padding-top: 25px;
      display: block;
      font-size: 0.9em;
      width: 100%;
    }
    &:hover {
      color: #f24e11;
      transition: color 1s ease;
    }
  `
  return (
    <div>
      <FooterColumnsContainer className="row">
        <FooterColumn className="col3" />
        <FooterColumn className="col3">
          <FooterTitle pageTheme={theme}>Articles</FooterTitle>
          <FooterParagraph pageTheme={theme}>
            From learning the best knife to buy or how to cut an onion correctly.
          </FooterParagraph>
          <FooterLinkMain pageTheme={theme} href="/articles">
            Read One
          </FooterLinkMain>
        </FooterColumn>
        <FooterColumn className="col3">
          <FooterTitle pageTheme={theme}>Recipes</FooterTitle>
          <FooterParagraph pageTheme={theme}>
            Creating a meal, creates conversations and brings people to together. Let us help you.
          </FooterParagraph>
          <FooterLinkMain pageTheme={theme} href="/recipes">
            Get Recipes
          </FooterLinkMain>
        </FooterColumn>
        <FooterColumn className="col3">
          <FooterTitle pageTheme={theme}>Story</FooterTitle>
          <FooterParagraph pageTheme={theme}>
            From a love to a mission to help everyone learn how to cook to one signature dish.
          </FooterParagraph>
          <FooterLinkMain pageTheme={theme} href="/story">
            Read
          </FooterLinkMain>
        </FooterColumn>
      </FooterColumnsContainer>
      <FooterBottomContainer className="row">
        <div className="col3" />
        <div className="col9">
          <div className="col4">
            <a aria-label="Knife and Fish Facebook" href="https://www.facebook.com/knifeandfish">
              <LazyLoad once offset={100}>
                <FooterSocialIcon
                  alt="Knife andFish Facebook"
                  src={
                    theme === 'white'
                      ? '//images.ctfassets.net/ce6fbxhy1t51/6yYrd2D1fVD8j7LtZ76sy/1ef98cc5c29e67cb01df9a60b4df9d42/facebook.svg'
                      : '//images.ctfassets.net/ce6fbxhy1t51/6bnGfZilJNkJ7KzlI7L14i/9abc4692dd2b20b8395b6c691b24cf57/facebook_black.svg'
                  }
                />
              </LazyLoad>
            </a>
            <a aria-label="Knife and Fish Instagram" href="https://www.instagram.com/knifeandfish/">
              <LazyLoad once offset={100}>
                <FooterSocialIcon
                  alt="Knife and Fish Instagram"
                  src={
                    theme === 'white'
                      ? '//images.ctfassets.net/ce6fbxhy1t51/2MNwT4CYIQUPMp540OF0HU/d9f43fa3de2e7f64ea068cc15af6c7c9/instagram.svg'
                      : '//images.ctfassets.net/ce6fbxhy1t51/58h2K46VAOk5uTIUJBMcJN/496c458470edfb08cbcebe8b1540ee31/instagram_black.svg'
                  }
                />
              </LazyLoad>
            </a>
            <a aria-label="Knife and Fish Pinterest" href="https://www.pinterest.com/knifeandfish/">
              <LazyLoad once offset={100}>
                <FooterSocialIcon
                  alt="Knife and Fish Pinterest"
                  src={
                    theme === 'white'
                      ? '//images.ctfassets.net/ce6fbxhy1t51/6PsbRIEHqAunj8DT6d9Qod/207e4a09ebe4d00b5dff6abe9b45893d/pinterest.svg'
                      : '//images.ctfassets.net/ce6fbxhy1t51/3GAq3HqdGSYfQlZpcYd1z1/a96ede6a2f20f020b8500dd7de59a913/pinterest_black.svg'
                  }
                />
              </LazyLoad>
            </a>
          </div>
          <div className="col6">
            <FooterBottomLinkContainer>
              {/* <FooterLinkBottom pageTheme={themeValue} href="/plants">
                  Plants
                </FooterLinkBottom> */}
              <FooterLinkBottom pageTheme={theme} to="/recipes">
                Recipes
              </FooterLinkBottom>
              <FooterLinkBottom pageTheme={theme} to="/contact">
                Contact Us
              </FooterLinkBottom>
              {/* <FooterLinkBottom pageTheme={theme} href="/shipping">
                  Shipping
                </FooterLinkBottom>
                <FooterLinkBottom pageTheme={theme} href="/returns">
                  Returns
                </FooterLinkBottom> */}
              {/* <FooterLinkBottom pageTheme={theme} href="/privacy">
                  Privacy
                </FooterLinkBottom>
                <FooterLinkBottom pageTheme={theme} href="/terms">
                  Terms
                </FooterLinkBottom> */}
              {/* <FooterLinkBottom pageTheme={theme} href="careers">
                  Careers
                </FooterLinkBottom> */}
              <FooterLinkBottom pageTheme={theme} to="/sitemap.xml">
                Sitemap
              </FooterLinkBottom>
            </FooterBottomLinkContainer>
          </div>
        </div>
      </FooterBottomContainer>
    </div>
  )
}

export default Footer
