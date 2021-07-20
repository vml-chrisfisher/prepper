import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import {
  getRecipeBoxIsRecipeSelected,
  getRecipesBoxIsArticleSelected,
} from '../../../../store/ducks/recipesBox/selectors'
import BookmarkProps from './interface'

const Bookmark = (props: BookmarkProps) => {
  const { onClick, idToFollow } = props

  interface RibbonProps {
    isSelected: boolean
  }

  const isSelected = useSelector(
    state => getRecipeBoxIsRecipeSelected(state, idToFollow) || getRecipesBoxIsArticleSelected(state, idToFollow),
  )

  const Container = styled.div<RibbonProps>`
    cursor: pointer;
    width: 15px;
    display: inline-block;
    padding-right: 15px;
    & > svg > g > polygon:nth-of-type(1) {
      fill: ${props => {
        return props.isSelected ? '#f24e11' : '#FFFFFF'
      }};
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
    &:hover > svg > g > polygon:nth-of-type(1) {
      fill: #f24e11;
      -webkit-transition: all 1s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
  `
  const Ribbon = styled.polygon<RibbonProps>`
    fill: ${props => {
      return props.isSelected ? '#f24e11' : '#FFFFFF'
    }};
    stroke: #464646;
    strokemiterlimit: 10;
  `

  const Star = styled.polygon`
    fill: #ffffff;
    stroke: #464646;
    strokemiterlimit: 10;
  `

  return (
    <>
      <Container
        isSelected={isSelected}
        onClick={(event: React.MouseEvent) => {
          onClick(event, isSelected)
        }}
      >
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 26 43.14">
          <g>
            <Ribbon
              isSelected={isSelected}
              id="Ribbon"
              points="0.5 0.5 25.5 0.5 25.5 42.07 13 31.65 0.5 42.07 0.5 0.5 0.5 0.5"
            />
            <Star points="10.69 15.69 13 11.47 14.94 15.4 19.28 16.03 16.14 19.09 16.88 23.41 13 21.37 9.12 23.41 9.86 19.09 6.72 16.03 11.06 15.4" />
          </g>
        </svg>
      </Container>
    </>
  )
}

export default Bookmark
