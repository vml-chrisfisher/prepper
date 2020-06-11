import styled from '@emotion/styled'
import React from 'react'
import ArticleSummary from '../articleSummary'
import NewsletterContainer from '../newsletterSignup/container'

const windowWidthHalf = typeof window !== 'undefined' ? window.innerWidth / 2 : 600
const windowWidthQuarter = typeof window !== 'undefined' ? window.innerWidth / 4 : 300

const GeneralContentRow = () => {
  return (
    <GeneralContentContainer className="row">
      <Col6Full className="col6">
        <ContentContainer>
          <ContentBackground>
            <ContentImage>
              <img
                alt="Zephyr and Hare Story"
                src={`//images.ctfassets.net/ce6fbxhy1t51/5pHNDnKSUEali4feRGZOVY/db78ad6cbb16c8e171aa19905aa0f497/story-background.png?fm=webp&q=80&w=${windowWidthHalf}`}
              />
            </ContentImage>
            <ContentOverlay>
              <Col3Full className="col3" />
              <Col6Full className="col6">
                <StoryContainer>
                  <div className="eyebrow">Story</div>
                  <StoryTitle>This is the story of Seedlings</StoryTitle>
                  <button className="primaryButton darkOutline">Our Story</button>
                </StoryContainer>
              </Col6Full>
              <Col3Full className="col3" />
            </ContentOverlay>
          </ContentBackground>
        </ContentContainer>
      </Col6Full>
      <Col6Full className="col6">
        <div className="row">
          <Col6Full className="col6">
            <ArticleSummary
              {...{
                title: 'A guide to gardening tools',
                description: 'sdfsdfds sdf  sdf sdf',
                slug: 'sdfds',
                imagePath: `//images.ctfassets.net/ce6fbxhy1t51/68yxYrpcreuM9MdWEXReXE/ee1b2e4a8043b52cdc906c0480410d66/tools-background.png?fm=webp&q=80&w=${windowWidthQuarter}`,
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
`

const Col3Full = styled.div`
  width: 25%;
  padding: 0;
`

const Col6Full = styled.div`
  margin: 0;
  width: 50%;
  padding: 0;
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
  z-index: 1003;
`

const StoryContainer = styled.div`
  padding-top: 50%;
`

const StoryTitle = styled.h2`
  color: #464646;
  padding-bottom: 20px;
  text-align: center;
`
export default GeneralContentRow
