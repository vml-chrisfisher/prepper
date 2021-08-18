import initialState from './initialState'
import { LOGIN_STEPS, LOGOUT } from './types'

const loginReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case LOGIN_STEPS.DEFAULT:
      return { ...state, loginStep: LOGIN_STEPS.DEFAULT }
    case LOGIN_STEPS.SUBMIT_LOGIN:
      return { ...state, loginStep: LOGIN_STEPS.SUBMIT_LOGIN, creditials: action.payload }
    case LOGIN_STEPS.LOGGING_IN:
      return { ...state, loginStep: LOGIN_STEPS.LOGGING_IN }
    case LOGIN_STEPS.LOGIN_FAILURE:
      return { ...state, loginStep: LOGIN_STEPS.LOGIN_FAILURE }
    case LOGIN_STEPS.RELOGIN:
      return {
        ...state,
        loginStep: LOGIN_STEPS.LOGIN_SUCCESS,
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
      }
    case LOGIN_STEPS.LOGIN_SUCCESS:
      return {
        ...state,
        loginStep: LOGIN_STEPS.LOGIN_SUCCESS,
        accessToken: action.payload.accessToken,
        userId: action.payload.userData[0].user_id,
      }
    case LOGIN_STEPS.LOCAL_STORAGE_LOGIN_SUCCESS:
      return {
        ...state,
        loginStep: LOGIN_STEPS.LOGIN_SUCCESS,
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
      }
    case LOGOUT.LOGOUT_SUCCESS:
      return {
        ...state,
        loginStep: LOGIN_STEPS.DEFAULT,
        accessToken: undefined,
        userId: undefined,
      }
    default:
      return state
  }
}

export default loginReducers
