import styled from '@emotion/styled'
import React from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'
import Footer from '../../components/footer'
import HeaderContainer from '../../components/header/container'
import { HeaderTheme } from '../../components/header/interface'
import Layout from '../../components/layout'
import { getHouseholdData } from '../../store/ducks/household/selectors'

const Preferences = () => {
  const household = useSelector(getHouseholdData)
  const MainContainer = styled.div`
    background-color: #fff;
    position: absolute;
    top: 15.625em;
    width: 100%;

    @media (max-width: 767px) {
      top: 6em;
    }
  `
  return (
    <Layout>
      <HeaderContainer {...{ theme: HeaderTheme.LIGHT }} />
      <MainContainer>
        <Helmet title="Articles | Knife & Fish">
          <link rel="canonical" href="https://www.knifeandfish.com/articles"></link>
        </Helmet>
        <h1>Articles</h1>
        <div className="wrapper">
          <div>Preferences</div>
        </div>
        <Footer {...{ theme: HeaderTheme.DARK }} />
      </MainContainer>
    </Layout>
  )
}

export default Preferences
