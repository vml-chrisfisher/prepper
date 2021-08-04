import initialState from './initialState'
import { RATINGS } from './types'

const ratingsReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case RATINGS.FETCH_ALL_RECIPE_RATINGS_SUCCESS:
      return { ...state, recipes: action.payload }
    case RATINGS.FETCH_ALL_ARTICLE_RATINGS_SUCCESS:
      return { ...state, articles: action.payload }
    default:
      return state
  }
}

export default ratingsReducers
