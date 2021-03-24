import { NEWSLETTER_ACTION_TYPES } from './types'

const newsletterReducers = (state = { position: 0 }, action: { type: string; id: string; filter: string }) => {
  switch (action.type) {
    case NEWSLETTER_ACTION_TYPES.RESET:
      return { ...state, position: 0 }
    case NEWSLETTER_ACTION_TYPES.SUBMITTING:
      return { ...state, position: 1 }
    case NEWSLETTER_ACTION_TYPES.ADDED_SUCCESS:
      return { ...state, position: 2 }
    case NEWSLETTER_ACTION_TYPES.ADDED_FAILURE:
      return action
    default:
      return state
  }
}

export default newsletterReducers
