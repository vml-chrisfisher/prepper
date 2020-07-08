import styled from '@emotion/styled'
import React from 'react'

const StoryHero = () => (
  <div>
    <HomeHeroContainer>
      <HomeHeroOverlay>
        <div className="row">
          <div className="col12">
            <Parent>
              <Child>
                <QuestionOverlay>
                  <Mission>Our Mission</Mission>
                  <Headline
                    className="whiteText"
                    dangerouslySetInnerHTML={{
                      __html: `Bring inspiration<br> and knowledge<br>to everyone <br>who eats<sup style="font-size: .4em">*</sup>.`,
                    }}
                  ></Headline>
                  <AstrickCaption
                    dangerouslySetInnerHTML={{
                      __html: '<sup>*</sup>and drinks a bit.',
                    }}
                  ></AstrickCaption>
                </QuestionOverlay>
              </Child>
            </Parent>
          </div>
        </div>
      </HomeHeroOverlay>
    </HomeHeroContainer>
  </div>
)

const Parent = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
`
const Child = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  @media (max-width: 767px) {
    top: calc(50% - 15px);
  }
`

const QuestionOverlay = styled.div`
  display: block;
`

const Headline = styled.h1`
  text-align: center;
  font-size: 5em;
  line-height: 1.4em;
  letter-spacing: 2px;
  @media (max-width: 767px) {
    font-size: 4em;
  }
`

const Mission = styled.h3`
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  line-height: 2em;
`

const AstrickCaption = styled.h3`
  color: #ffffff;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.1px;
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
  color: #fff;
  font-style: italic;
`

const HomeHeroQuestionInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  border-bottom: solid 0.5px #ffffff;
  font-size: 19px;
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
`

export default StoryHero
