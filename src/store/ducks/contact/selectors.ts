import { RecipeUploadStatus } from './initialState';
import {
  CONTACT_HELLO_STEPS,
  CONTACT_PARTNERSHIP_STEPS,
  CONTACT_RECIPE_STEPS,
  CONTACT_SUGGESTION_STEPS
  } from './types';

export const getContactData = (state: any) => state?.contact || {}

export const getContactTabShowing = (state: any) => {
  return getContactData(state).contactTabShowing
}

export const getHelloStep = (state: any) => {
  switch (getContactData(state).helloStep) {
    case CONTACT_HELLO_STEPS.DEFAULT:
    case CONTACT_HELLO_STEPS.HELLO_RESET:
    case CONTACT_HELLO_STEPS.HELLO_SUBMIT_FAILURE:
      return 0
    case CONTACT_HELLO_STEPS.SUBMITTING_HELLO:
      return 1
    case CONTACT_HELLO_STEPS.HELLO_SUBMIT_SUCCESS:
      return 0
    default:
      return 0
  }
}

export const getRecipeStep = (state: any) => {
  const step = getContactData(state).recipeStep
    switch (step) {
      case CONTACT_RECIPE_STEPS.DEFAULT:
      case CONTACT_RECIPE_STEPS.RECIPE_RESET:
      case CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_FAILURE:
        return 0
      case CONTACT_RECIPE_STEPS.SUBMITTING_RECIPE:
        return 1
      case CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_SUCCESS:
        return 0
      default:
        return 0
    }
}

export const getSuggestionStep = (state: any) => {
  const step = getContactData(state).suggestionStep
    switch (step) {
      case CONTACT_SUGGESTION_STEPS.DEFAULT:
      case CONTACT_SUGGESTION_STEPS.SUGGESTION_RESET:
      case CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_FAILURE:
        return 0
      case CONTACT_SUGGESTION_STEPS.SUBMITTING_SUGGESTION:
        return 1
      case CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_SUCCESS:
        return 0
      default:
        return 0
    }
}

export const getPartnershipStep = (state: any) => {
  const step =getContactData(state).partnershipStep
    switch (step) {
      case CONTACT_PARTNERSHIP_STEPS.DEFAULT:
      case CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_RESET:
      case CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_FAILURE:
        return 0
      case CONTACT_PARTNERSHIP_STEPS.SUBMITTING_PARTNERSHIP:
        return 1
      case CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_SUCCESS:
        return 0
      default:
        return 0
    }
}

export const getContactSelectedTab = (state: any) => {
  return getContactData(state).contactTabShowing
}

export const getRecipeName = (state: any) => {
  return getContactData(state).recipeName
}

export const getRecipeEmail = (state: any) => {
  return getContactData(state).recipeEmail
}

export const getRecipeMessage = (state: any) => {
  return getContactData(state).recipeMessage
}

export const getUploadedRecipes = (state: any) => {
  return getContactData(state).recipesUploaded
}

export const getUploadedRecipeBucketNames = (state: any) => {
  return getUploadedRecipes(state).map((item: RecipeUploadStatus) => {
    return item.fileName
  })
}

export const getUploadedFilesBucketNames = (state: any) => {
  return getContactData(state).recipesUploaded.map((item: RecipeUploadStatus) => {
    return item.bucketLocation
  })
}

export const getUploadedFileStatus = (state: any, bucketFileName: string) => {
  const uploadedRecipe = getContactData(state).recipesUploaded.filter((item: RecipeUploadStatus) => {
    item.fileName === bucketFileName
  })

  if (uploadedRecipe.length) {
    return uploadedRecipe[0].completedPercentage
  }
  return undefined
}
