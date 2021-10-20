import styled from '@emotion/styled'
import React from 'react'
import ArticleSummary from '../articleSummary'
import ArticleSummaryVertical from '../articleSummaryVertical'
import FeatureContentRowDetail from './featuredContentRowDetail'
import FeatureContentRowProps from './interface'

const FeaturedContentRow = (props: FeatureContentRowProps) => {
  return (
    <>
      {props.features && (
        <FeatureContainer className="row">
          <Col3Full className="col3">
            <ArticleSummary {...props.features[0]} />
          </Col3Full>
          <Col3Full className="col3">
            <ArticleSummary {...props.features[1]} />
          </Col3Full>
          <Col3Full className="col3">
            <ArticleSummary {...props.features[2]} />
          </Col3Full>
          <Col3Full className="col3">
            <FeatureContentRowDetail {...props.details} />
          </Col3Full>
        </FeatureContainer>
      )}
    </>
  )
}

const Col3Full = styled.div`
  width: calc(25% - 6px);
  border: 3px solid #ffffff;
  display: inline-block;
  padding: 0;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const FeatureContainer = styled.div`
  padding-bottom: 150px;
`

export default FeaturedContentRow
