import initialState from './initialState'
import { RATINGS } from './types'

const ratingsReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  switch (action?.type) {
    case RATINGS.FETCH_RECIPE_RATING_SUCCESS:
      return { ...state, recipes: action.payload }
    case RATINGS.FETCH_ARTICLE_RATING_SUCCESS:
      return { ...state, articles: action.payload }
  }
}

export default ratingsReducers
