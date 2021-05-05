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
