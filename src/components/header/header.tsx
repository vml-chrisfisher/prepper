import { Link } from 'gatsby';
import React, { PureComponent } from 'react';
import * as baseStyles from '../base.module.css';
import { HeaderProps, HeaderTheme, HeaderState, HeaderMenuType } from './interface';
import * as styles from'./header.module.css'

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
      <Link to="/" > <img className={styles.logoImage} src={'/logo.svg'} /> </Link>
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
            <ul className={styles.columnns}>
              <li className={styles.headerDetailItem}>Artichokes</li>
              <li className={styles.headerDetailItem}>Beans</li>
              <li className={styles.headerDetailItem}>Field Peas</li>
              <li className={styles.headerDetailItem}>Broccoli</li>
              <li className={styles.headerDetailItem}>Cabbage</li>
              <li className={styles.headerDetailItem}>Carrots</li>
              <li className={styles.headerDetailItem}>Cucumbers</li>
              <li className={styles.headerDetailItem}>Green Beans</li>
              <li className={styles.headerDetailItem}>Hot Peppers</li>
            </ul>
            <ul className={styles.columnns}>
              <li className={styles.headerDetailItem}>Lettuce</li>
              <li className={styles.headerDetailItem}>Peppers</li>
              <li className={styles.headerDetailItem}>Spinach</li>
              <li className={styles.headerDetailItem}>Squash</li>
              <li className={styles.headerDetailItem}>Tomato</li>
              <li className={styles.headerDetailItem}>Zucchini</li>
            </ul>
          </div>
        <div className={[baseStyles.col3, styles.col3Full, styles.detailSection].join(' ')}>
          <img className={styles.headerNavDetail} src={'/okra_square.jpg'} />
          <p className={[baseStyles.darkText, styles.headerNavDetail].join(' ')}>I’m baby etsy leggings cray biodiesel chartreuse raclette tote bag kickstarter shoreditch trust fund you probably haven’t heard of them copper mug aliquip disrupt eu. Portland raw denim flannel godard. +1 organic umami occaecat vaporware, shabby chic fugiat YOLO mixtape  vape nulla quinoa  Kombucha jean shorts 90’s cold-pressed.</p>
        </div>
      </div>

      <div className={[baseStyles.col12, styles.col12Full, styles.headerInner, this.state.menuType === HeaderMenuType.ARTICLES ? styles.menuShow : styles.menuHide].join(' ')}>
        <div className={[baseStyles.col3, styles.col3Full].join(' ')}>
          <div onClick={() => { this.onCloseClick() }} className={styles.headerClose}>X</div>
          <div className={styles.headerMainNav}>
            <ul>
              <li className={styles.headerNavHeader}>Articles</li>
              <li className={styles.headerNavItem}>Fruits</li>
              <li className={styles.headerNavItem}>Grains</li>
              <li className={styles.headerNavItem}>Herbs</li>
              <li className={styles.headerNavItem}>Vegetables</li>
            </ul>
          </div>
        </div>
        <div className={[baseStyles.col6, styles.col6Full, styles.detailSection].join(' ')}>
          <ul className={styles.columnns}>
            <li className={styles.headerDetailItem}>Artichokes</li>
            <li className={styles.headerDetailItem}>Beans</li>
            <li className={styles.headerDetailItem}>Field Peas</li>
            <li className={styles.headerDetailItem}>Broccoli</li>
            <li className={styles.headerDetailItem}>Cabbage</li>
            <li className={styles.headerDetailItem}>Carrots</li>
            <li className={styles.headerDetailItem}>Cucumbers</li>
            <li className={styles.headerDetailItem}>Green Beans</li>
            <li className={styles.headerDetailItem}>Hot Peppers</li>
          </ul>
          <ul className={styles.columnns}>
            <li className={styles.headerDetailItem}>Lettuce</li>
            <li className={styles.headerDetailItem}>Peppers</li>
            <li className={styles.headerDetailItem}>Spinach</li>
            <li className={styles.headerDetailItem}>Squash</li>
            <li className={styles.headerDetailItem}>Tomato</li>
            <li className={styles.headerDetailItem}>Zucchini</li>
          </ul>
        </div>
        <div className={[baseStyles.col3, styles.col3Full, styles.detailSection].join(' ')}>
          <img className={styles.headerNavDetail} src={'/okra_square.jpg'} />
          <p className={[baseStyles.darkText, styles.headerNavDetail].join(' ')}>I’m baby etsy leggings cray biodiesel chartreuse raclette tote bag kickstarter shoreditch trust fund you probably haven’t heard of them copper mug aliquip disrupt eu. Portland raw denim flannel godard. +1 organic umami occaecat vaporware, shabby chic fugiat YOLO mixtape  vape nulla quinoa  Kombucha jean shorts 90’s cold-pressed.</p>
        </div>
      </div>

      <div className={[baseStyles.col12, styles.col12Full, styles.headerInner, this.state.menuType === HeaderMenuType.RECIPES ? styles.menuShow : styles.menuHide].join(' ')}>
        <div className={[baseStyles.col3, styles.col3Full].join(' ')}>
          <div onClick={() => { this.onCloseClick() }} className={styles.headerClose}>X</div>
          <div className={styles.headerMainNav}>
            <ul>
              <li className={styles.headerNavHeader}>Recipes</li>
              <li className={styles.headerNavItem}>Fruits</li>
              <li className={styles.headerNavItem}>Grains</li>
              <li className={styles.headerNavItem}>Herbs</li>
              <li className={styles.headerNavItem}>Vegetables</li>
            </ul>
          </div>
        </div>
        <div className={[baseStyles.col6, styles.col6Full, styles.detailSection].join(' ')}>
          <ul className={styles.columnns}>
            <li className={styles.headerDetailItem}>Artichokes</li>
            <li className={styles.headerDetailItem}>Beans</li>
            <li className={styles.headerDetailItem}>Field Peas</li>
            <li className={styles.headerDetailItem}>Broccoli</li>
            <li className={styles.headerDetailItem}>Cabbage</li>
            <li className={styles.headerDetailItem}>Carrots</li>
            <li className={styles.headerDetailItem}>Cucumbers</li>
            <li className={styles.headerDetailItem}>Green Beans</li>
            <li className={styles.headerDetailItem}>Hot Peppers</li>
          </ul>
          <ul className={styles.columnns}>
            <li className={styles.headerDetailItem}>Lettuce</li>
            <li className={styles.headerDetailItem}>Peppers</li>
            <li className={styles.headerDetailItem}>Spinach</li>
            <li className={styles.headerDetailItem}>Squash</li>
            <li className={styles.headerDetailItem}>Tomato</li>
            <li className={styles.headerDetailItem}>Zucchini</li>
          </ul>
        </div>
        <div className={[baseStyles.col3, styles.col3Full, styles.detailSection].join(' ')}>
          <img className={styles.headerNavDetail} src={'/okra_square.jpg'} />
          <p className={[baseStyles.darkText, styles.headerNavDetail].join(' ')}>I’m baby etsy leggings cray biodiesel chartreuse raclette tote bag kickstarter shoreditch trust fund you probably haven’t heard of them copper mug aliquip disrupt eu. Portland raw denim flannel godard. +1 organic umami occaecat vaporware, shabby chic fugiat YOLO mixtape  vape nulla quinoa  Kombucha jean shorts 90’s cold-pressed.</p>
        </div>
      </div>
    </div>
  </div>)
  }
}

export default Header
