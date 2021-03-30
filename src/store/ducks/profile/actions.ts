import { PROFILE_STEPS } from './types'

export const onFetchProfile = (userId: string) => ({
  type: PROFILE_STEPS.LOAD,
  payload: { userId: userId },
})

export const startCreateProfile = (profileInfo: any) => ({
  type: PROFILE_STEPS.START_CREATE_PROFILE,
  payload: profileInfo,
})
