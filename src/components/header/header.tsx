import { Link } from 'gatsby';
import React, { PureComponent } from 'react';
import * as baseStyles from '../base.module.css';
import HeaderProps, { HeaderTheme } from './interface';
import * as styles from'./header.module.css'

const onVegetableClick = () => {
  console.log("hello")
}

class Header extends PureComponent<HeaderProps, {menuUp: boolean}> {

  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      menuUp: true
    }
    this.onVegetableClick = this.onVegetableClick.bind(this)
  }

  onVegetableClick() {
    this.setState(state => ({
      menuUp: !state.menuUp
    }))
  }

  render() {
  return(<div>
  <nav role= "navigation" >
    <ul className={styles.navigation}>
      <li className={this.props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
        <Link to="/" > Home </Link>
      </li>
      <li className={this.props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
        <a onClick={() => {this.onVegetableClick()}}>Vegetables</a>
      </li>
      <li className={this.props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
        <Link to="/articles">Articles</Link>
      </li>
      <li className={this.props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
        <Link to="/recipes">Recipes</Link>
      </li>
    </ul>
  </nav>
    <div className={[styles.headerOuter, baseStyles.row, this.state.menuUp ? styles.menuUp : styles.menuDown].join(' ')}>
    <div className={[baseStyles.col12, styles.col12Full, styles.headerInner].join(' ')}>
      <div className={[baseStyles.col3, styles.col3Full].join(' ')}>
        <div onClick={() => {this.onVegetableClick()}} className={styles.headerClose}>X</div>
        <div className={styles.headerMainNav}>
          <ul>
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
