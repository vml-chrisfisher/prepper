import { RECIPEBOX } from './types'

export const onTryFetchRecipesBox = (payload: any) => ({
  type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
  payload,
})

export const onTryAddRecipe = (payload: any) => ({
  type: RECIPEBOX.TRY_ADD_RECIPE,
  payload,
})

export const onTryDeleteRecipe = (payload: any) => ({
  type: RECIPEBOX.TRY_DELETE_RECIPE,
  payload,
})

export const onTryAddRecipeView = (payload: any) => ({
  type: RECIPEBOX.TRY_ADD_RECIPE_VIEW,
  payload,
})

export const onTryAddRecipeCooked = (payload: any) => ({
  type: RECIPEBOX.TRY_ADD_RECIPE_COOKED,
})

export const onTryAddArticle = (payload: any) => ({
  type: RECIPEBOX.TRY_ADD_ARTICLE,
  payload,
})

export const onTryDeleteArticle = (payload: any) => ({
  type: RECIPEBOX.TRY_DELETE_ARTICLE,
  payload,
})

export const onTryAddArticleView = (payload: any) => ({
  type: RECIPEBOX.TRY_ADD_ARTICLE_VIEW,
  payload,
})
