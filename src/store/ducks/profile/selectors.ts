export const getProfileData = (state: any) => state?.profile || {}

export const getUserId = (state: any) => {
  console.log('GET USER ID: ', state.profile.userId, state.profile.accessToken)
  return getProfileData(state).userId
}

export const getAccessToken = (state: any) => {
  return getProfileData(state).accessToken
}
