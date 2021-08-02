import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { onTryAddArticleRating, onTryAddRecipeRating } from '../../store/ducks/ratings/action'
import { RatingBarProps } from './interface.'
import RatingStar from './ratingStar'

const RatingBar = (props: RatingBarProps) => {
  const { rating, numberOfRatings, articleId, recipeId } = props

  const dispatch = useDispatch()

  const [hoverPosition, setHoverPosition] = useState(-1)

  const ReviewCaption = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    padding-left: 7px;
  `

  const StarsContainer = styled.div`
    display: inline-block;
    margin-top: 5px;
  `

  const onHover = (position: number) => {
    setHoverPosition(position)
  }

  const onMouseOut = () => {
    setHoverPosition(-1)
  }

  const onStarRatingClick = (position: number) => {
    if (articleId) {
      dispatch(onTryAddArticleRating({ id: articleId, rating: position }))
    }

    if (recipeId) {
      dispatch(onTryAddRecipeRating({ id: recipeId, rating: position }))
    }
  }

  return (
    <>
      <StarsContainer>
        <RatingStar
          position={1}
          rating={rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 1 < hoverPosition || 1 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
        <RatingStar
          position={2}
          rating={rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 2 < hoverPosition || 2 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
        <RatingStar
          position={3}
          rating={rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 3 < hoverPosition || 3 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
        <RatingStar
          position={4}
          rating={rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 4 < hoverPosition || 4 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
        <RatingStar
          position={5}
          rating={rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 5 < hoverPosition || 5 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
      </StarsContainer>
      {numberOfRatings < 10 && <ReviewCaption>Be one of the first to rate this recipe</ReviewCaption>}
      {numberOfRatings > 9 && <ReviewCaption>{`${numberOfRatings} reviews`}</ReviewCaption>}
    </>
  )
}

export default RatingBar
