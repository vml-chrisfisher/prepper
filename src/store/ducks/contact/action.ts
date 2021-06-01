import {
  CONTACT_ACTION_TYPES,
  CONTACT_HELLO_STEPS,
  CONTACT_PARTNERSHIP_STEPS,
  CONTACT_RECIPE_STEPS,
  CONTACT_SUGGESTION_STEPS,
} from './types'

export const showHello = () => ({
  type: CONTACT_ACTION_TYPES.SHOW_HELLO,
})

export const showRecipe = () => ({
  type: CONTACT_ACTION_TYPES.SHOW_RECIPE,
})

export const showSuggestion = () => ({
  type: CONTACT_ACTION_TYPES.SHOW_SUGGESTION,
})

export const showPartnership = () => ({
  type: CONTACT_ACTION_TYPES.SHOW_PARTNERSHIP,
})

/*
Actions fo submitting a hello message from the contact page
*/

export const onSubmitContactHello = (payload: any) => ({
  type: CONTACT_HELLO_STEPS.SUBMIT_HELLO,
  payload,
})

export const onSubmitContactHelloSuccess = (payload: any) => ({
  type: CONTACT_HELLO_STEPS.HELLO_SUBMIT_SUCCESS,
  payload,
})

export const onSubmitContactHelloFailure = (payload: any) => ({
  type: CONTACT_HELLO_STEPS.HELLO_SUBMIT_FAILURE,
  payload,
})

export const onContactHelloReset = () => ({
  type: CONTACT_HELLO_STEPS.HELLO_RESET,
})

/*
Actions for submitting a recipe from the contact page
*/

export const onSubmitContactRecipe = (payload: any) => ({
  type: CONTACT_RECIPE_STEPS.SUBMIT_RECIPE,
  payload,
})

export const onSubmitContactRecipeSuccess = (payload: any) => ({
  type: CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_SUCCESS,
  payload,
})

export const onSubmitContactRecipeFailure = (payload: any) => ({
  type: CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_FAILURE,
  payload,
})

export const onContactRecipeReset = () => ({
  type: CONTACT_RECIPE_STEPS.RECIPE_RESET,
})

export const onRecipeUploaded = (payload: any) => ({
  type: CONTACT_RECIPE_STEPS.UPDATE_RECIPE_UPLOADED,
  payload,
})

/*
Actions for submitting a suggestion from the contact page
*/

export const onSubmitContactSuggestion = (payload: any) => ({
  type: CONTACT_SUGGESTION_STEPS.SUBMIT_SUGGESTION,
  payload,
})

export const onSubmitContactSuggestionSuccess = (payload: any) => ({
  type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_SUCCESS,
  payload,
})

export const onSubmitContactSuggestionFailure = (payload: any) => ({
  type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_FAILURE,
  payload,
})

export const onContactSuggestionReset = () => ({
  type: CONTACT_SUGGESTION_STEPS.SUGGESTION_RESET,
})

/*
Actions for submitting a partnership from the contact page
*/

export const onSubmitContactPartnership = (payload: any) => ({
  type: CONTACT_PARTNERSHIP_STEPS.SUBMIT_PARTNERSHIP,
  payload,
})

export const onSubmitContactPartnershipSuccess = (payload: any) => ({
  type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_SUCCESS,
  payload,
})

export const onSubmitContactPartnershipFailure = (payload: any) => ({
  type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_FAILURE,
  payload,
})

export const onContactPartnershipReset = () => ({
  type: CONTACT_SUGGESTION_STEPS.SUGGESTION_RESET,
})
