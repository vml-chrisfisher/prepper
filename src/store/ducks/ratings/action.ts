import { RATINGS } from './types'

export const onTryAddRecipeRating = (payload: any) => ({
  type: RATINGS.TRY_ADD_RECIPE_RATING,
  payload,
})

export const onTryFetchRecipeRating = () => ({
  type: RATINGS.TRY_FETCH_ALL_RECIPE_RATINGS,
})

export const onTryAddArticleRating = (payload: any) => ({
  type: RATINGS.TRY_ADD_ARTICLE_RATING,
  payload,
})

export const onTryFetchArticleRating = () => ({
  type: RATINGS.TRY_FETCH_ALL_ARTICLE_RATINGS,
})
