import { PROFILE_STEPS } from '../profile/types'
import initialState from './initialState'
import { BillingInformation } from './interface'

const billingReducers = (state: BillingInformation = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case PROFILE_STEPS.LOADING_SUCCESS:
      return { ...state, billingInformation: action.payload.billingInformation }
    default:
      return state
  }
}

export default billingReducers
