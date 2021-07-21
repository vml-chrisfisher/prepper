import styled from '@emotion/styled'
import React from 'react'
import ArticleSummary from '../articleSummary'
import { ArticleSummaryInterface } from '../articleSummary/interface'
import { RandomFourSummaryProps } from './interface'

const createTwoGridOption1 = (chunk: ArticleSummaryInterface[]) => {
  return (
    <div>
      <Col6Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[0]} />
      </Col6Full>
      <Col6Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[1]} />
      </Col6Full>
    </div>
  )
}

const createTwoGridOption2 = (chunk: ArticleSummaryInterface[]) => {
  return (
    <div>
      <Col12Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[0]} />
      </Col12Full>
      <Col12Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[1]} />
      </Col12Full>
    </div>
  )
}

const createThreeGridOption3 = (chunk: ArticleSummaryInterface[]) => {
  return (
    <div>
      <Col4Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[0]} />
      </Col4Full>
      <Col4Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[1]} />
      </Col4Full>
      <Col4Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[2]} />
      </Col4Full>
    </div>
  )
}

const createFourGridOption1 = (chunk: ArticleSummaryInterface[]) => {
  return (
    <div>
      <Col6Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[0]} />
      </Col6Full>
      <Col6Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[1]} />
      </Col6Full>
      <Col6Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[2]} />
      </Col6Full>
      <Col6Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[3]} />
      </Col6Full>
    </div>
  )
}

const createFourGridOption2 = (chunk: ArticleSummaryInterface[]) => {
  return (
    <div>
      <Col3Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[0]} />
      </Col3Full>
      <Col3Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[1]} />
      </Col3Full>
      <Col3Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[2]} />
      </Col3Full>
      <Col3Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[3]} />
      </Col3Full>
    </div>
  )
}

const createFourGridOption3 = (chunk: ArticleSummaryInterface[]) => {
  return (
    <div>
      <Col12Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[0]} />
      </Col12Full>
      <Col4Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[1]} />
      </Col4Full>
      <Col4Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[2]} />
      </Col4Full>
      <Col4Full style={{ paddingBottom: '30px' }}>
        <ArticleSummary {...chunk[3]} />
      </Col4Full>
    </div>
  )
}

const createFourGridOption4 = (chunk: ArticleSummaryInterface[]) => {
  return (
    <div>
      <Col4Full>
        <ArticleSummary {...chunk[0]} />
      </Col4Full>
      <Col4Full>
        <ArticleSummary {...chunk[1]} />
      </Col4Full>
      <Col4Full>
        <ArticleSummary {...chunk[2]} />
      </Col4Full>
      <Col12Full>
        <ArticleSummary {...chunk[3]} />
      </Col12Full>
    </div>
  )
}

const createGrid = (chunk: ArticleSummaryInterface[], straight: boolean) => {
  let option
  switch (chunk.length) {
    case 1:
      return (
        <div>
          <Col6Full>
            <ArticleSummary {...chunk[0]}></ArticleSummary>
          </Col6Full>
          <Col6Full></Col6Full>
        </div>
      )
    case 2:
      option = Math.floor(Math.random() * (1 - 0 + 1))
      return option === 0 ? createTwoGridOption1(chunk) : createTwoGridOption2(chunk)
    case 3:
      return createThreeGridOption3(chunk)
    case 4:
      if (straight) {
        createFourGridOption2(chunk)
      }
      option = Math.floor(Math.random() * (1 - 0 + 1))
      return option === 0
        ? createFourGridOption1(chunk)
        : option === 1
        ? createFourGridOption2(chunk)
        : option === 2
        ? createFourGridOption3(chunk)
        : createFourGridOption4(chunk)
    default:
      return <div></div>
  }
}

const RandomFourSummary = (props: RandomFourSummaryProps) => (
  <Wrapper>{createGrid(props.chunk, props.straight)}</Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
`

const Col12Full = styled.div`
  border: 3px solid #ffffff;
  display: inline-block;
  width: 100%;
`

const Col6Full = styled.div`
  border: 3px solid #ffffff;
  display: inline-block;
  width: calc(50% - 6px);
  @media (max-width: 767px) {
    width: 100%;
  }
`

const Col4Full = styled.div`
  border: 3px solid #ffffff;
  display: inline-block;
  width: calc(33.33% - 6px);
  @media (max-width: 767px) {
    width: 100%;
  }
`

const Col3Full = styled.div`
  border: 3px solid #ffffff;
  display: inline-block;
  width: calc(25% - 6px);
  @media (max-width: 767px) {
    width: 100%;
  }
`

export default RandomFourSummary
