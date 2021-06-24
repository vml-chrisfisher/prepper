import styled from '@emotion/styled'
import React, { PureComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { onFetchProfile } from '../../store/ducks/profile/actions'
import { onTryFetchRecipesBox } from '../../store/ducks/recipesBox/actions'
import { SIDEBAR_ANIMATION_STEPS } from '../../store/ducks/sidebar/animations/types'
import { HeaderMenuType, HeaderProps, HeaderState, ProductCategory, ProductFamily } from './interface'
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

  useEffect(() => {
    dispatch(fetch())
    const knifeAndFishLocalStorage = localStorage.getItem('knifeAndFish')
    if (knifeAndFishLocalStorage) {
      const json = JSON.parse(knifeAndFishLocalStorage)
      const userId = json.userId
      dispatch(onTryFetchRecipesBox({ userId: userId }))
    }
  })

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
      return props.theme === 'white' ? '#FFFFFF' : '#464646'
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
      return props.theme === 'white' ? '#FFFFFF' : '#464646'
    }};
    height: 20px;
    margin-right: 25px;
    margin-top: 20px;
    stroke: ${props => {
      return props.theme === 'white' ? '#FFFFFF' : '#464646'
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

  const themeValue = props.theme
  const showHeaderProfile = props.showHeaderProfile
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
                    onRecipesClick()
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
                <NavigationItemRight href="/story" theme={themeValue}>
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
                <SVGLink
                  onClick={(event: React.MouseEvent) => {
                    onProfileClick(event)
                  }}
                >
                  <NavigationItemProfileIcon theme={themeValue}>
                    <rect
                      x="8"
                      y="16.8"
                      transform="matrix(1.396295e-03 -1 1 1.396295e-03 -9.6291 25.7124)"
                      width="0.1"
                      height="1.8"
                    />
                    <path
                      d="M16,4c0-0.6-0.2-1.2-0.6-1.8c-0.3-0.4-0.7-0.7-1.1-1c-0.4-0.3-0.9-0.5-1.4-0.6c-1.1-0.3-2.1-0.2-2.9,0.4
	C9.8,0.8,9.6,0.6,9.4,0.5C8.9,0.2,8.4,0,7.8,0C7,0,6.3,0.1,5.6,0.4C5.3,0.6,5,0.7,4.8,1C3.7,1,2.7,1.2,1.9,1.7
	c-0.7,0.4-1.2,1-1.6,1.7C0.1,4,0,4.7,0,5.3c0,0.3,0.1,0.6,0.2,0.9c0.1,0.3,0.3,0.5,0.4,0.8C1,7.3,1.3,7.6,1.8,7.7
	C2,7.8,2.3,7.8,2.5,7.8c0.2,0,0.5,0,0.7-0.1c-0.2,0.7-0.4,1.3-0.6,2c-0.2,0.5-0.1,1.1,0.3,1.6l0,0c0,0.1,0.1,0.1,0.2,0.1h0
	c0,0,0,0,0,0l0,0.6H3c-0.3,0-0.5,0.2-0.7,0.5c-0.1,0.3-0.1,0.8,0,1.2c0.1,0.5,0.3,0.8,0.6,1c0.1,0.1,0.2,0.1,0.3,0.1
	c0,0,0.1,0,0.1,0c0.3,1.6,0.9,2.9,1.8,3.9c0.4,0.4,0.9,0.8,1.4,1C7,19.9,7.5,20,8.1,20s1-0.1,1.5-0.3c0.5-0.2,1-0.6,1.4-1
	c0.9-0.9,1.5-2.3,1.8-3.9c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.4-0.6,0.6-1c0.1-0.5,0.2-0.9,0-1.2
	c-0.1-0.3-0.3-0.5-0.7-0.5h-0.2l0-0.6c0,0,0,0,0,0h0c0.1,0,0.1,0,0.2-0.1l0,0c0.4-0.4,0.5-1,0.3-1.6c-0.2-0.6-0.4-1.2-0.5-1.8
	c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0,0.5-0.1c0.5-0.1,0.9-0.4,1.3-0.8c0.3-0.3,0.5-0.7,0.5-1
	c0-0.4-0.1-0.7-0.3-1c0.1-0.1,0.1-0.2,0.2-0.3C15.9,4.6,16,4.3,16,4z M3,14.6c-0.4-0.4-0.8-1.5-0.6-2.1c0.1-0.3,0.3-0.4,0.6-0.4h0.2
	l0,0.4c0,0.8,0.1,1.5,0.2,2.2C3.3,14.8,3.1,14.7,3,14.6z M13.2,12.1L13.2,12.1c0.3,0,0.5,0.1,0.6,0.4c0.2,0.6-0.2,1.8-0.6,2.1
	c-0.1,0.1-0.3,0.1-0.4,0.1c0.1-0.7,0.2-1.4,0.2-2.2l0-0.4L13.2,12.1z M12.8,12.5c0,0.8-0.1,1.5-0.2,2.2c-0.5,3.1-2.3,5.2-4.6,5.2
	s-4-2-4.6-5.2c-0.1-0.7-0.2-1.4-0.2-2.2l0-1.2c0,0,0,0,0.1,0c0.2-0.3,0.8-0.5,1.7-0.6c0.8-0.1,1.9-0.2,3-0.2s2.1,0.1,3,0.2
	c0.9,0.2,1.5,0.4,1.7,0.6c0,0,0,0,0.1,0.1L12.8,12.5z M13.1,11.2L13.1,11.2c0,0-0.1,0.1-0.1,0.1h0c0,0-0.1,0-0.1-0.1
	c-0.1-0.1-0.3-0.3-0.7-0.4c-0.3-0.1-0.7-0.2-1.1-0.3c-0.8-0.1-1.9-0.2-3-0.2s-2.2,0.1-3,0.2c-0.4,0.1-0.8,0.2-1.1,0.3
	c-0.3,0.1-0.5,0.2-0.7,0.4c0,0-0.1,0.1-0.1,0.1h0c0,0-0.1,0-0.1-0.1l0,0c-0.4-0.4-0.5-1-0.3-1.5C3,9.1,3.2,8.4,3.4,7.7
	c0.2-0.8,0.2-1.5,0.2-2.2c0,0,0,0,0,0c0.1,0,0.2,0,0.2,0C4.4,5.4,5,5.1,5.4,4.6c0.3,0.2,0.6,0.4,1,0.5c0.3,0.1,0.7,0.1,1.1,0.1
	c0.3,0,0.6,0,0.9-0.1C9,5.1,9.6,4.8,10,4.5c0.1-0.1,0.2-0.2,0.3-0.3c0.4,0.6,0.9,1.1,1.6,1.2c0.2,0,0.4,0.1,0.6,0.1
	c0,0.7,0,1.4,0.2,2.2c0.2,0.7,0.4,1.3,0.6,1.9C13.5,10.2,13.4,10.8,13.1,11.2L13.1,11.2z M15.4,7.1c-0.3,0.4-0.8,0.7-1.2,0.8
	c-0.3,0.1-0.9,0.2-1.3-0.2c-0.2-0.8-0.3-1.5-0.2-2.1c0.5,0,1-0.2,1.5-0.4l0-0.1c-1.5,0.8-2.9,0.5-3.7-0.9c0.2-0.2,0.4-0.5,0.5-0.8
	l-0.1,0c-0.1,0.4-0.4,0.8-0.9,1.1C9.5,4.7,9,5,8.4,5.1c-1.1,0.2-2.6,0-3.3-1L5,4.1c0.1,0.2,0.2,0.3,0.4,0.4c-1,1-2.1,1.1-3.3,0.3
	L2,4.9c0.5,0.3,1,0.5,1.5,0.6c0.1,0.7,0,1.4-0.2,2.2c-1,0.3-1.9,0-2.5-0.7C0,6-0.1,4.6,0.4,3.4C1.1,2,2.7,1.1,4.7,1.1
	C4.4,1.3,4.2,1.6,4,1.9l0.1,0C4.8,0.6,6.5,0,7.7,0.1C9,0.2,10,0.8,10.4,1.7l0.1,0C10.3,1.5,10.2,1.2,10,1c1.7-1.1,4.1-0.3,5.3,1.2
	c0.9,1.2,0.8,2.5-0.3,3.5L15,5.8c0.2-0.2,0.4-0.4,0.5-0.6C16.1,5.8,15.8,6.6,15.4,7.1L15.4,7.1z"
                    />
                  </NavigationItemProfileIcon>
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
                  <a href="/plants">Plants</a>
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
                  <HeaderDetailItem
                    key={`header-detail-item-${index}`}
                    onMouseOver={() => {
                      dispatch(onCategorySelected(category.productId))
                    }}
                    onMouseOut={() => {
                      dispatch(onCategorySelected())
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

export default Header
