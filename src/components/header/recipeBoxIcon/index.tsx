import styled from '@emotion/styled'
import React from 'react'
import { RecipeBoxProps } from './interface'

const RecipeBoxIcon = () => {
  const Container = styled.div`
    cursor: pointer;
    width: 15px;
    display: inline-block;
    padding-right: 15px;
    & > svg > g > polygon:nth-of-type(1) {
      fill: #f24e11;
    }
  `
  const Ribbon = styled.polygon`
    fill: #f24e11;
    stroke: #f24e11;
    strokemiterlimit: 10;
  `

  const Star = styled.polygon`
    fill: #ffffff;
    stroke: #ffffff;
    strokemiterlimit: 10;
  `

  return (
    <>
      <Container>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 26 43.14">
          <g>
            <Ribbon id="Ribbon" points="0.5 0.5 25.5 0.5 25.5 42.07 13 31.65 0.5 42.07 0.5 0.5 0.5 0.5" />
            <Star points="10.69 15.69 13 11.47 14.94 15.4 19.28 16.03 16.14 19.09 16.88 23.41 13 21.37 9.12 23.41 9.86 19.09 6.72 16.03 11.06 15.4" />
          </g>
        </svg>
      </Container>
    </>
  )
}

export default RecipeBoxIcon
