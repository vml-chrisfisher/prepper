import styled from '@emotion/styled'
import React from 'react'
import { RatingStarProps } from './interface'

const RatingStar = (props: RatingStarProps) => {
  interface StarProps {
    percentage: number
  }

  const { rating, position, onHover, isPartHover, onMouseOut, onStarClick } = props
  console.log(isPartHover)
  const fillAmount =
    isPartHover === 'filled'
      ? 1
      : isPartHover === 'outline'
      ? 0
      : position < rating || position === rating
      ? 1
      : position > rating && position - 1 < rating
      ? rating - (position - 1)
      : 0
  const Container = styled.div`
    height: 14px;
    position: relative;
    width: 14px;
    float: left;
    padding-right: 4px;
  `

  const OutlineContainer = styled.div`
      position: absolute;
      z-index 10;
      width: 14px;
      height: 14px;
      overflow: hidden;
      &svg {
        width: 14px;
        height: 14px;
      }
    `
  const StarOutLine = styled.polygon`
    fill: #ffffff;
    stroke: #464646;
    stroke-width: 0.1;
    stroke-miterlimit: 10;
  `
  const StarOoutlinePath = styled.path`
    fill: #999999;
  `

  const FilledContainer = styled.div`
    position: absolute;
    z-index: 11;
    width: 14px;
    height: 14px;
    overflow: hidden;
    &svg {
      width: 14px;
      height: 14px;
    }
  `

  const FilledMask = styled.div<StarProps>`
      width: ${props => {
        const calcWidth = 14 * props.percentage
        return `${calcWidth}px`
      }};
      height: 14px;
      overflow: hidden;
    }
`
  const StarFilled = styled.polygon`
    fill: #f24e11;
    stroke-miterlimit: 10;
  `
  const StarFilledePath = styled.path`
    fill: #999999;
  `

  return (
    <Container
      onMouseOver={() => {
        onHover(position)
      }}
      onMouseOut={() => {
        onMouseOut()
      }}
      onClick={() => {
        onStarClick(position)
      }}
    >
      <OutlineContainer>
        <svg width="14px" height="28px">
          <g>
            <StarOutLine
              points="7,11.64 2.95,13.28 3.26,8.92 0.45,5.57 4.69,4.52 7,0.81 9.31,4.52 13.55,5.57 10.74,8.92 
		11.05,13.28 	"
            />
            <StarOoutlinePath
              d="M7,1.29l2.05,3.28l0.11,0.17l0.2,0.05l3.75,0.93l-2.49,2.96l-0.13,0.15l0.01,0.2l0.27,3.86l-3.58-1.45L7,11.37l-0.19,0.08
		l-3.58,1.45L3.5,9.04l0.01-0.2L3.38,8.68L0.9,5.72l3.75-0.93l0.2-0.05l0.11-0.17L7,1.29 M7,0.34L4.53,4.3L0,5.43L3,9l-0.33,4.65
		L7,11.91l4.33,1.75L11,9l3-3.57L9.47,4.3L7,0.34L7,0.34z"
            />
          </g>
        </svg>
      </OutlineContainer>
      <FilledContainer>
        <FilledMask percentage={fillAmount}>
          <svg width="14px" height="28px">
            <g>
              <StarFilled
                points="7,11.64 2.95,13.28 3.26,8.92 0.45,5.57 4.69,4.52 7,0.81 9.31,4.52 13.55,5.57 10.74,8.92 
		11.05,13.28 	"
              />
              <StarFilledePath
                d="M7,1.29l2.05,3.28l0.11,0.17l0.2,0.05l3.75,0.93l-2.49,2.96l-0.13,0.15l0.01,0.2l0.27,3.86l-3.58-1.45L7,11.37l-0.19,0.08
		l-3.58,1.45L3.5,9.04l0.01-0.2L3.38,8.68L0.9,5.72l3.75-0.93l0.2-0.05l0.11-0.17L7,1.29 M7,0.34L4.53,4.3L0,5.43L3,9l-0.33,4.65
		L7,11.91l4.33,1.75L11,9l3-3.57L9.47,4.3L7,0.34L7,0.34z"
              />
            </g>
          </svg>
        </FilledMask>
      </FilledContainer>
    </Container>
  )
}

export default RatingStar
