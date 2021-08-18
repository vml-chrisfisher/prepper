import { LOGIN_STEPS, LOGOUT } from './types'

export const onSubmitLogin = (creditials: { username: string; password: string }) => ({
  type: LOGIN_STEPS.SUBMIT_LOGIN,
  payload: creditials,
})

export const onLoginSuccess = () => ({
  type: LOGIN_STEPS.LOGIN_SUCCESS,
})

export const onRelogin = (payload: any) => ({
  type: LOGIN_STEPS.RELOGIN,
  payload,
})

export const onLoginFailure = () => ({
  type: LOGIN_STEPS.LOGIN_FAILURE,
})

export const onLoginReset = () => ({
  type: LOGIN_STEPS.DEFAULT,
})

export const tryLocalStorageLogin = () => ({
  type: LOGIN_STEPS.TRY_LOCAL_STORAGE_LOGIN,
})

export const onTryLogout = () => ({
  type: LOGOUT.TRY_LOGOUT,
})
