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
