import { PROFILE_STEPS } from '../profile/types'
import initialState from './initialState'
import { GroceriesPreferences } from './interfaces'

const groceriesReducers = (state: GroceriesPreferences = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case PROFILE_STEPS.LOADING_SUCCESS:
      return { ...state, groceries: action.payload.groceries }
    default:
      return state
  }
}

export default groceriesReducers
