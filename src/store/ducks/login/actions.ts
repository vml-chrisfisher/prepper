import { LOGIN_STEPS } from './types'

export const onSubmitLogin = (creditials: { username: string; password: string }) => ({
  type: LOGIN_STEPS.SUBMIT_LOGIN,
  payload: creditials,
})

export const onLpginSuccess = () => ({
  type: LOGIN_STEPS.LOGIN_SUCCESS,
})

export const onLoginFailure = () => ({
  type: LOGIN_STEPS.LOGIN_FAILURE,
})

export const onLoginReset = () => ({
  type: LOGIN_STEPS.DEFAULT,
})
