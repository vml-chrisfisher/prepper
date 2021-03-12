import {
  HEADER_ACTION_TYPES,
  NEWSLETTER_ACTION_TYPES,
  SEARCH_ACTION_TYPES,
  SIDEBAR_ANIMATION_STEPS,
} from '../actions/types'

const visibilityFilter = (
  state = { position: 0, showSearch: false, showHeaderProfile: SIDEBAR_ANIMATION_STEPS.DEFAULT },
  action: { type: string; id: string; filter: string },
) => {
  switch (action.type) {
    case NEWSLETTER_ACTION_TYPES.RESET:
      return { ...state, position: 0 }
    case NEWSLETTER_ACTION_TYPES.SUBMITTING:
      return { ...state, position: 1 }
    case NEWSLETTER_ACTION_TYPES.ADDED_SUCCESS:
      return { ...state, position: 2 }
    case NEWSLETTER_ACTION_TYPES.ADDED_FAILURE:
      return action
    case HEADER_ACTION_TYPES.SHOW_SEARCH:
      return { ...state, showSearch: true, showHeaderProfile: false }
    case HEADER_ACTION_TYPES.HIDE_SEARCH:
      return { ...state, showSearch: false }
    case HEADER_ACTION_TYPES.SHOW_PROFILE_LOGIN:
      return { ...state, showSearch: false, showHeaderProfile: SIDEBAR_ANIMATION_STEPS.SHOW }
    case HEADER_ACTION_TYPES.HIDE_PROFILE_LOGIN:
      return { ...state, showHeaderProfile: SIDEBAR_ANIMATION_STEPS.HIDE }
    default:
      return state
  }
}

export default visibilityFilter
