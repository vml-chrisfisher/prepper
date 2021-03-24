import { PROFILE_STEPS } from './types'

export const onFetchProfile = (userId: string) => ({
  type: PROFILE_STEPS.LOAD,
  payload: { userId: userId },
})
