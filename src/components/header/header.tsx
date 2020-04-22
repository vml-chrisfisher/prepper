import React from 'react'
import { Link } from 'gatsby'
import * as styles from'./header.module.css'
import HeaderProps from './interface'

const Header = (props: HeaderProps) => (
  <nav role= "navigation" >
    <ul className={styles.navigation}>
      <li className={[styles.navigationItem, props.theme].join(' ')}>
        <Link to="/" > Home </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/vegetables">Vegetables</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/articles">Articles</Link>
      </li>
    </ul>
  </nav>
)

export default Header
