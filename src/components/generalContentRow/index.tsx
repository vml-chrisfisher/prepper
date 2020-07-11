import styled from '@emotion/styled'
import React from 'react'
import LazyLoad from 'react-lazy-load'
import ArticleSummaryVertical from '../articleSummaryVertical'
import NewsletterContainer from '../newsletterSignup/container'

const windowWidthHalf = typeof window !== 'undefined' ? window.innerWidth / 2 : 600
const windowWidthQuarter = typeof window !== 'undefined' ? window.innerWidth / 4 : 300

const GeneralContentRow = () => {
  const path = `//images.ctfassets.net/ce6fbxhy1t51/5pHNDnKSUEali4feRGZOVY/db78ad6cbb16c8e171aa19905aa0f497/story-background.png?fm=webp&q=50&w=${Math.round(
    windowWidthHalf,
  )}`
  return (
    <GeneralContentContainer className="row">
      <Col6Full className="col6">
        <ContentContainer>
          <ContentBackground>
            <ContentImage>
              <LazyLoad style={{ width: '100%', backgroundColor: '#FEFEFE' }} once offset={100}>
                <img alt="Knife and Fish Story" src={path} />
              </LazyLoad>
            </ContentImage>
            <ContentOverlay>
              <Col3FullOverlay className="col3" />
              <Col6FullOverlay className="col6">
                <StoryContainer>
                  <div className="eyebrow">Story</div>
                  <StoryTitle>This is the story of Knife and Fish</StoryTitle>
                  <button className="primaryButton darkOutline">Our Story</button>
                </StoryContainer>
              </Col6FullOverlay>
              <Col3Full className="col3" />
            </ContentOverlay>
          </ContentBackground>
        </ContentContainer>
      </Col6Full>
      <Col6Full className="col6">
        <div className="row">
          <Col6Full className="col6">
            <ArticleSummaryVertical
              {...{
                title: 'Secrets of a Southern Tomato Garden',
                description: 'If you think you hate tomatoes, you haven’t tried a real one.',
                imageDescription: 'If you think you hate tomatoes, you haven’t tried a real one',
                slug: 'secrets-of-a-southern-tomato-garden',
                imagePath: `//images.ctfassets.net/ce6fbxhy1t51/3Pb4wA6V0swrWHAl6T6YRl/77987a788109e3c8ab265077a6abf748/tomato-article-banner.jpg`,
                basePath: 'article',
              }}
            />
          </Col6Full>

          <Col6Full className="col6">
            <NewsletterContainer {...{ position: 0 }} />
          </Col6Full>
        </div>
      </Col6Full>
    </GeneralContentContainer>
  )
}

const GeneralContentContainer = styled.div`
  padding-bottom: 200px;
  margin: 0;
  @media (max-width: 767px) {
    padding-bottom: 40px;
  }
`

const Col3Full = styled.div`
  width: 25%;
  padding: 0;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const Col3FullOverlay = styled.div`
  width: 25%;
  padding: 0;
  @media (max-width: 767px) {
    width: 5%;
  }
`

const Col6Full = styled.div`
  margin: 0;
  width: 50%;
  padding: 0;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const Col6FullOverlay = styled.div`
  margin: 0;
  width: 50%;
  padding: 0;
  @media (max-width: 767px) {
    width: 90%;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const ContentBackground = styled.div`
  display: block;
  height: 150%;
`

const ContentImage = styled.div`
  width: 100%;
  min-height: 150%;
`

const ContentOverlay = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
`

const StoryContainer = styled.div`
  padding-top: 50%;
`

const StoryTitle = styled.h2`
  color: #333333;
  padding-bottom: 20px;
  text-align: center;
`
export default GeneralContentRow
