import React from 'react'
import Helmet from 'react-helmet'
import Container from './container'
import HeaderContainer from './header/container'
import { HeaderProps, HeaderTheme } from './header/interface'

interface Props {
  location: Location
  meta: string
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  children?: any
  /* eslint-enable  @typescript-eslint/no-explicit-any */
}

const Layout = ({ location, meta, children }: Props) => {
  const rootPath = '/'
  const homePath = ''
  let theme: HeaderProps = { theme: HeaderTheme.DARK }

  if (location.pathname === rootPath || location.pathname === homePath) {
    theme = { theme: HeaderTheme.LIGHT }
  }

  return (
    <Container>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content={meta} />
      </Helmet>
      <HeaderContainer {...theme} />
      {children}
    </Container>
  )
}

export default Layout
