import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { HeaderMenuType, HeaderProps, HeaderState, ProductCategory, ProductFamily } from './interface'

interface MenuProps {
  isUp: boolean
}

interface ThemeProps {
  pageTheme: string
}

interface SubMenuProps {
  isMenu: boolean
}

class HeaderAMP extends PureComponent {
  scrollTimeout = 0

  render() {
    return (
      <header className="header">
        <Helmet>
          <style amp-custom>
            {`
              .header {
                background-color: #fff;
                position: fixed;
                top: 0;
                left: 0;
                height: 73px;
                z-index: 99999;
              }
              .navigation {
                display: flex;
                justify-content: left;
                list-style: none;
                padding-left: 20px;
                padding-top: 0px;
                margin: 0;
                font-size: 1.25em;
              }
              
              .navigation-item {
                font-family: 'Roboto', sans-serif;
                color: #464646;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 0.6em;
                font-weight: 600;
                transition: color 1s ease;
                margin-right: 40px;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                cursor: pointer;
                display: block;
                padding-top: 25px;
                width: 48px;
                height: 48px;
              }

              .logo-container {
                background-color: #fff;
                position: fixed;
                text-align: right;
                padding-right: 20px;
                width: 100%;
                z-index: 999;
              }

              .logo-link {
                text-decoration: none;
              }

              .logo-image {
                display: inline-block;
                padding-right: 20px;
                width: 100px;      
                }

              `}
          </style>
        </Helmet>
        <nav role="navigation">
          <ul className="navigation">
            {/* <li>
              <NavigationItem
                pageTheme={themeValue}
                onClick={() => {
                  this.onSeedsClick()
                }}
              >
                Plants
              </NavigationItem>
            </li> */}
            <li>
              <Link className="navigation-item" to="/recipes">
                Recipes
              </Link>
            </li>
            <li>
              <Link className="navigation-item" to="/articles">
                Articles
              </Link>
            </li>
          </ul>
        </nav>
        <div className="logo-container">
          <div>
            <Link className="logo-link" to="/">
              <amp-img
                class="logo-"
                width="100"
                height="75"
                alt="Knife and Fish Logo"
                src="//images.ctfassets.net/ce6fbxhy1t51/4rf552O0YO79rkWIvVg00Y/5d820bf870030801d3c4e9569d727b41/logo.svg"
              >
                <noscript>
                  <img
                    src="//images.ctfassets.net/ce6fbxhy1t51/4rf552O0YO79rkWIvVg00Y/5d820bf870030801d3c4e9569d727b41/logo.svg"
                    width="100"
                    height="75"
                  />
                </noscript>
              </amp-img>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderAMP
