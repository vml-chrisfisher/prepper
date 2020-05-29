import React from 'react'
import ArticleSummary from '../articleSummary'
import FeatureContentRowProps from './interface'
import FeatureContentRowDetail from './featuredContentRowDetail'
import styled from '@emotion/styled'

const FeaturedContentRow = (props: FeatureContentRowProps) => {
  const maxNumber = Math.floor(props.features.length + 1)
  const detailPosition = Math.floor(Math.random() * (props.features.length - 0 + 1))
  const items = []
  let b = 0
  for (let a = 0; a < maxNumber; a++) {
    if (a === detailPosition) {
      items.push(
        <Col3Full className="col3">
          <FeatureContentRowDetail {...props.details} />
        </Col3Full>,
      )
    } else {
      items.push(
        <Col3Full className="col3">
          <ArticleSummary {...props.features[b]} />
        </Col3Full>,
      )
      b++
    }
  }

  return <FeatureContainer className="row">{items}</FeatureContainer>
}

const Col3Full = styled.div`
  width: 25%;
  padding: 0;
`

const FeatureContainer = styled.div`
  padding-bottom: 150px;
`

export default FeaturedContentRow
