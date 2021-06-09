import styled from '@emotion/styled';
import React from 'react';
import ContactTabs from '../contactTabs';
import ContactHeroInterface from './interface';

const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 900
const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 450

const ContactHero = (props: ContactHeroInterface) => {
  return (
  <div>
    <div className="row">
      <FullWidthCol className="col12">
        <Parent>
          <img
            style={{ objectFit: 'cover', height: '100%' }}
            src={`${props.heroPath}?fm=jpg&q=70&w=${Math.round(windowWidth)}&h=${Math.round(windowHeight)}&fit=fill`}
          />
          <Child>
            <QuestionOverlay>
              <Headline
                className="whiteText"
                dangerouslySetInnerHTML={{
                  __html: `You say hello.`,
                }}
              ></Headline>
            </QuestionOverlay>
          </Child>
        </Parent>
      </FullWidthCol>
      <ContactTabs {...props}></ContactTabs>
    </div>
  </div>
)}

const FullWidthCol = styled.div`
  width: 50%;
  padding-bottom: 100px;
  @media (max-width: 767px) {
    width: 100%;
  }
`
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

const HomeHeroContainer = styled.div`
  position: relative;
  height: 100vh;
`

const HomeHeroOverlay = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  z-index: 101;
  top: 0;
`

export default ContactHero
