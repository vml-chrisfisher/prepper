import { RATINGS } from './types'

export const onTryAddRecipeRating = (payload: any) => ({
  type: RATINGS.TRY_ADD_RECIPE_RATING,
  payload,
})

export const onTryFetchRecipeRating = (payload: any) => ({
  type: RATINGS.TRY_FETCH_RECIPE_RATING,
})

export const onTryAddArticleRating = (payload: any) => ({
  type: RATINGS.TRY_ADD_ARTICLE_RATING,
  payload,
})

export const onTryFetchArticleRating = (payload: any) => ({
  type: RATINGS.TRY_FETCH_ARTICLE_RATING,
  payload,
})
