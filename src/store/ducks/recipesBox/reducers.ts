import initialState from './initialState'
import { RECIPEBOX } from './types'

const loginReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case RECIPEBOX.ADD_RECIPE_SUCCESS:
    case RECIPEBOX.ADD_RECIPE_FAILURE:
    case RECIPEBOX.DELETE_RECIPE_SUCCESS:
    case RECIPEBOX.DELETE_RECIPE_FAILURE:
      return { ...state, recipes: action.payload }

    default:
      return state
  }
}

export default loginReducers
