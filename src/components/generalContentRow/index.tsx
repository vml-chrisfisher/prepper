import styled from '@emotion/styled';
import React from 'react';
import ArticleSummary from '../articleSummary';
import NewsletterContainer from '../newsletterSignup/container'

const GeneralContentRow = () => {
  return (
    <GeneralContentContainer className="row">
      <Col6Full className="col6">
        <ContentContainer>
          <ContentBackground>
            <ContentImage>
              <img src={'/story-background.png'} />
            </ContentImage>
            <ContentOverlay>
              <Col3Full className="col3" />
                <Col6Full className="col6">
                  <StoryContainer>
                    <div className="eyebrow">Story</div>
                    <StoryTitle>
                      This is the story of Seedlings
                    </StoryTitle>
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
          <ArticleSummary {...
            {
              title: 'A guide to gardening tools',
              description: 'sdfsdfds sdf  sdf sdf',
              slug: 'sdfds',
              imagePath: '/tools-background.png'
            }
          } />
          </Col6Full>
          
        <Col6Full className="col6">
          <NewsletterContainer />
        </Col6Full>
      </div>
    </Col6Full>
  </GeneralContentContainer>
  )
}

const GeneralContentContainer = styled.div`
  padding-bottom: 200px;
`

const Col3Full = styled.div`
  width: 25%;
  padding: 0;
`

const Col6Full = styled.div`
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