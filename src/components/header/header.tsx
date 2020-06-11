import styled from '@emotion/styled'
import React, { PureComponent } from 'react'
import { HeaderMenuType, HeaderProps, HeaderState, ProductCategory, ProductFamily } from './interface'

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

  componentDidMount = () => {
    if (this.props.onFetch) {
      this.props.onFetch()
    }
  }

  render() {
    const themeValue = this.props.theme
    const menuUp = this.state.menuUp
    return (
      <header>
        <nav role="navigation">
          <Navigation>
            <li>
              <NavigationItem
                theme={themeValue}
                onClick={() => {
                  this.onSeedsClick()
                }}
              >
                Plants
              </NavigationItem>
            </li>
            <li>
              <NavigationItem
                theme={themeValue}
                onClick={() => {
                  this.onArticlesClick()
                }}
              >
                Articles
              </NavigationItem>
            </li>
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
          </Navigation>
        </nav>
        <LogoContainer>
          <div>
            <LogoLink href="/">
              <LogoImage
                alt="Zephyr and Hare Logo"
                src={
                  '//images.ctfassets.net/ce6fbxhy1t51/4rf552O0YO79rkWIvVg00Y/6e8e7d8c597c0ec295d1ca2570783bdd/logo.svg'
                }
              />
              <LogoText theme={themeValue}>Zephyr & Hare</LogoText>
            </LogoLink>
          </div>
        </LogoContainer>
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
              {this.props.categoryDetail?.imagePath && <HeaderNavDetailImg src={this.props.categoryDetail.imagePath} />}
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
                  <div className="col6">
                    <HeaderDetailItem href="/recipes/breakfast">Breakfast</HeaderDetailItem>
                    <HeaderDetailItem>Brunch</HeaderDetailItem>
                    <HeaderDetailItem>Lunch</HeaderDetailItem>
                    <HeaderDetailItem>Supper</HeaderDetailItem>
                  </div>
                  <div className="col6">
                    <HeaderDetailItem>Charcuterie</HeaderDetailItem>
                    <HeaderDetailItem>Baking</HeaderDetailItem>
                    <HeaderDetailItem>Pickling</HeaderDetailItem>
                    <HeaderDetailItem>Fermentation</HeaderDetailItem>
                    <HeaderDetailItem>Condiments</HeaderDetailItem>
                  </div>
                </div>
              </HeaderMainNav>
            </Col12Full>
          </HeaderInner4>
        </HeaderOuter>
      </header>
    )
  }
}

const HeaderNavDetailImg = styled.img`
  width: 80%;
  margin-left: 10%;
`

const HeaderNavDetailP = styled.p`
  width: 80%;
  margin-left: 10%;
`

const HeaderDetailItem = styled.div`
  color: #464646;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  line-height: 2.5em;
  list-style: none;
  text-align: left;
  transition: color 1s ease;
  &:hover {
    color: #cccccc;
    transition: color 1s ease;
  }
`

const HeaderNavItem = styled.li`
  color: #464646;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
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
  font-family: 'Nunito', sans-serif;
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

const Col12Full = styled.div`
  width: 100%;
  padding: 0;
`

const LogoContainer = styled.div`
  width: 100%;
  position: fixed;
  text-align: center;
  z-index: 999;
`

const LogoLink = styled.a`
  text-decoration: none;
`

const LogoImage = styled.img`
  display: inline-block;
  margin-top: 15px;
  width: 75px;
`

const LogoText = styled.div<ThemeProps>`
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  font-size: 1.25em;
  letter-spacing: -0.5px;
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
`

const HeaderInner4 = styled.div<SubMenuProps>`
  display: ${props => (props.isMenu ? 'block;' : 'none;')}
  width: 33%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
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
  padding: 80px;
  margin: 0;
  height: 20vh;
  max-height: 100px;
  font-size: 1.25em;
`

const NavigationItem = styled.a<ThemeProps>`
  font-family: 'Nunito', sans-serif;
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
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
  &:hover {
    color: #999999;
    transition: color 1s ease;
  }
`

export default Header
