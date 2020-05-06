import React from 'react';
import VegetablesSummaryInterface from "./interface"
import styled from '@emotion/styled'

const VegetablesSummary = (props: VegetablesSummaryInterface) => (
  <VegetableArticle key={props.slug}>
    <a href={`/vegetables/${props.slug}`}>
      <VegetableArticleInside style={{ backgroundImage: `url(${props.imagePath})` }}>
      </VegetableArticleInside>
      <VegetableArticleOverlay>
        <h4 className="darkText">{props.parentVegetable}</h4>
        <h3 className="darkText">{props.title}</h3>
      </VegetableArticleOverlay>
    </a>
  </VegetableArticle>
)

const VegetableArticle = styled.div`
  width: 33%;
  display: inline-block;
  height: 150%;
  position: relative;
`

const VegetableArticleInside = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  padding-bottom: 150%;
`

const VegetableArticleOverlay = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 20px;
  left: 20px;
  color: #FFF;
`

export default VegetablesSummary
