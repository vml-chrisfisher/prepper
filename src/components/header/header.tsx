import { Link } from 'gatsby';
import React, { PureComponent } from 'react';
import baseStyles from '../base.css';
import {
  HeaderMenuType,
  HeaderProps,
  HeaderState,
  HeaderTheme
  } from './interface';
import styles from'./header.css'

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
    <div className={[styles.headerOuter, baseStyles.row, this.state.menuUp ? styles.menuUp : styles.menuDown].join(' ')}>
      
      <div className={[baseStyles.col12, styles.col12Full, styles.headerInner, this.state.menuType === HeaderMenuType.PLANTS ? styles.menuShow : styles.menuHide].join(' ')}>
        <div className={[baseStyles.col3, styles.col3Full].join(' ')}>
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
        </div>
          <div className={[baseStyles.col6, styles.col6Full, styles.detailSection].join(' ')}>
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
          </div>
        <div className={[baseStyles.col3, styles.col3Full, styles.detailSection].join(' ')}>
          <img className={styles.headerNavDetail} src={'/okra_square.jpg'} />
          <p className={[baseStyles.darkText, styles.headerNavDetail].join(' ')}>I’m baby etsy leggings cray biodiesel chartreuse raclette tote bag kickstarter shoreditch trust fund you probably haven’t heard of them copper mug aliquip disrupt eu.</p>
        </div>
      </div>

      <div className={[baseStyles.col3, styles.col3Full, styles.headerInner, this.state.menuType === HeaderMenuType.ARTICLES ? styles.menuShow : styles.menuHide].join(' ')}>
        <div className={[baseStyles.col3, styles.col12Full].join(' ')}>
          <div onClick={() => { this.onCloseClick() }} className={styles.headerClose}>X</div>
          <div className={[styles.headerMainNav, styles.paddingFor].join(' ')}>
            <div className={styles.headerNavHeader}>Articles</div>
            <div className={baseStyles.row}>
              <div className={baseStyles.col6}>
                <div className={styles.headerDetailItem}>Soil</div>
                <div className={styles.headerDetailItem}>Planting</div>
                <div className={styles.headerDetailItem}>Gardening</div>
                <div className={styles.headerDetailItem}>Harvesting</div>
                <div className={styles.headerDetailItem}>Storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={[baseStyles.col3, styles.col4Full, styles.headerInner, this.state.menuType === HeaderMenuType.RECIPES ? styles.menuShow : styles.menuHide].join(' ')}>
        <div className={[baseStyles.col12, styles.col12Full].join(' ')}>
          <div onClick={() => { this.onCloseClick() }} className={styles.headerClose}>X</div>
          <div className={[styles.headerMainNav, styles.paddingFor].join(' ')}>
            <div className={styles.headerNavHeader}>Recipes</div>
            <div className={baseStyles.row}>
              <div className={baseStyles.col6}>
                <div className={styles.headerDetailItem}>Breakfast</div>
                <div className={styles.headerDetailItem}>Brunch</div>
                <div className={styles.headerDetailItem}>Lunch</div>
                <div className={styles.headerDetailItem}>Supper</div>
              </div>
              <div className={baseStyles.col6}>
                <div className={styles.headerDetailItem}>Charcuterie</div>
                <div className={styles.headerDetailItem}>Baking</div>
                <div className={styles.headerDetailItem}>Pickling</div>
                <div className={styles.headerDetailItem}>Fermentation</div>
                <div className={styles.headerDetailItem}>Condiments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
  }
}

export default Header
