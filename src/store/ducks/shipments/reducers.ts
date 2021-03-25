import { PROFILE_STEPS } from '../profile/types'
import initialState from './initialState'

const shipmentsReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case PROFILE_STEPS.LOADING_SUCCESS:
      return { ...state, shipments: action.payload.shipments }
    default:
      return state
  }
}

export default shipmentsReducers
