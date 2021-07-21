import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import FeatureContentRowDetailProps from './interface'

interface ThemeProps {
  theme: string
}

interface BackgroundProps {
  color: string
}

const FeatureContentRowDetail = (props: FeatureContentRowDetailProps) => {
  const themeValue = props.theme

  return (
    <div>
      <FeatureContainer style={{ backgroundColor: props.backgroundColor }}>
        <DetailContainer>
          <FeatureTitle theme={themeValue}>{props.title}</FeatureTitle>
          <FeatureDescription
            theme={themeValue}
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></FeatureDescription>
          <FeatureButton to={props.slug} theme={themeValue}>
            {props.buttonCaption}
          </FeatureButton>
        </DetailContainer>
      </FeatureContainer>
    </div>
  )
}

const FeatureContainer = styled.div`
  margin-top: 0%;
  padding-top: 150%;
  position: relative;
`

const DetailContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
`

const FeatureTitle = styled.h2<ThemeProps>`
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  text-align: center;
  padding-bottom: 20px;
  font-size: 24px;
`

const FeatureDescription = styled.div<ThemeProps>`
  font-family: 'Roboto', sans-serif;
  margin-left: 10%;
  width: 80%;
  font-size: 12px;
  font-weight: 100;
  color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  text-align: center;
  padding-bottom: 20px;
`

const FeatureButton = styled(props => <Link {...props} />)<ThemeProps>`
  background-color: ${props => {
    return props.theme === 'white' ? '#FFFFFF' : '#464646'
  }};
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75em;
  color: ${props => {
    return props.theme === 'white' ? '#464646' : '#FFFFFF'
  }};
  text-align: center;
  margin: 0 auto;
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 25px;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
`

export default FeatureContentRowDetail
