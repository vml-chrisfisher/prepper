import { HouseholdMember, PROFILE_STEPS } from '../profile/types';
import initialState from './initialState';
import { Household } from './interfaces';
import { HOUSEHOLD } from './types';

const householdReducers = (state: Household = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case HOUSEHOLD.FETCH_HOUSEHOLD_SUCCESS:
      console.log("YO MAMA: ",action?.payload?.household)
      return { ...state, ...action?.payload?.household.householdMembers}
    default:
      return state
  }
}

export default householdReducers
