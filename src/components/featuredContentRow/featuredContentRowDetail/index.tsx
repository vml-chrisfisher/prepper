import React from 'react'
import styled from '@emotion/styled'
import FeatureContentRowDetailProps from "./interface"

interface themeProps {
  theme: string
}

const FeatureContentRowDetail = (props: FeatureContentRowDetailProps) => {

  const themeValue = props.theme

  return(
    <FeatureContainer>
      <FeatureTitle theme={themeValue}>{props.title}</FeatureTitle>
      <FeatureDescription theme={themeValue}>{props.description}</FeatureDescription>
      <FeatureButton theme={themeValue}>{props.buttonCaption}</FeatureButton>
    </FeatureContainer>)
}

const FeatureContainer = styled.div`
  margin-top: 35%;
`

const FeatureTitle = styled.h2<themeProps>`
  color: ${(props) => {
    return (props.theme === 'white' ? '#FFFFFF' : '#464646')
  }};
  text-align: center;
  padding-bottom: 20px;
`

const FeatureDescription = styled.div<themeProps>`
  font-family: 'Nunito', sans-serif;
  margin-left: 10%;
  width: 80%;
  font-size: .75em;
  color: ${(props) => {
    return (props.theme === 'white' ? '#FFFFFF' : '#464646')
  }};
  text-align: center;
  padding-bottom: 20px;
`

const FeatureButton = styled.button<themeProps>`
 background-color: ${(props) => {
    console.log("YOYO1: ", props)
    return (props.theme === 'white' ? '#FFFFFF' : '#464646')
  }};
  border: none;
  font-family: 'Nunito', sans-serif;
  font-size: 0.75em;
  color: ${(props) => {
    return (props.theme === 'white' ? '#464646' : '#FFFFFF')
  }};
  text-align: center;
  margin: 0 auto;
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 25px;
  letter-spacing: 2px;
`

export default FeatureContentRowDetail