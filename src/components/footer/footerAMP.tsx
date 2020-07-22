import styled from '@emotion/styled'
import React, { PureComponent } from 'react'
import FooterProps from './interface'
import Helmet from 'react-helmet'

class FooterAMP extends PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <style amp-custom>
            {`
              .footer-columns-container {
                padding-bottom: 100px;
                padding-top: 100px;
              }

              .footer-bottom-container {
                padding-bottom: 100px;
                padding-top: 20px;
              }

              .footer-column {
                width: 21%;
                padding-right: 4%;
                padding-bottom: 100px;
                padding-left: 5%;
                width: 90%;           
              }

              .footer-title {
                color: #464646;
                font-size: 1.5em;
                letter-spacing: -0.5px;
                padding-bottom: 20px;
              }

              .footer-paragraph {
                color: #464646
                font-size: 1em;
                font-family: 'Nunito', sans-serif;
                letter-spacing: -0.5px;
                padding-bottom: 20px;
                min-height: 100px;
              }

              .footer-link-main {
                border-bottom: #464646 solid .5px;
                color: #464646;
                cursor: pointer;
                display: inline-block;
                font-size: 0.875em;
                font-family: 'Nunito', sans-serif;
                font-weight: 600;
                letter-spacing: -0.5px;
                padding-bottom: 10px;
                text-decoration: none;
                text-transform: uppercase;
              }

              .footer-social-icon {
                display: inline-block;
                padding-right: 20px;
                width: 20px;
              }

              .footer-bottom-link-container {
                display: block;
                padding-left: 5%;
              }

              .footer-link-bottom {
                color: #464646;
                cursor: pointer;
                display: block;
                font-size: 0.9em;
                font-family: 'Nunito', sans-serif;
                font-weight: 600;
                letter-spacing: -0.5px;
                padding-top: 25px;
                padding-right: 0px;
                padding-bottom: 0px;
                text-align: justify;
                text-decoration: none;
                text-transform: uppercase;
                transition: color 1s ease;
                display: block;
                min-width: 48px;
                min-height: 48px;
                height: 48px;
                width: 100%;
              }
              `}
          </style>
        </Helmet>
        <div className="row footer-columns-container">
          <div className="col3 footer-column" />
          <div className="col3 footer-column">
            <div className="footer-title">Articles</div>
            <div className="footer-paragraph">
              From learning the best knife to buy or how to cut an onion correctly.
            </div>
            <a className="footer-link-main" href="/articles">
              Read One
            </a>
          </div>
          <div className="col3 footer-column">
            <div className="footer-title">Recipes</div>
            <div className="footer-paragraph">
              Creating a meal, creates conversations and brings people to together. Let us help you.
            </div>
            <a className="footer-link-main" href="/recipes">
              Get Recipes
            </a>
          </div>
          <div className="col3 footer-column">
            <div className="footer-title">Story</div>
            <div className="footer-paragraph">
              From a love to a mission to help everyone learn how to cook to one signature dish.
            </div>
            <a className="footer-link-main" href="/story">
              Read
            </a>
          </div>
        </div>
        <div className="row footer-bottom-container">
          <div className="col3" />
          <div className="col9">
            <div className="col4">
              <a aria-label="Knife and Fish Facebook" href="https://www.facebook.com/knifeandfish">
                <amp-img
                  class="footer-social-icon"
                  width="20"
                  height="20"
                  alt="Knife andFish Facebook"
                  src="//images.ctfassets.net/ce6fbxhy1t51/6bnGfZilJNkJ7KzlI7L14i/9abc4692dd2b20b8395b6c691b24cf57/facebook_black.svg"
                >
                  <noscript>
                    <img
                      src="//images.ctfassets.net/ce6fbxhy1t51/6bnGfZilJNkJ7KzlI7L14i/9abc4692dd2b20b8395b6c691b24cf57/facebook_black.svg"
                      width="20"
                      height="20"
                    />
                  </noscript>
                </amp-img>
              </a>
              <a aria-label="Knife and Fish Instagram" href="https://www.instagram.com/knifeandfish/">
                <amp-img
                  class="footer-social-icon"
                  width="20"
                  height="20"
                  alt="Knife and Fish Instagram"
                  src="//images.ctfassets.net/ce6fbxhy1t51/58h2K46VAOk5uTIUJBMcJN/496c458470edfb08cbcebe8b1540ee31/instagram_black.svg"
                >
                  <noscript>
                    <img
                      src="//images.ctfassets.net/ce6fbxhy1t51/58h2K46VAOk5uTIUJBMcJN/496c458470edfb08cbcebe8b1540ee31/instagram_black.svg"
                      width="20"
                      height="20"
                    />
                  </noscript>
                </amp-img>
              </a>
              <a aria-label="Knife and Fish Pinterest" href="https://www.pinterest.com/knifeandfish/">
                <amp-img
                  class="footer-social-icon"
                  width="20"
                  height="20"
                  alt="Knife and Fish Pinterest"
                  src="//images.ctfassets.net/ce6fbxhy1t51/3GAq3HqdGSYfQlZpcYd1z1/a96ede6a2f20f020b8500dd7de59a913/pinterest_black.svg"
                >
                  <noscript>
                    <img
                      src="//images.ctfassets.net/ce6fbxhy1t51/3GAq3HqdGSYfQlZpcYd1z1/a96ede6a2f20f020b8500dd7de59a913/pinterest_black.svg"
                      width="20"
                      height="20"
                    />
                  </noscript>
                </amp-img>
              </a>
            </div>
            <div className="col6">
              <div className="footer-bottom-link-container">
                {/* <FooterLinkBottom theme={themeValue} href="/plants">
                  Plants
                </FooterLinkBottom> */}
                <a className="footer-link-bottom" href="/recipes">
                  Recipes
                </a>
                <a className="footer-link-bottom" href="/contact">
                  Contact Us
                </a>
                {/* <FooterLinkBottom theme={themeValue} href="/shipping">
                  Shipping
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="/returns">
                  Returns
                </FooterLinkBottom> */}
                {/* <FooterLinkBottom theme={themeValue} href="/privacy">
                  Privacy
                </FooterLinkBottom>
                <FooterLinkBottom theme={themeValue} href="/terms">
                  Terms
                </FooterLinkBottom> */}
                {/* <FooterLinkBottom theme={themeValue} href="careers">
                  Careers
                </FooterLinkBottom> */}
                <a className="footer-link-bottom" href="/sitemap.xml">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterAMP
