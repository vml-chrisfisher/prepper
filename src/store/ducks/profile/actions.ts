import { createPromiseAction } from '@adobe/redux-saga-promise';
import { ProfileSubmit } from './interface';
import { PROFILE, PROFILE_STEPS } from './types';

export const onFetchProfile = (userId: string) => ({
  type: PROFILE_STEPS.LOAD,
  payload: { userId: userId },
})

export const onTryCreateNewProfile = createPromiseAction(PROFILE.TRY_CREATE_NEW_PROFILE)

export const onCreateProfileSuccess = (payload: any) => ({
  type: PROFILE.CREATE_NEW_PROFILE_SUCCESS,
  payload
})

export const onCreateProfileFailure = (payload: any) => ({
  type: PROFILE.CREATE_NEW_PROFILE_FAILURE,
  payload
})
