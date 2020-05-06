import { Link } from 'gatsby';
import React, { PureComponent } from 'react';
import {
  HeaderMenuType,
  HeaderProps,
  HeaderState,
  HeaderTheme
  } from './interface';
import styles from'./header.css'
import styled from '@emotion/styled'

const onVegetableClick = () => {
  console.log("hello")
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
  <nav role= "navigation" >
    <ul className={styles.navigation}>
      <li className={this.props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
        <a onClick={() => {this.onSeedsClick()}}>Plants</a>
      </li>
      <li className={this.props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
          <a onClick={() => { this.onArticlesClick() }}>Articles</a>
      </li>
      <li className={this.props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
          <a onClick={() => { this.onRecipesClick() }}>Recipes</a>
      </li>
    </ul>
  </nav>
  <div className={styles.logoContainer}>
    <div>
        <img className={styles.logoImage} src={'/logo.svg'} />
        <div className={styles.logoText}>Zephyr & Hare</div>
    </div>
    
  </div>
    <HeaderOuter className={["row", this.state.menuUp ? styles.menuUp : styles.menuDown].join(' ')}>
      
      <HeaderInner12 className={['col-12', this.state.menuType === HeaderMenuType.PLANTS ? 'menuShow' : 'menuHide'].join(' ')}>
        <Col3Full className="col-3">
          <div onClick={() => {this.onCloseClick()}} className={styles.headerClose}>X</div>
          <div className={styles.headerMainNav}>
            <ul>
              <li className={styles.headerNavHeader}>Plants</li>
              <li className={styles.headerNavItem}>Fruits</li>
              <li className={styles.headerNavItem}>Grains</li>
              <li className={styles.headerNavItem}>Herbs</li>
                <li className={styles.headerNavItem}>Vegetables</li>
            </ul>
          </div>
        </Col3Full>
          <DetailSection6 className="col-6">
            <div className={styles.columnns}>
              <div className={styles.headerDetailItem}>Artichokes</div>
              <div className={styles.headerDetailItem}>Beans</div>
              <div className={styles.headerDetailItem}>Field Peas</div>
              <div className={styles.headerDetailItem}>Broccoli</div>
              <div className={styles.headerDetailItem}>Cabbage</div>
              <div className={styles.headerDetailItem}>Carrots</div>
              <div className={styles.headerDetailItem}>Cucumbers</div>
              <div className={styles.headerDetailItem}>Green Beans</div>
              <div className={styles.headerDetailItem}>Hot Peppers</div>
              <div className={styles.headerDetailItem}>Lettuce</div>
              <div className={styles.headerDetailItem}>Okra</div>
              <div className={styles.headerDetailItem}>Peppers</div>
              <div className={styles.headerDetailItem}>Spinach</div>
              <div className={styles.headerDetailItem}>Squash</div>
              <div className={styles.headerDetailItem}>Tomato</div>
              <div className={styles.headerDetailItem}>Zucchini</div>
            </div>
          </DetailSection6>
        <DetailSection3 className="col-3">
          <img className={styles.headerNavDetail} src={'/okra_square.jpg'} />
          <p className={["dark-text", styles.headerNavDetail].join(' ')}>I’m baby etsy leggings cray biodiesel chartreuse raclette tote bag kickstarter shoreditch trust fund you probably haven’t heard of them copper mug aliquip disrupt eu.</p>
        </DetailSection3>
      </HeaderInner12>

      <HeaderInner3 className={["col-3", this.state.menuType === HeaderMenuType.ARTICLES ? styles.menuShow : styles.menuHide].join(' ')}>
        <Col12Full className="col-3">
          <div onClick={() => { this.onCloseClick() }} className={styles.headerClose}>X</div>
          <div className={[styles.headerMainNav, styles.paddingFor].join(' ')}>
            <div className={styles.headerNavHeader}>Articles</div>
            <div className="row">
              <div className="col-6">
                <div className={styles.headerDetailItem}>Soil</div>
                <div className={styles.headerDetailItem}>Planting</div>
                <div className={styles.headerDetailItem}>Gardening</div>
                <div className={styles.headerDetailItem}>Harvesting</div>
                <div className={styles.headerDetailItem}>Storage</div>
              </div>
            </div>
          </div>
        </Col12Full>
      </HeaderInner3>

      <HeaderInner4 className={["col-3", this.state.menuType === HeaderMenuType.RECIPES ? styles.menuShow : styles.menuHide].join(' ')}>
        <Col12Full className="col-12">
          <div onClick={() => { this.onCloseClick() }} className={styles.headerClose}>X</div>
          <div className={[styles.headerMainNav, styles.paddingFor].join(' ')}>
            <div className={styles.headerNavHeader}>Recipes</div>
            <div className="row">
              <div className="col-6">
                <div className={styles.headerDetailItem}>Breakfast</div>
                <div className={styles.headerDetailItem}>Brunch</div>
                <div className={styles.headerDetailItem}>Lunch</div>
                <div className={styles.headerDetailItem}>Supper</div>
              </div>
              <div className="col-6">
                <div className={styles.headerDetailItem}>Charcuterie</div>
                <div className={styles.headerDetailItem}>Baking</div>
                <div className={styles.headerDetailItem}>Pickling</div>
                <div className={styles.headerDetailItem}>Fermentation</div>
                <div className={styles.headerDetailItem}>Condiments</div>
              </div>
            </div>
          </div>
        </Col12Full>
      </HeaderInner4>
    </HeaderOuter>
  </div>)
  }
}

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

const HeaderInner3 = styled.div`
  width: 25%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
`

const HeaderInner4 = styled.div`
  width: 33%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
`

const HeaderInner12 = styled.div`
  width: 100%;
  padding: 0;
  background-color: #FFFFFF;
  height: 90vh;
  max-height: 520px;
`

const HeaderOuter = styled.div`
  position: relative;
  z-index: 99999;
`

export default Header
