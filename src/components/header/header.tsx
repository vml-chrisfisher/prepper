import styled from '@emotion/styled'
import { Link, navigate } from 'gatsby'
import React, { PureComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onLoginSuccess, onRelogin } from '../../store/ducks/login/actions'
import { onFetchProfile } from '../../store/ducks/profile/actions'
import { getAccessToken, getUserId } from '../../store/ducks/profile/selectors'
import { onTryFetchRecipesBox } from '../../store/ducks/recipesBox/actions'
import { SIDEBAR_ANIMATION_STEPS } from '../../store/ducks/sidebar/animations/types'
import { HeaderMenuType, HeaderProps, HeaderState, ProductCategory, ProductFamily } from './interface'
import HeaderNoticationContainer from './notifications'
import ProfileIcon from './profileIcon'
import SearchContainer from './search/container'
import {
  fetch,
  onCategorySelected,
  onFamilySelected,
  onShowHeaderProfile,
  onShowSearch,
} from '../../store/ducks/header/actions'

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

const Header = (props: HeaderProps) => {
  const scrollTimeout = 0

  const dispatch = useDispatch()

  const [menuUp, setMenuUp] = useState(true)
  const [menuType, setMenuType] = useState(HeaderMenuType.PLANTS)

  const userId = useSelector(getUserId)
  const accessToken = useSelector(getAccessToken)

  useEffect(() => {
    if (userId && accessToken) {
      dispatch(onTryFetchRecipesBox(userId))
      dispatch(onRelogin({ userId: userId, accessToken: accessToken }))
    }
  }, [userId, accessToken])

  const onSeedsClick = () => {
    setMenuUp(false)
    setMenuType(HeaderMenuType.PLANTS)
  }

  const onArticlesClick = () => {
    setMenuUp(false)
    setMenuType(HeaderMenuType.ARTICLES)
  }

  const onRecipesClick = () => {
    setMenuUp(false)
    setMenuType(HeaderMenuType.RECIPES)
  }

  const onCloseClick = () => {
    setMenuUp(true)
  }

  const onSearchClick = (event: React.MouseEvent) => {
    event.preventDefault()
    dispatch(onShowSearch())
  }

  const onProfileClick = (event: React.MouseEvent) => {
    event.preventDefault()
    if (window) {
      requestAnimationFrame(() => {
        const videoBackground: HTMLVideoElement | null = document.getElementById('videoBackground') as HTMLVideoElement
        if (videoBackground) {
          videoBackground.pause()
        }
        setTimeout(() => {
          dispatch(onShowHeaderProfile())
        }, 500)
      })
    }
  }

  // useEffect(() => {
  //   dispatch(fetch())
  //   const knifeAndFishLocalStorage = localStorage.getItem('knifeAndFish')
  //   if (knifeAndFishLocalStorage) {
  //     const json = JSON.parse(knifeAndFishLocalStorage)
  //     const userId = json.userId
  //     dispatch(onTryFetchRecipesBox({ userId: userId }))
  //   }
  // })

  const NavigationHeader = styled.nav<MainContainerPositionProps>`
    background: transparent;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: ${props => {
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.DEFAULT || props.showProfile === SIDEBAR_ANIMATION_STEPS.HIDE) {
        return '0px'
      }
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.PROFILE_CREATION) {
        return '-100vw'
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

  const HeaderDetailItem = styled(props => <Link {...props} />)`
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

  const HeaderDetailItemFunction = styled(props => <span {...props} />)`
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

  const LogoLink = styled(props => <Link {...props} />)`
    text-decoration: none;
  `

  const SVGLink = styled(props => <span {...props} />)`
    width: 20px;
    height: 20px;
  `

  const LogoImage = styled.img`
    display: inline-block;
    width: 92px;
    @media (max-width: 767px) {
      padding-right: 20px;
    }
  `

  const NavigationItemIcon = styled.svg<ThemeProps>`
    cursor: pointer;
    display: inline-block;
    fill: ${props => {
      return props.theme === 'white' ? '#464646' : '#FFFFFF'
    }};
    height: 20px;
    margin-right: 25px;
    margin-top: 20px;
    width: 20px;
    &:hover {
      fill: #f24e11;
      transition: fill 1s ease;
    }
  `

  const NavigationItemProfileIcon = styled.svg<ThemeProps>`
    cursor: pointer;
    display: inline-block;
    fill: ${props => {
      return props.theme === 'white' ? '#464646' : '#FFFFFF'
    }};
    height: 20px;
    margin-right: 25px;
    margin-top: 20px;
    stroke: ${props => {
      return props.theme === 'white' ? '#464646' : '#FFFFFF'
    }};
    stroke-width: 0.5;
    stroke-miterlimit: 10;
    width: 20px;
    &:hover {
      fill: #f24e11;
      stroke: #f24e11;
      transition: fill 1s ease;
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
  const NavigationContainer = styled.div<ThemeProps>`
    display: flex;
    width: 100%;
    background-color: ${props => {
      return props.theme === 'white' ? '#FFFFFF' : 'transparent'
    }};
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

  const NavigationItem = styled(props => <Link {...props} />)<ThemeProps>`
    font-family: 'Roboto', sans-serif;
    color: ${props => {
      return props.theme === 'white' ? '#464646' : '#FFFFFF'
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

  const NavigationItemFunctionLink = styled(props => <div {...props} />)<ThemeProps>`
    font-family: 'Roboto', sans-serif;
    color: ${props => {
      return props.theme === 'white' ? '#464646' : '#FFFFFF'
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

  const NavigationItemRight = styled(props => <Link {...props} />)<ThemeProps>`
    font-family: 'Roboto', sans-serif;
    color: ${props => {
      return props.theme === 'white' ? '#464646' : '#FFFFFF'
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

  const MobileNavigation = styled.ul`
    display: flex;
    justify-content: left;
    list-style: none;
    padding-left: 20px;
    padding-top: 0px;
    margin: 0;
    font-size: 1.25em;
  `

  const MobileNavigationItem = styled(props => <Link {...props} />)`
    font-family: 'Roboto', sans-serif;
    color: #464646;
    text-decoration: none;
    font-size: 0.6em;
    font-weight: 100;
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
  `

  const MobileLogoContainer = styled.div`
    background-color: #fff;
    position: fixed;
    text-align: right;
    padding-right: 20px;
    width: 100%;
    z-index: 999;
  `

  const MobileLogoLink = styled(props => <Link {...props} />)`
    text-decoration: none;
  `

  const MobileLogoImage = styled(props => <amp-img {...props} />)`
    display: inline-block;
    padding-right: 20px;
    width: 100px;
  `

  const themeValue = props.theme
  const showHeaderProfile = props.showHeaderProfile

  return (
    <>
      <header className="hidden-sm">
        <NavigationHeader role="navigation" showProfile={showHeaderProfile}>
          <NavigationContainer theme={themeValue}>
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
                  <NavigationItemFunctionLink
                    theme={themeValue}
                    onClick={() => {
                      onRecipesClick()
                    }}
                  >
                    Recipes
                  </NavigationItemFunctionLink>
                </li>
                <li>
                  <NavigationItem theme={themeValue} to="/articles">
                    Articles
                  </NavigationItem>
                </li>
                <li>
                  <NavigationItem theme={themeValue} to="/shop">
                    Shop
                  </NavigationItem>
                </li>
              </Navigation>
            </NavigationColumn>
            <NavigationColumn>
              <LogoContainer>
                <div>
                  <LogoLink to="/">
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
                  <NavigationItemRight to="/story" theme={themeValue}>
                    About
                  </NavigationItemRight>
                </li>
                <li>
                  <SVGLink
                    onClick={(event: React.MouseEvent) => {
                      onSearchClick(event)
                    }}
                  >
                    <NavigationItemIcon theme={themeValue}>
                      <path
                        d="M16.3,13.8c-0.3-0.3-0.8-0.5-1.3-0.5c-0.3,0-0.7,0.1-1,0.3l-1.7-1.7c1.2-1.3,1.8-3,1.8-4.8
	c0-1.9-0.7-3.7-2.1-5C10.8,0.7,9,0,7.1,0C3.2,0,0,3.2,0,7.1c0,1.9,0.7,3.7,2.1,5c2.7,2.7,7,2.8,9.8,0.2l1.7,1.7
	c-0.4,0.7-0.4,1.6,0.2,2.2l3.2,3.2c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5c0.7-0.7,0.7-1.8,0-2.5c0,0,0,0,0,0L16.3,13.8z
	 M2.6,11.6c-2.5-2.5-2.5-6.5,0-9s6.5-2.5,9,0s2.5,6.5,0,9c-1.2,1.2-2.8,1.9-4.5,1.9C5.4,13.5,3.8,12.8,2.6,11.6L2.6,11.6z M19,19
	c-0.4,0.4-1.1,0.4-1.5,0l-3.2-3.2c-0.4-0.4-0.4-1.1,0-1.5c0.2-0.2,0.5-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3l3.2,3.2
	C19.3,17.9,19.3,18.5,19,19L19,19z"
                      />
                    </NavigationItemIcon>
                  </SVGLink>
                </li>
                <li>
                  <SVGLink>
                    <ProfileIcon onClick={onProfileClick} theme={themeValue} />
                  </SVGLink>
                </li>
              </NavigationRight>
            </NavigationColumn>
          </NavigationContainer>
        </NavigationHeader>
        <HeaderOuter {...{ isUp: menuUp }} className="row">
          <HeaderInner12 {...{ isMenu: menuType === HeaderMenuType.PLANTS }} className="col12">
            <Col3Full className="col3">
              <HeaderClose
                onClick={() => {
                  onCloseClick()
                }}
              >
                X
              </HeaderClose>
              <HeaderMainNav>
                <ul>
                  <HeaderNavHeaderLi>
                    <Link to="/plants">Plants</Link>
                  </HeaderNavHeaderLi>
                  {props.data?.map((top: ProductFamily, index: number) => {
                    return (
                      <HeaderNavItem
                        key={`header-nav-item-${index}`}
                        onClick={() => {
                          dispatch(onFamilySelected(top.productId))
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
                {props.categories?.map((category: ProductCategory, index: number) => {
                  return (
                    <HeaderDetailItemFunction
                      key={`header-detail-item-${index}`}
                      onMouseOver={() => {
                        dispatch(onCategorySelected(category.productId))
                      }}
                      onMouseOut={() => {
                        dispatch(onCategorySelected())
                      }}
                      onClick={() => {
                        const link = `/plants/${category.name.toLowerCase().replace(' ', '+')}`
                        navigate(link)
                      }}
                    >
                      {category.name}
                    </HeaderDetailItemFunction>
                  )
                })}
              </Columns>
            </DetailSection6>
            <DetailSection23 className="col3">
              {props.categoryDetail?.imagePath && (
                <HeaderNavDetailImg src={props.categoryDetail.imagePath} alt={props.categoryDetail.copy} />
              )}
              {props.categoryDetail?.copy && (
                <HeaderNavDetailP className="darkText">{props.categoryDetail.copy}</HeaderNavDetailP>
              )}
            </DetailSection23>
          </HeaderInner12>

          <HeaderInner3 {...{ isMenu: menuType === HeaderMenuType.ARTICLES }} className="col3">
            <Col12Full className="col3">
              <HeaderClose
                onClick={() => {
                  onCloseClick()
                }}
              >
                X
              </HeaderClose>
              <HeaderMainNav style={{ paddingLeft: '70px' }}>
                <HeaderNavHeader>
                  <Link to="/articles">Articles</Link>
                </HeaderNavHeader>
                <div className="row">
                  <div className="col6">
                    <HeaderDetailItem to="/articles/soil">Soil</HeaderDetailItem>
                    <HeaderDetailItem to="/articles/planting">Planting</HeaderDetailItem>
                    <HeaderDetailItem to="/articles/gardening">Gardening</HeaderDetailItem>
                    <HeaderDetailItem to="/articles/harvesting">Harvesting</HeaderDetailItem>
                    <HeaderDetailItem to="/articles/storage">Storage</HeaderDetailItem>
                  </div>
                </div>
              </HeaderMainNav>
            </Col12Full>
          </HeaderInner3>

          <HeaderInner4 {...{ isMenu: menuType === HeaderMenuType.RECIPES }} className="col3">
            <Col12Full className="col12">
              <HeaderClose
                onClick={() => {
                  onCloseClick()
                }}
              >
                X
              </HeaderClose>
              <HeaderMainNav style={{ paddingLeft: '70px' }}>
                <HeaderNavHeader>
                  <Link to="/recipes">Recipes</Link>
                </HeaderNavHeader>
                <div className="row">
                  <Col6Full className="col6">
                    <HeaderDetailItem style={{ color: '#C5724B', fontWeight: 'bold' }} to="/recipes">
                      All
                    </HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/appetizer">Appetizer</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/condiment">Condiment</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/dessert">Dessert</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/drink">Drink</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/main">Main</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/side">Side</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/snack">Snack</HeaderDetailItem>
                  </Col6Full>
                  {/* <Col6Full className="col6">
                    <HeaderDetailItem to="/recipes/breakfast">Charcuterie</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/breakfast">Baking</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/breakfast">Pickling</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/breakfast">Fermentation</HeaderDetailItem>
                    <HeaderDetailItem to="/recipes/breakfast">Condiments</HeaderDetailItem>
                  </Col6Full> */}
                </div>
              </HeaderMainNav>
            </Col12Full>
          </HeaderInner4>
        </HeaderOuter>
        <SearchContainer></SearchContainer>
        <HeaderNoticationContainer></HeaderNoticationContainer>
      </header>
      <header className="hidden-lg">
        <nav role="navigation">
          <MobileNavigation>
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
              <MobileNavigationItem to="/recipes">Recipes</MobileNavigationItem>
            </li>
            <li>
              <MobileNavigationItem to="/articles">Articles</MobileNavigationItem>
            </li>
          </MobileNavigation>
        </nav>
        <MobileLogoContainer>
          <div>
            <MobileLogoLink to="/">
              <MobileLogoImage
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
              </MobileLogoImage>
            </MobileLogoLink>
          </div>
        </MobileLogoContainer>
      </header>
    </>
  )
}

export default Header
