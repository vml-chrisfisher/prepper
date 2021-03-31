import { CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS } from '../household/types'
import { NEWSLETTER_ACTION_TYPES } from './types'

const newsletterReducers = (state = { position: 0 }, action: { type: string; id: string; filter: string }) => {
  switch (action.type) {
    case NEWSLETTER_ACTION_TYPES.RESET:
      return { ...state, position: 0 }
    case CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS.SUBMITTING:
      return { ...state, position: 1 }
    case CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS.SUCCESS:
      return { ...state, position: 2 }
    case CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS.FAILURE:
      return action
    default:
      return state
  }
}

export default newsletterReducers
