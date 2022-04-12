import { NEWSLETTER_ACTION_TYPES, NEWSLETTER_LINKID_TYPES, RECIPE_RATINGS_EMAIL_TYPES } from './types'
export const onNewsletterReset = () => ({
  type: NEWSLETTER_ACTION_TYPES.RESET,
})

export const onNewsletterSubmit = (email: string) => ({
  type: NEWSLETTER_ACTION_TYPES.SUBMIT,
  email,
})

export const onTryNewsletterLinkIdFetch = () => ({
  type: NEWSLETTER_LINKID_TYPES.TRY_FETCH,
})

export const onTryNewsletterLinkIdSubmit = (linkId: string) => ({
  type: NEWSLETTER_LINKID_TYPES.TRY_SUBMIT,
  linkId,
})

export const onTryRecipeRatingsEmailSubmit = (payload: {
  linkId: string
  recipeId: string
  imageUrl: string
  recipeName: string
}) => ({
  type: RECIPE_RATINGS_EMAIL_TYPES.TRY_SUBMIT,
  payload,
})
