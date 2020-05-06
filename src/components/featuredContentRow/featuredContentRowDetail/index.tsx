import React from 'react'
import styled from '@emotion/styled'
import FeatureContentRowDetailProps from "./interface"

const FeatureContentRowDetail = (props: FeatureContentRowDetailProps) => {
  return (<div>
    <FeatureTitle>{props.title}</FeatureTitle>
    <FeatureDescription>{props.description}</FeatureDescription>
    <FeatureButton>{props.buttonCaption}</FeatureButton>
  </div>)
}

const FeatureTitle = styled.h2`
  color: #FFFFFF;
  text-align: center;
  padding-bottom: 20px;
`

const FeatureDescription = styled.div`
  font-family: 'Nunito', sans-serif;
  margin-left: 10%;
  width: 80%;
  font-size: .75em;
  color: #FFFFFF;
  text-align: center;
  padding-bottom: 20px;
`

const FeatureButton = styled.button`
  font-family: 'Nunito', sans-serif;
  font-size: 0.75em;
  color: #464646;
  text-align: center;
  margin: 0 auto;
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 25px;
  letter-spacing: 2px;
`

export default FeatureContentRowDetail