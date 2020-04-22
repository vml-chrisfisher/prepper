import React from "react"
import { Link } from "gatsby"
import Container from './container'
import Header from './header/header'
import Footer from './footer'
import Helmet from 'react-helmet'
import HeaderProps, { HeaderTheme } from "./header/interface"

interface Props {
  location: Location
  children?: any
}

const Layout = ({ location, children }: Props) => {
  console.log(location)
  console.log(children)
  const rootPath = '/'
  let theme: HeaderProps = { theme: HeaderTheme.DARK} 

  if (location.pathname === rootPath) {
    theme = {theme: HeaderTheme.LIGHT}
  }

  return (
    <Container>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&family=Playfair+Display&display=swap" rel="stylesheet" />
      </Helmet>
      <Header {...theme} />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout