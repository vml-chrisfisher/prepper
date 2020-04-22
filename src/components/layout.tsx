import React from "react"
import { Link } from "gatsby"
import Container from './container'
import Header from './header'
import Footer from './footer'
import Helmet from 'react-helmet'

interface Props {
  location: Location
  children?: any
}

const Layout = ({ location, children }: Props) => {
  console.log(location)
  console.log(children)
  const rootPath = '/'
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
        </Link>
      </h3>
    )
  }

  return (
    <Container>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&family=Playfair+Display&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout