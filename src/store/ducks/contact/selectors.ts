import { RecipeUploadStatus } from './initialState'

export const getContactData = (state: any) => state?.contact || {}

export const getContactTabShowing = (state: any) => {
  return getContactData(state).contactTabShowing
}

export const getHelloStep = (state: any) => {
  return getContactData(state).helloStep
}

export const getRecipeStep = (state: any) => {
  return getContactData(state).recipeStep
}

export const getSuggestionStep = (state: any) => {
  return getContactData(state).suggestionStep
}

export const getPartnershipStep = (state: any) => {
  return getContactData(state).partnershipStep
}

export const getUploadedFilesBucketName = (state: any) => {
  return getContactData(state).recipesUploaded.map((item: RecipeUploadStatus) => {
    return item.bucketLocation
  })
}

export const getUploadedFileStatus = (state: any, bucketFileName: string) => {
  console.log(state)
  const uploadedRecipe = getContactData(state).recipesUploaded.filter((item: RecipeUploadStatus) => {
    item.fileName === bucketFileName
  })

  if (uploadedRecipe.length) {
    return uploadedRecipe[0].completedPercentage
  }
  return undefined
}
