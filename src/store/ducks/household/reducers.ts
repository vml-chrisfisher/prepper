import { PROFILE_STEPS } from '../profile/types'
import initialState from './initialState'

const householdReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case PROFILE_STEPS.LOADING_SUCCESS:
      return { ...state, householdMembers: action.payload.householdMembers }
    default:
      return state
  }
}

export default householdReducers
