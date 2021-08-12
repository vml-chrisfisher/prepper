import { HOUSEHOLD } from '../household/types';
import { PROFILE_STEPS } from '../profile/types';
import initialState from './initialState';
import { EmailPreferences } from './interfaces';

const emailPreferencesReducers = (state: EmailPreferences = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case HOUSEHOLD.FETCH_HOUSEHOLD_SUCCESS:
      return { ...state, ...action?.payload?.household?.emailPreferences }
    default:
      return state
  }
}

export default emailPreferencesReducers
