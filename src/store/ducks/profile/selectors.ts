export const getProfileData = (state: any) => state?.profile || {}

export const getUserId = (state: any) => {
  return getProfileData(state).userId
}

export const getProfileName = (state: any) => {
  return getProfileData(state).name
}

export const getProfileNameFirstLetter = (state: any) => {
  const name: string | undefined = getProfileName(state)
  if (name) {
    return name.substring(0, 1).toUpperCase()
  }
  return '';
}

export const getAccessToken = (state: any) => {
  return getProfileData(state).accessToken
}
