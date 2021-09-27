import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../../store/ducks/ratings/interface'
import { getArticleRating, getRecipeRating } from '../../store/ducks/ratings/selectors'
import { RatingBarProps } from './interface.'
import RatingStar from './ratingStar'
import {
  onTryAddArticleRating,
  onTryAddRecipeRating,
  onTryFetchArticleRating,
  onTryFetchRecipeRating,
} from '../../store/ducks/ratings/action'

const RatingBar = (props: RatingBarProps) => {
  const { articleId, recipeId, isSummary } = props

  const dispatch = useDispatch()

  const rating: Rating = useSelector((state) => {
    if (articleId) {
      return getArticleRating(state, articleId)
    }

    if (recipeId) {
      return getRecipeRating(state, recipeId)
    }

    return {
      id: '',
      rating: 1,
      numberOfRatings: 0,
    }
  })

  const [hoverPosition, setHoverPosition] = useState(-1)

  const ReviewCaption = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
  `

  const StarsContainer = styled.div`
    display: inline-block;
    margin-top: 5px;
    width: 100%;
  `

  const onHover = (position: number) => {
    if (!isSummary) {
      setHoverPosition(position)
    }
  }

  const onMouseOut = () => {
    if (!isSummary) {
      setHoverPosition(-1)
    }
  }

  const onStarRatingClick = (position: number) => {
    if (articleId && !isSummary) {
      dispatch(onTryAddArticleRating({ articleId: articleId, rating: position }))
    }

    if (recipeId && !isSummary) {
      dispatch(onTryAddRecipeRating({ recipeId: recipeId, rating: position }))
    }
  }

  useEffect(() => {
    if (articleId) {
      dispatch(onTryFetchArticleRating())
    }

    if (recipeId) {
      dispatch(onTryFetchRecipeRating())
    }
  }, [articleId, recipeId])

  return (
    <>
      <StarsContainer>
        <RatingStar
          position={1}
          rating={rating.rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 1 < hoverPosition || 1 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
        <RatingStar
          position={2}
          rating={rating.rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 2 < hoverPosition || 2 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
        <RatingStar
          position={3}
          rating={rating.rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 3 < hoverPosition || 3 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
        <RatingStar
          position={4}
          rating={rating.rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 4 < hoverPosition || 4 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
        <RatingStar
          position={5}
          rating={rating.rating}
          onHover={onHover}
          onMouseOut={onMouseOut}
          onStarClick={onStarRatingClick}
          isPartHover={
            hoverPosition === -1 ? 'ratingPart' : 5 < hoverPosition || 5 === hoverPosition ? 'filled' : 'outline'
          }
        ></RatingStar>
      </StarsContainer>
      {rating.numberOfRatings < 10 && !isSummary && (
        <ReviewCaption>Be one of the first to rate this recipe</ReviewCaption>
      )}
      {rating.numberOfRatings > 9 && !isSummary && <ReviewCaption>{`${rating.numberOfRatings} reviews`}</ReviewCaption>}
    </>
  )
}

export default RatingBar
