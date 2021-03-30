import { PROFILE_STEPS } from '../profile/types'
import initialState from './initialState'
import { Shipments } from './interfaces'

const shipmentsReducers = (state: Shipments = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case PROFILE_STEPS.LOADING_SUCCESS:
      return { ...state, shipments: action.payload.shipments }
    default:
      return state
  }
}

export default shipmentsReducers
