import styled from '@emotion/styled';
import React, { PureComponent } from 'react';
import {
  HeaderMenuType,
  HeaderProps,
  HeaderState,
  HeaderTheme
  } from './interface';

interface menuProps {
  isUp: boolean
}

interface subMenuProps {
  isMenu: boolean
}

class Header extends PureComponent<HeaderProps, HeaderState> {

  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      menuUp: true,
      menuType: HeaderMenuType.PLANTS
    }
    this.onSeedsClick = this.onSeedsClick.bind(this)
    this.onArticlesClick = this.onArticlesClick.bind(this)
    this.onRecipesClick = this.onRecipesClick.bind(this)
    this.onCloseClick = this.onCloseClick.bind(this)
  }

  onSeedsClick() {
    this.setState(state => (
      {...state, menuUp: false, menuType: HeaderMenuType.PLANTS}
    ))
  }

  onArticlesClick() {
    this.setState(state => (
      { ...state, menuUp: false, menuType: HeaderMenuType.ARTICLES }
    ))
  }

  onRecipesClick() {
    this.setState(state => (
      { ...state, menuUp: false, menuType: HeaderMenuType.RECIPES }
    ))
  }

  onCloseClick() {
    this.setState(state =>(
      {...state, menuUp: true}
    ))
  }

  render() {
  return(<div>
  <nav role="navigation" >
    <Navigation>
      <li>
          <NavigationItem {... this.props.theme} onClick={() => { this.onSeedsClick() }}>Plants</NavigationItem>
      </li>
      <li>
          <NavigationItem {... this.props.theme} onClick={() => { this.onArticlesClick() }}>Articles</NavigationItem>
      </li>
      <li>
          <NavigationItem {... this.props.theme} onClick={() => { this.onRecipesClick() }}>Recipes</NavigationItem>
      </li>
    </Navigation>
  </nav>
  <LogoContainer>
    <div>
        <LogoImage src={'/logo.svg'} />
        <LogoText>Zephyr & Hare</LogoText>
    </div>
    
  </LogoContainer>
    <HeaderOuter {...{isUp: this.state.menuUp}} className="row">
      <HeaderInner12 {...{isMenu: this.state.menuType === HeaderMenuType.PLANTS}} className="col12">
        <Col3Full className="col3">
          <HeaderClose onClick={() => {this.onCloseClick()}}>X</HeaderClose>
          <HeaderMainNav>
            <ul>
              <HeaderNavHeaderLi>Plants</HeaderNavHeaderLi>
              <HeaderNavItem>Fruits</HeaderNavItem>
              <HeaderNavItem>Grains</HeaderNavItem>
              <HeaderNavItem>Herbs</HeaderNavItem>
              <HeaderNavItem>Vegetables</HeaderNavItem>
            </ul>
          </HeaderMainNav>
        </Col3Full>
          <DetailSection6 className="col6">
            <Columns>
              <HeaderDetailItem>Artichokes</HeaderDetailItem>
              <HeaderDetailItem>Beans</HeaderDetailItem>
              <HeaderDetailItem>Field Peas</HeaderDetailItem>
              <HeaderDetailItem>Broccoli</HeaderDetailItem>
              <HeaderDetailItem>Cabbage</HeaderDetailItem>
              <HeaderDetailItem>Carrots</HeaderDetailItem>
              <HeaderDetailItem>Cucumbers</HeaderDetailItem>
              <HeaderDetailItem>Green Beans</HeaderDetailItem>
              <HeaderDetailItem>Hot Peppers</HeaderDetailItem>
              <HeaderDetailItem>Lettuce</HeaderDetailItem>
              <HeaderDetailItem>Okra</HeaderDetailItem>
              <HeaderDetailItem>Peppers</HeaderDetailItem>
              <HeaderDetailItem>Spinach</HeaderDetailItem>
              <HeaderDetailItem>Squash</HeaderDetailItem>
              <HeaderDetailItem>Tomato</HeaderDetailItem>
              <HeaderDetailItem>Zucchini</HeaderDetailItem>
            </Columns>
          </DetailSection6>
        <DetailSection3 className="col3">
          <HeaderNavDetailImg src={'/okra_square.jpg'} />
          <HeaderNavDetailP className="darkText">I’m baby etsy leggings cray biodiesel chartreuse raclette tote bag kickstarter shoreditch trust fund you probably haven’t heard of them copper mug aliquip disrupt eu.</HeaderNavDetailP>
        </DetailSection3>
      </HeaderInner12>

      <HeaderInner3 {...{isMenu: this.state.menuType === HeaderMenuType.ARTICLES}} className="col3">
        <Col12Full className="col3">
          <HeaderClose onClick={() => { this.onCloseClick() }}>X</HeaderClose>
          <HeaderMainNav style={{paddingLeft: '70px'}}>
            <HeaderNavHeader>Articles</HeaderNavHeader>
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

      <HeaderInner4 {...{isMenu: this.state.menuType === HeaderMenuType.RECIPES}} className="col3">
        <Col12Full className="col12">
          <HeaderClose onClick={() => { this.onCloseClick() }}>X</HeaderClose>
          <HeaderMainNav style={{paddingLeft: '70px'}}>
            <HeaderNavHeader>Recipes</HeaderNavHeader>
            <div className="row">
              <div className="col6">
                <HeaderDetailItem>Breakfast</HeaderDetailItem>
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
  </div>)
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
font-size: 1.0em;
line-height: 2.5em;
list-style: none;
text-align: left;
transition: color 1.0s ease;
&:hover {
  color: #CCCCCC;
  transition: color 1.0s ease;
}
`

const HeaderNavItem = styled.li`
color: #464646;
cursor: pointer;
font-family: 'Nunito', sans-serif;
font-size: 1em;
list-style: none;
padding-bottom: 20px;
transition: color 1.0s ease;
&:hover {
  color: #CCCCCC;
  transition: color 1.0s ease;
}
`

const Columns = styled.div`
  margin-left: 10%;
  padding-top: 13%;
  width: 80%;
  height: 60%;
  column-count: 2;
`

const HeaderNavHeader = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.25em;
  font-style: italic;
  color: #CCCCCC;
  list-style: none;
  padding-bottom: 20px;
`

const HeaderNavHeaderLi = styled.li`
  font-family: 'Playfair Display', serif;
  font-size: 1.25em;
  font-style: italic;
  color: #CCCCCC;
  list-style: none;
  padding-bottom: 20px;
`

const HeaderClose = styled.div`
  position: relative;
  padding-top: 13.5%;
  padding-left: 13.9%;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5em;
  font-weight: 300;
  color: #CCC;
`

const HeaderMainNav = styled.div`
  padding: 30px 30px 30px;
`

const Col3Full = styled.div`
  width: 25%;
  padding: 0;
`

const Col4Full = styled.div`
  width: 33%;
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
  width: 100%;
  position: fixed;
  text-align: center;
  z-index: 999;
`

const LogoImage = styled.img`
  display: inline-block;
  margin-top: 90px;
  width: 75px;
`

const LogoText = styled.div`
  color: #FFFFFF;
  font-size: 1.25em;
  letter-spacing: -.5px;
`

const DetailSection6 = styled.div`
  border-left: solid #464646 0.5px;
  min-height: 100%;
  position: relative;
  width: 50%;
  padding: 0;
`

const DetailSection3 = styled.div`
  border-left: solid #464646 0.5px;
  min-height: 100%;
  position: relative;
  width: 25%;
  padding: 0;
`

const HeaderInner3 = styled.div<subMenuProps>`
  display: ${props => 
    props.isMenu ? 'block' : 'none'}
  width: 25%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
`

const HeaderInner4 = styled.div<subMenuProps>`
  display: ${props => 
    props.isMenu ? 'block' : 'none'}
  width: 33%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
`

const HeaderInner12 = styled.div<subMenuProps>`
  display: ${props => 
    props.isMenu ? 'block' : 'none'}
  width: 100%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
`

const HeaderOuter = styled.div<menuProps>`
  position: relative;
  z-index: 99999;
  transition: all .5s cubic-bezier(.77,0,.175,1);
  transform: ${props =>
  props.isUp ? 'translateY(-100%)' : 'translateY(0%)'};
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

const NavigationItem = styled.a<string>`
  font-family: 'Nunito', sans-serif;
  color: ${(props: string) => {
    console.log(props)
    return (props === HeaderTheme.LIGHT ? '#FFFFFF' : '#464646')}};
  text-decoration: none;
  text-transform: uppercase;
  font-size: .6em;
  font-weight: 600;
  transition: color 1.0s ease;
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
    transition: color 1.0s ease;
  }
`

export default Header
