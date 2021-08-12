import { HOUSEHOLD } from '../household/types';
import { PROFILE_STEPS } from '../profile/types';
import initialState from './initialState';
import { Shipments } from './interfaces';

const shipmentsReducers = (state: Shipments = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case HOUSEHOLD.FETCH_HOUSEHOLD_SUCCESS:
      return { ...state, shipments: action.payload.household.shipments }
    default:
      return state
  }
}

export default shipmentsReducers
