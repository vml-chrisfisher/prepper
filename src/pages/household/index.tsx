import styled from '@emotion/styled'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'
import Footer from '../../components/footer'
import HeaderContainer from '../../components/header/container'
import { HeaderTheme } from '../../components/header/interface'
import Layout from '../../components/layout'
import HouseholdNewsletterPreferences from '../../components/preferences/newsletter'
import ProfileCard from '../../components/profileCard'
import ProfileCardSlider from '../../components/profleCardSlider'
import SectionHeader from '../../components/sectionHeader'
import NextShipment from '../../components/shipments/nextShipment'
import { EMAIL_SEND_FREQUENCY } from '../../store/ducks/emailPreferences/types'
import { getHouseholdData } from '../../store/ducks/household/selectors'

const Household = () => {
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
      <HeaderContainer {...{ theme: HeaderTheme.LIGHT, showHeaderProfile: false }} />
      <MainContainer>
        <Helmet title="Articles | Knife & Fish">
          <link rel="canonical" href="https://www.knifeandfish.com/articles"></link>
        </Helmet>
        <h1>Fisher Household</h1>
        <div className="row">
          <div className="col2"></div>
          <div className="col8">
            <section>
              <SectionHeader
                title="Household"
                description="It is easy to go down the rabbit hole of searching for recipes.  All of those tasty recipes that you added to your Recipe Box and keep looking at are all right here."
              ></SectionHeader>
              <div>
                <ProfileCardSlider></ProfileCardSlider>
              </div>
            </section>
            <section>
              <SectionHeader
                title="Shipments"
                description="It is easy to go down the rabbit hole of searching for recipes.  All of those tasty recipes that you added to your Recipe Box and keep looking at are all right here."
              ></SectionHeader>
              <div>
                <NextShipment></NextShipment>
              </div>
            </section>
            <section>
              <SectionHeader
                title="Groceries"
                description="It is easy to go down the rabbit hole of searching for recipes.  All of those tasty recipes that you added to your Recipe Box and keep looking at are all right here."
              ></SectionHeader>
              <div>Household slider</div>
            </section>
            <section>
              <SectionHeader
                title="Preferences"
                description="It is easy to go down the rabbit hole of searching for recipes.  All of those tasty recipes that you added to your Recipe Box and keep looking at are all right here."
              ></SectionHeader>
              <div>
                <HouseholdNewsletterPreferences
                  emailAddress="chrisfisher236@gmail.com"
                  recipes={EMAIL_SEND_FREQUENCY.DAILY}
                  articles={EMAIL_SEND_FREQUENCY.MONTHLY}
                  roundups={EMAIL_SEND_FREQUENCY.NONE}
                ></HouseholdNewsletterPreferences>
              </div>
            </section>
            <section>
              <SectionHeader
                title="Wallet"
                description="It is easy to go down the rabbit hole of searching for recipes.  All of those tasty recipes that you added to your Recipe Box and keep looking at are all right here."
              ></SectionHeader>
              <div>Household slider</div>
            </section>
            v
          </div>
          <div className="col2"></div>
        </div>

        <Footer {...{ theme: HeaderTheme.DARK }} />
      </MainContainer>
    </Layout>
  )
}

export default Household
