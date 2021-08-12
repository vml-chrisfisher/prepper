import { HOUSEHOLD } from '../household/types';
import { PROFILE_STEPS } from '../profile/types';
import initialState from './initialState';
import { BillingInformation } from './interface';

const billingReducers = (state: BillingInformation = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case HOUSEHOLD.FETCH_HOUSEHOLD_SUCCESS:
      return { ...state, billingInformation: action.payload.household.billingInformation }
    default:
      return state
  }
}

export default billingReducers
