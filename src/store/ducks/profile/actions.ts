import { PROFILE_STEPS } from './types'

export const onFetchProfile = (userId: string) => ({
  type: PROFILE_STEPS.LOAD,
  payload: { userId: userId },
})

export const createProfile = (profileInfo: any) => ({
  type: PROFILE_STEPS.CREATE_PROFILE,
  payload: profileInfo,
})
