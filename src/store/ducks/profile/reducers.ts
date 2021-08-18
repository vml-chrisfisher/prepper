import { LOGIN_STEPS, LOGOUT } from '../login/types'
import initialState from './initialState'
import { PROFILE_STEPS } from './types'
export const isBrowser = typeof window !== 'undefined'

const profileReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case PROFILE_STEPS.LOADING:
      return { ...state, profileStep: PROFILE_STEPS.LOADING }
    case PROFILE_STEPS.LOADING_SUCCESS:
      return { ...state, profileStep: PROFILE_STEPS.LOADING_SUCCESS }
    case PROFILE_STEPS.LOADING_FAILURE:
      return state
    case PROFILE_STEPS.UPDATING:
      return { ...state, profileStep: PROFILE_STEPS.UPDATING }
    case PROFILE_STEPS.UPDATING_SUCCESS:
      return state
    case PROFILE_STEPS.UPDATING_FAILURE:
      return state
    case PROFILE_STEPS.CREATE_PROFILE_DEFAULT:
      return { ...state, createProfileStep: PROFILE_STEPS.CREATE_PROFILE_DEFAULT }
    case PROFILE_STEPS.CREATE_PROFILE_FAILURE:
      return { ...state, createProfileStep: PROFILE_STEPS.CREATE_PROFILE_FAILURE }
    case PROFILE_STEPS.CREATE_PROFILE_SUCCESS:
      return { ...state, createProfileStep: PROFILE_STEPS.CREATE_PROFILE_SUCCESS }
    case PROFILE_STEPS.CREATING_PROFILE:
      return { ...state, createProfileStep: PROFILE_STEPS.CREATING_PROFILE }
    case LOGIN_STEPS.RELOGIN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
      }
    case LOGIN_STEPS.LOGIN_SUCCESS:
      if (isBrowser) {
        localStorage.setItem(
          'knifeAndFish',
          JSON.stringify({
            accessToken: action.payload.accessToken,
            userId: action.payload.userData[0].identities[0].user_id,
            name: action.payload.userData[0].name,
          }),
        )
      }

      return {
        ...state,
        accessToken: action.payload.accessToken,
        userId: action.payload.userData[0].identities[0].user_id,
        name: action.payload.userData[0].name,
      }
    case LOGIN_STEPS.LOCAL_STORAGE_LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
        name: action.payload.name,
      }
    case LOGOUT.LOGOUT_SUCCESS:
      return {
        ...state,
        accessToken: undefined,
        userId: undefined,
        name: undefined,
      }
    default:
      return state
  }
}

export default profileReducers
