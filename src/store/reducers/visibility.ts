import { HEADER_ACTION_TYPES, NEWSLETTER_ACTION_TYPES } from '../actions/types'

const visibilityFilter = (state = {}, action: { type: string; id: string; filter: string }) => {
    console.log('THERE: ', action)
    switch (action.type) {
        case HEADER_ACTION_TYPES.TEST:
            return action.filter
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

export default visibilityFilter
