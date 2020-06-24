import React from 'react'
import ArticleSummary from '../articleSummary'
import styled from '@emotion/styled'

const FeaturedVegetableRow = () => {
  return (
    <Container className="row">
      <Col6Full className="col6">
        <VegetableContainer>
          <VegetableBackground>
            <VegetableImage>
              <img src={'/perkins-okra.jpg'} />
            </VegetableImage>
            <VegetableOverlay>
              <Col3Full className="col3" />
              <Col6Full className="col6">
                <VegetableDetailContainer>
                  <VegetableTitle>Perkins Long Pod Okra</VegetableTitle>
                  <VegetableDescription>
                    I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings.
                    Wayfarers forage.
                  </VegetableDescription>
                  <button className="primaryButton outline">Learn More</button>
                </VegetableDetailContainer>
              </Col6Full>
              <Col3Full className="col3" />
            </VegetableOverlay>
          </VegetableBackground>
        </VegetableContainer>
      </Col6Full>
      <Col6Full className="col6">
        <div className="row">
          <Col6Full className="col6">
            <Ratio1Point5Height>
              <VegetablePricingSummaryContainer>
                <VegetablePricingImage src={'/okra_square.jpg'} />
                <VegetablePricingCategory>Seeds</VegetablePricingCategory>
                <VegetablePricingPrice>$12</VegetablePricingPrice>
                <VegetableProductContainer>
                  <VegetablePricingProduct>12 seeds</VegetablePricingProduct>
                  <VegetablePricingProduct>36 seeds</VegetablePricingProduct>
                </VegetableProductContainer>
              </VegetablePricingSummaryContainer>
            </Ratio1Point5Height>
          </Col6Full>

          <Col6Full className="col6">
            <ArticleSummary
              {...{
                title: 'Okra Corn',
                description: 'sdfsdfds sdf  sdf sdf',
                slug: 'sdfds',
                imagePath: '/okra-corn.png',
              }}
            />
          </Col6Full>
        </div>
        <div className="row">
          <Col3Full className="col3" />
          <Col6Full className="col6" style={{ paddingTop: '15%' }}>
            <h3 className="center white-text">Okra</h3>
            <p>
              I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers
              forage{' '}
            </p>
            <button className="primaryButton">Learn More</button>
          </Col6Full>
          <Col3Full className="col3" />
        </div>
      </Col6Full>
    </Container>
  )
}

const Container = styled.div`
  padding-bottom: 200px;
`

const Col3Full = styled.div`
  width: 25%;
  padding: 0;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const Col6Full = styled.div`
  width: 50%;
  padding: 0;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const VegetableContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const VegetableDetailContainer = styled.div`
  padding-top: 100px;
`

const VegetableBackground = styled.div`
  display: block;
  height: 150 %;
`

const VegetableOverlay = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1003;
`

const VegetableTitle = styled.h2`
  color: #ffffff;
  padding-bottom: 20px;
  text-align: center;
`

const VegetableDescription = styled.p`
  padding-bottom: 20px;
`

const VegetableImage = styled.div`
  width: 100%;
  min-height: 150%;
`

const Ratio1Point5Height = styled.div`
  width: 100%;
  padding-top: 150%;
  position: relative;
  background-color: #ffffff;
`

const VegetablePricingSummaryContainer = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
`

const VegetablePricingImage = styled.img`
  width: 84%;
  margin: 0 auto;
  padding-bottom: 20px;
`

const VegetablePricingCategory = styled.div`
  color: #464646;
  font-family: 'Nunito', sans-serif;
  font-size: 0.75em;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 20px;
`

const VegetablePricingPrice = styled.div`
  color: #464646;
  font-size: 2.25em;
  letter-spacing: -2px;
  padding-bottom: 20px;
  text-align: center;
`

const VegetableProductContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
`

const VegetablePricingProduct = styled.div`
  color: #afa7a7;
  display: inline-block;
  font-family: 'Nunito', sans-serif;
  font-size: 0.75em;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

export default FeaturedVegetableRow
