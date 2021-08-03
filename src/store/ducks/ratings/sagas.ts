import { call, put } from '@redux-saga/core/effects'
import axios from 'axios'
import { RATINGS } from './types'

const submitRecipeRating = (payload: { recipeId: string; rating: number }) => {
  return axios.post('', payload)
}

export function* submitRecipeRatingAsync(action: any) {
  yield put({
    type: RATINGS.ADDING_RECIPE_RATING,
  })

  const { recipeId, rating } = action.payload

  if (recipeId && rating) {
    const payload = action.payload

    try {
      const addRatingResponse = yield call(submitRecipeRating, payload)

      yield put({
        type: RATINGS.ADD_RECIPE_RATING_SUCCESS,
      })

      yield put({
        type: RATINGS.TRY_FETCH_ALL_RECIPE_RATINGS,
      })
    } catch (error) {
      yield put({
        type: RATINGS.ADD_RECIPE_RATING_FAILURE,
      })
    }
  } else {
    yield put({
      type: RATINGS.ADD_RECIPE_RATING_FAILURE,
    })
  }
}

const fetchAllRecipeRatings = () => {
  return axios.get('')
}

export function* fetchAllRecipeRatingsAsync(action: any) {
  yield put({
    type: RATINGS.FETCHING_ALL_RECIPE_RATINGS,
  })

  try {
    const fetchRatingsResponse = yield call(fetchAllRecipeRatings)

    yield put({
      type: RATINGS.FETCH_ALL_RECIPE_RATINGS_SUCCESS,
      payload: fetchRatingsResponse,
    })
  } catch (error) {
    yield put({
      type: RATINGS.FETCH_ALL_RECIPE_RATINGS_FAILURE,
    })
  }
}

const submitArticleRating = (payload: { articleId: string; rating: number }) => {
  return axios.post('', payload)
}

export function* submitArticleRatingAsync(action: any) {
  yield put({
    type: RATINGS.ADDING_ARTICLE_RATING,
  })

  const { articleId, rating } = action.payload

  if (articleId && rating) {
    const payload = action.payload

    try {
      const addRatingResponse = yield call(submitArticleRating, payload)

      yield put({
        type: RATINGS.ADD_ARTICLE_RATING_SUCCESS,
      })

      yield put({
        type: RATINGS.TRY_FETCH_ALL_ARTICLE_RATINGS,
      })
    } catch (error) {
      yield put({
        type: RATINGS.ADD_ARTICLE_RATING_FAILURE,
      })
    }
  } else {
    yield put({
      type: RATINGS.ADD_ARTICLE_RATING_FAILURE,
    })
  }
}

const fetchAllArticleRatings = () => {
  return axios.get('')
}

export function* fetchAllArticleRatingsAsync(action: any) {
  yield put({
    type: RATINGS.FETCHING_ALL_ARTICLE_RATINGS,
  })

  try {
    const fetchRatingsResponse = yield call(fetchAllArticleRatings)

    yield put({
      type: RATINGS.FETCH_ALL_ARTICLE_RATINGS_SUCCESS,
      payload: fetchRatingsResponse,
    })
  } catch (error) {
    yield put({
      type: RATINGS.FETCH_ALL_ARTICLE_RATINGS_FAILURE,
    })
  }
}
