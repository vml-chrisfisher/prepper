import { Link } from 'gatsby';
import React from 'react';
import * as baseStyles from '../base.module.css';
import HeaderProps, { HeaderTheme } from './interface';
import * as styles from'./header.module.css'

const Header = (props: HeaderProps) => (
  <div>
  <nav role= "navigation" >
    <ul className={styles.navigation}>
      <li className={props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
        <Link to="/" > Home </Link>
      </li>
      <li className={props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
        <Link to="/vegetables">Vegetables</Link>
      </li>
      <li className={props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
        <Link to="/articles">Articles</Link>
      </li>
      <li className={props.theme === HeaderTheme.LIGHT ? styles.navigationItemWhite : styles.navigationItem}>
        <Link to="/recipes">Recipes</Link>
      </li>
    </ul>
  </nav>
  <div className={[styles.headerOuter, baseStyles.row].join(' ')}>
    <div className={[baseStyles.col12, styles.col12Full, styles.headerInner].join(' ')}>
      <div className={[baseStyles.col3, styles.col3Full].join(' ')}>
        <div className={styles.headerClose}>X</div>
        <div className={styles.headerMainNav}>
          <ul>
            <li className={styles.headerNavItem}>Vegetables</li>
            <li className={styles.headerNavItem}>Articles</li>
            <li className={styles.headerNavItem}>Recipes</li>
          </ul>
        </div>
      </div>
      <div className={[baseStyles.col3, styles.col3Full, styles.detailSection].join(' ')}>
        <p className={[baseStyles.darkText, styles.headerNavDetail].join(' ')}>I’m baby etsy leggings cray biodiesel chartreuse raclette tote bag kickstarter shoreditch trust fund you probably haven’t heard of them copper mug aliquip disrupt eu. Portland raw denim flannel godard. +1 organic umami occaecat vaporware, shabby chic fugiat YOLO mixtape  vape nulla quinoa  Kombucha jean shorts 90’s cold-pressed.</p>
      </div>
      <div className={[baseStyles.col3, styles.col3Full, styles.detailSection].join(' ')}>
        sdfsdf
      </div>
      <div className={[baseStyles.col3, styles.col3FullLast, styles.detailSection].join(' ')}>
        dsfsd
      </div>
      
    </div>
    </div>
  </div>
)

export default Header
