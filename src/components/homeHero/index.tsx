import styled from '@emotion/styled';
import React from 'react';
import VideoBackgroundProps from './interface';

const HomeHero = (props: VideoBackgroundProps) => (
  <div>
    <HomeHeroContainer>
      <HomeHeroOverlay>
        <div className="row">
          <div className="col3"/>
          <div className="col6">
            <QuestionOverlay>
              <Headline className="whiteText" dangerouslySetInnerHTML={
                { __html: props.headline }
              }></Headline>
              <HomeHeroQuestion>{props.searchQuestion}</HomeHeroQuestion>
              <HomeHeroQuestionInput placeholder={props.searchPlaceholder} />
            </QuestionOverlay>
          </div>
          <div className="col3"/>
        </div>
      </HomeHeroOverlay>
    </HomeHeroContainer>
  </div>
)

const QuestionOverlay = styled.div`
  margin-top: 50%;
  display: block;
`

const Headline = styled.h1`
  text-align: left;
`

const HomeHeroContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const HomeHeroOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 101;
  top: 0;
`

const HomeHeroQuestion = styled.h3`
  padding-top: 60px;
  color: #FFF;;
  font-style: italic;
`

const HomeHeroQuestionInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  border-bottom: solid .5px #FFFFFF;
  font-size: 19px;
  color: #FFFFFF;
  font-family: 'Nunito', sans-serif;
`

export default HomeHero
