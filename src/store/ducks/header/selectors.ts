export const getHeaderData = (state: any) => state?.header || {}

export const getShowHeaderProfile = (state: any) => {
  return getHeaderData(state).showHeaderProfile
}

export const getShowHeaderRegisterLoginNotification = (state: any) => {
  return getHeaderData(state).showRecipesBoxLoginRegisterNotification
}
