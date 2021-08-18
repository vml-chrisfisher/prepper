import { HouseholdMember, PROFILE_STEPS } from '../profile/types'
import initialState from './initialState'
import { Household } from './interfaces'
import { HOUSEHOLD } from './types'

const householdReducers = (state: any = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case HOUSEHOLD.TRY_FETCH_HOUSEHOLD:
    case HOUSEHOLD.FETCHING_HOUSEHOLD:
      return { ...state, sidebarStep: action.type }
    case HOUSEHOLD.FETCH_HOUSEHOLD_SUCCESS:
      return { ...state, ...action?.payload?.household, sidebarStep: action.type }
    default:
      return state
  }
}

export default householdReducers
