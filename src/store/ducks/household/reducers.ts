import { HouseholdMember, PROFILE_STEPS } from '../profile/types'
import initialState from './initialState'
import { Household } from './interfaces'

const householdReducers = (state: Household = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case PROFILE_STEPS.LOADING_SUCCESS:
      return { ...state, household: action.payload.household }
    default:
      return state
  }
}

export default householdReducers
