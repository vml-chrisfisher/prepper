import styled from '@emotion/styled'
import React, { PureComponent } from 'react'
import { SIDEBAR_ANIMATION_STEPS } from '../../store/actions/types'
import { HeaderMenuType, HeaderProps, HeaderState, ProductCategory, ProductFamily } from './interface'
import SearchContainer from './search/container'

interface MainContainerPositionProps {
  showProfile: SIDEBAR_ANIMATION_STEPS
}

interface MenuProps {
  isUp: boolean
}

interface ThemeProps {
  theme: string
}

interface SubMenuProps {
  isMenu: boolean
}

class Header extends PureComponent<HeaderProps, HeaderState> {
  scrollTimeout = 0

  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      menuUp: true,
      menuType: HeaderMenuType.PLANTS,
    }

    this.onSeedsClick = this.onSeedsClick.bind(this)
    this.onArticlesClick = this.onArticlesClick.bind(this)
    this.onRecipesClick = this.onRecipesClick.bind(this)
    this.onCloseClick = this.onCloseClick.bind(this)
  }

  onSeedsClick() {
    this.setState(state => ({ ...state, menuUp: false, menuType: HeaderMenuType.PLANTS }))
  }

  onArticlesClick() {
    this.setState(state => ({ ...state, menuUp: false, menuType: HeaderMenuType.ARTICLES }))
  }

  onRecipesClick() {
    this.setState(state => ({ ...state, menuUp: false, menuType: HeaderMenuType.RECIPES }))
  }

  onCloseClick() {
    this.setState(state => ({ ...state, menuUp: true }))
  }

  onSearchClick(event: React.MouseEvent) {
    if (this.props.onShowSearch) {
      event.preventDefault()
      this.props.onShowSearch()
    }
  }

  onProfileClick(event: React.MouseEvent) {
    if (this.props.onShowProfile) {
      event.preventDefault()
      this.props.onShowProfile()
    }
  }

  componentDidMount = () => {
    if (this.props.onFetch) {
      this.props.onFetch()
    }
  }

  render() {
    const themeValue = this.props.theme
    const menuUp = this.state.menuUp
    const showHeaderProfile = this.props.showHeaderProfile
    return (
      <header>
        <NavigationHeader role="navigation" showProfile={showHeaderProfile}>
          <NavigationContainer>
            <NavigationColumn>
              <Navigation>
                {/* <li>
              <NavigationItem
                theme={themeValue}
                onClick={() => {
                  this.onSeedsClick()
                }}
              >
                Plants
              </NavigationItem>
            </li> */}
                <li>
                  <NavigationItem
                    theme={themeValue}
                    onClick={() => {
                      this.onRecipesClick()
                    }}
                  >
                    Recipes
                  </NavigationItem>
                </li>
                <li>
                  <NavigationItem theme={themeValue} href="/articles">
                    Articles
                  </NavigationItem>
                </li>
                <li>
                  <NavigationItem theme={themeValue} href="/shop">
                    Shop
                  </NavigationItem>
                </li>
              </Navigation>
            </NavigationColumn>
            <NavigationColumn>
              <LogoContainer>
                <div>
                  <LogoLink href="/">
                    <LogoImage
                      alt="Knife and Fish Logo"
                      src={
                        '//images.ctfassets.net/ce6fbxhy1t51/4rf552O0YO79rkWIvVg00Y/5d820bf870030801d3c4e9569d727b41/logo.svg'
                      }
                    />
                  </LogoLink>
                </div>
              </LogoContainer>
            </NavigationColumn>
            <NavigationColumn>
              <NavigationRight>
                {/* <li>
              <NavigationItem
                theme={themeValue}
                onClick={() => {
                  this.onSeedsClick()
                }}
              >
                Plants
              </NavigationItem>
            </li> */}
                <li>
                  <NavigationItemRight
                    theme={themeValue}
                    onClick={() => {
                      this.onRecipesClick()
                    }}
                  >
                    About
                  </NavigationItemRight>
                </li>
                <li>
                  <SVGLink
                    onClick={(event: React.MouseEvent) => {
                      this.onSearchClick(event)
                    }}
                  >
                    <NavigationItemIcon alt="Search" src="/search_icon.svg"></NavigationItemIcon>
                  </SVGLink>
                </li>
                <li>
                  <SVGLink
                    onClick={(event: React.MouseEvent) => {
                      this.onProfileClick(event)
                    }}
                  >
                    <NavigationItemIcon alt="Profile" src="/profile_icon.svg"></NavigationItemIcon>
                  </SVGLink>
                </li>
              </NavigationRight>
            </NavigationColumn>
          </NavigationContainer>
        </NavigationHeader>
        <HeaderOuter {...{ isUp: menuUp }} className="row">
          <HeaderInner12 {...{ isMenu: this.state.menuType === HeaderMenuType.PLANTS }} className="col12">
            <Col3Full className="col3">
              <HeaderClose
                onClick={() => {
                  this.onCloseClick()
                }}
              >
                X
              </HeaderClose>
              <HeaderMainNav>
                <ul>
                  <HeaderNavHeaderLi>
                    <a href="/plants">Plants</a>
                  </HeaderNavHeaderLi>
                  {this.props.data?.map((top: ProductFamily, index: number) => {
                    return (
                      <HeaderNavItem
                        key={`header-nav-item-${index}`}
                        onClick={() => {
                          if (this.props.onFamilySelected) {
                            this.props.onFamilySelected(top.productId)
                          }
                        }}
                      >
                        {top.name}
                      </HeaderNavItem>
                    )
                  })}
                </ul>
              </HeaderMainNav>
            </Col3Full>
            <DetailSection6 className="col6">
              <Columns>
                {this.props.categories?.map((category: ProductCategory, index: number) => {
                  return (
                    <HeaderDetailItem
                      key={`header-detail-item-${index}`}
                      onMouseOver={() => {
                        if (this.props.onCategorySelected) {
                          this.props.onCategorySelected(category.productId)
                        }
                      }}
                      onMouseOut={() => {
                        if (this.props.onCategorySelected) {
                          this.props.onCategorySelected()
                        }
                      }}
                      onClick={() => {
                        const link = `/plants/${category.name.toLowerCase().replace(' ', '+')}`
                        window.location.replace(link)
                      }}
                    >
                      {category.name}
                    </HeaderDetailItem>
                  )
                })}
              </Columns>
            </DetailSection6>
            <DetailSection23 className="col3">
              {this.props.categoryDetail?.imagePath && (
                <HeaderNavDetailImg src={this.props.categoryDetail.imagePath} alt={this.props.categoryDetail.copy} />
              )}
              {this.props.categoryDetail?.copy && (
                <HeaderNavDetailP className="darkText">{this.props.categoryDetail.copy}</HeaderNavDetailP>
              )}
            </DetailSection23>
          </HeaderInner12>

          <HeaderInner3 {...{ isMenu: this.state.menuType === HeaderMenuType.ARTICLES }} className="col3">
            <Col12Full className="col3">
              <HeaderClose
                onClick={() => {
                  this.onCloseClick()
                }}
              >
                X
              </HeaderClose>
              <HeaderMainNav style={{ paddingLeft: '70px' }}>
                <HeaderNavHeader>
                  <a href="/articles">Articles</a>
                </HeaderNavHeader>
                <div className="row">
                  <div className="col6">
                    <HeaderDetailItem>Soil</HeaderDetailItem>
                    <HeaderDetailItem>Planting</HeaderDetailItem>
                    <HeaderDetailItem>Gardening</HeaderDetailItem>
                    <HeaderDetailItem>Harvesting</HeaderDetailItem>
                    <HeaderDetailItem>Storage</HeaderDetailItem>
                  </div>
                </div>
              </HeaderMainNav>
            </Col12Full>
          </HeaderInner3>

          <HeaderInner4 {...{ isMenu: this.state.menuType === HeaderMenuType.RECIPES }} className="col3">
            <Col12Full className="col12">
              <HeaderClose
                onClick={() => {
                  this.onCloseClick()
                }}
              >
                X
              </HeaderClose>
              <HeaderMainNav style={{ paddingLeft: '70px' }}>
                <HeaderNavHeader>
                  <a href="/recipes">Recipes</a>
                </HeaderNavHeader>
                <div className="row">
                  <Col6Full className="col6">
                    <HeaderDetailItem style={{ color: '#C5724B', fontWeight: 'bold' }} href="/recipes">
                      All
                    </HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/appetizer">Appetizer</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/condiment">Condiment</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/dessert">Dessert</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/drink">Drink</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/main">Main</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/side">Side</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/snack">Snack</HeaderDetailItem>
                  </Col6Full>
                  {/* <Col6Full className="col6">
                    <HeaderDetailItem href="/recipes/breakfast">Charcuterie</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/breakfast">Baking</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/breakfast">Pickling</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/breakfast">Fermentation</HeaderDetailItem>
                    <HeaderDetailItem href="/recipes/breakfast">Condiments</HeaderDetailItem>
                  </Col6Full> */}
                </div>
              </HeaderMainNav>
            </Col12Full>
          </HeaderInner4>
        </HeaderOuter>
        <SearchContainer></SearchContainer>
      </header>
    )
  }
}

const NavigationHeader = styled.nav<MainContainerPositionProps>`
  background: transparent;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: ${props => {
    if (props.showProfile === SIDEBAR_ANIMATION_STEPS.DEFAULT || props.showProfile === SIDEBAR_ANIMATION_STEPS.HIDE) {
      return '0px'
    }
    return '-400px'
  }};
  width: 100%;
  transition: all 0.5s ease-out;
`

const HeaderNavDetailImg = styled.img`
  width: 80%;
  margin-left: 10%;
`

const HeaderNavDetailP = styled.p`
  width: 80%;
  margin-left: 10%;
`

const HeaderDetailItem = styled.a`
  color: #464646;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  line-height: 2.5em;
  list-style: none;
  text-align: left;
  transition: color 1s ease;
  text-decoration: none;
  display: block;
  &:hover {
    color: #cccccc;
    transition: color 1s ease;
  }
`

const HeaderNavItem = styled.li`
  color: #ffffff;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  list-style: none;
  padding-bottom: 20px;
  transition: color 1s ease;
  &:hover {
    color: #cccccc;
    transition: color 1s ease;
  }
`

const Columns = styled.div`
  margin-left: 10%;
  width: 80%;
  column-count: 2;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const HeaderNavHeader = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.25em;
  font-style: italic;
  color: #cccccc;
  list-style: none;
  padding-bottom: 20px;
  a {
    text-decoration: none;
  }
`

const HeaderNavHeaderLi = styled.li`
  font-family: 'Playfair Display', serif;
  font-size: 1.25em;
  font-style: italic;
  color: #cccccc;
  list-style: none;
  padding-bottom: 20px;
  a {
    text-decoration: none;
  }
`

const HeaderClose = styled.div`
  position: relative;
  padding-top: 13.5%;
  padding-left: 13.9%;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5em;
  font-weight: 300;
  color: #ccc;
`

const HeaderMainNav = styled.div`
  padding: 30px 30px 30px;
`

const Col3Full = styled.div`
  width: 25%;
  padding: 0;
`

const Col6Full = styled.div`
  width: 50%;
  padding: 0;
`

const Col12Full = styled.div`
  width: 100%;
  padding: 0;
`

const LogoContainer = styled.div`
  position: fixed;
  text-align: center;
  width: 33%;
  z-index: 999;
  @media (max-width: 767px) {
    text-align: right;
    padding-right: 20px;
  }
`

const LogoLink = styled.a`
  text-decoration: none;
`

const SVGLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    filter: invert(56%) sepia(66%) saturate(7365%) hue-rotate(358deg) brightness(99%) contrast(91%);
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }
`

const LogoImage = styled.img`
  display: inline-block;
  width: 92px;
  @media (max-width: 767px) {
    padding-right: 20px;
  }
`

const NavigationItemIcon = styled.img`
  margin-top: 20px;
  margin-right: 25px;
  display: inline-block;
  width: 22px;
  &:hover {
    color: #f24e11;
    transition: color 1s ease;
  }
`

const LogoText = styled.div<ThemeProps>`
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  font-size: 1.25em;
  letter-spacing: -0.5px;
  margin-top: -33px;
`

const DetailSection6 = styled.div`
  border-left: solid #464646 0.5px;
  min-height: 100%;
  position: relative;
  width: 50%;
  padding: 0;
`

const DetailSection23 = styled.div`
  border-left: solid #464646 0.5px;
  min-height: 100%;
  position: relative;
  width: 23%;
  padding: 0;
`

const HeaderInner3 = styled.div<SubMenuProps>`
  display: ${props => (props.isMenu ? 'block;' : 'none;')}
  width: 25%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const HeaderInner4 = styled.div<SubMenuProps>`
  display: ${props => (props.isMenu ? 'block;' : 'none;')}
  width: 33%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const HeaderInner12 = styled.div<SubMenuProps>`
  display: ${props => (props.isMenu ? 'block;' : 'none;')}
  width: 100%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
`

const HeaderOuter = styled.div<MenuProps>`
  position: fixed;
  z-index: 99999;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transform: ${props => (props.isUp ? 'translateY(-100%)' : 'translateY(0%)')};
`

const Navigation = styled.ul`
  display: flex;
  justify-content: left;
  list-style: none;
  padding-left: 26px;
  padding-top: 0px;
  margin: 0;
  font-size: 1.25em;
  @media (max-width: 767px) {
    padding-left: 20px;
  }
`
const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
`
const NavigationColumn = styled.div`
  flex-grow: 1;
  width: 33%;
`

const NavigationRight = styled.ul`
  display: flex;
  align-items: right;
  justify-content: flex-end;
  list-style: none;
  padding-right: 1px;
  padding-top: 0px;
  margin: 0;
  font-size: 1.25em;
  @media (max-width: 767px) {
    padding-left: 20px;
  }
`

const NavigationItem = styled.a<ThemeProps>`
  font-family: 'Roboto', sans-serif;
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  text-decoration: none;
  font-size: 0.6em;
  font-weight: 100;
  transition: color 1s ease;
  margin-right: 38px;
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
  &:hover {
    color: #f24e11;
    transition: color 1s ease;
  }
`

const NavigationItemRight = styled.a<ThemeProps>`
  font-family: 'Roboto', sans-serif;
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  text-decoration: none;
  font-size: 0.6em;
  font-weight: 100;
  transition: color 1s ease;
  margin-right: 25px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  display: block;
  padding-top: 25px;
  width: 31px;
  height: 48px;
  &:hover {
    color: #f24e11;
    transition: color 1s ease;
  }
`

export default Header
