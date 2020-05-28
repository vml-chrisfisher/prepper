import { NEWSLETTER_ACTION_TYPES } from '../actions/types'


const newsletterFilter = (state = {}, action: { type: string, id: string, filter: string }) => {
  switch (action.type) {
    case NEWSLETTER_ACTION_TYPES.SUBMITTING:
      return action
    case NEWSLETTER_ACTION_TYPES.ADDED_SUCCESS:
      return action
    case NEWSLETTER_ACTION_TYPES.ADDED_FAILURE:
      return action
    default:
      return state
  }
}

export default newsletterFilter