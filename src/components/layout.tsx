import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Container from './container'
import Header from './header/header'
import { HeaderProps, HeaderTheme } from './header/interface'


interface Props {
  location: Location
  children?: any
}



const Layout = ({ location, children }: Props) => {
  const rootPath = '/'
  const homePath = ''
  let theme: HeaderProps = { theme: HeaderTheme.DARK }
  console.log("LOCATION PATH: ", location.pathname)

  if (location.pathname === rootPath || location.pathname === homePath) {
    theme = { theme: HeaderTheme.LIGHT }
  }
  console.log(theme)

  return (
    <Container>
      
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&family=Playfair+Display&display=swap" rel="stylesheet" />
      </Helmet>
      <Header {...theme} />
      {children}
    </Container>
  )
}

export default Layout