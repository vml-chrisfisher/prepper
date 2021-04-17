import { CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS } from '../household/types'
import initialState from './initialState'
import { NEWSLETTER_ACTION_TYPES } from './types'

const newsletterReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  switch (action.type) {
    case NEWSLETTER_ACTION_TYPES.RESET:
      return { ...state, position: 0 }
    case NEWSLETTER_ACTION_TYPES.SUBMITTING:
      return { ...state, position: 1 }
    case NEWSLETTER_ACTION_TYPES.ADDED_SUCCESS:
      return { ...state, position: 2 }
    case NEWSLETTER_ACTION_TYPES.ADDED_FAILURE:
      return state
    default:
      return state
  }
}

export default newsletterReducers
