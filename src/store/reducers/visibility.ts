import { HEADER_ACTION_TYPES } from '../actions/types';


const visibilityFilter = (state = {}, action: {type: string, id: string, filter: string}) => {
  switch (action.type) {
    case HEADER_ACTION_TYPES.TEST:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter