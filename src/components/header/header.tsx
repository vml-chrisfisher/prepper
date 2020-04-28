import React from 'react'
import { Link } from 'gatsby'
import * as styles from'./header.module.css'
import HeaderProps, { HeaderTheme } from './interface'

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
  <div className={styles.headerOuter}>
    <div className={styles.headerInner}>
      <div className={styles.headerClose}>sdfdsf</div>
      <div className={styles.headerMainNav}>

      </div>
    </div>
  </div>
  </div>
)

export default Header
