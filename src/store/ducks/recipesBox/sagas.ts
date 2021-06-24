import axios from 'axios'
import { actionChannel, call, put } from 'redux-saga/effects'
import { RECIPEBOX } from './types'

const fetchRecipesBox = (creditials: { userId: string }) => {
  return axios.get(' https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox', creditials)
}

export function* fetchRecipesBoxAsync(action: any) {
  yield put({
    type: RECIPEBOX.FETCHING_RECIPEBOX,
  })

  const userId = action.payload
  if (userId) {
    try {
      const fetchResponse = yield call(fetchRecipesBox, { userId: userId })

      yield put({
        type: RECIPEBOX.FETCHED_RECIPEBOX_SUCCESS,
        payload: fetchResponse,
      })
    } catch (error) {
      console.log('RECIPE BOX FETCH ERROR:', error)
      yield put({
        type: RECIPEBOX.FETCHED_RECIPEBOX_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.FETCHED_RECIPEBOX_FAILURE,
    })
  }
}

const submitRecipeBoxRecipeAdd = (creditials: { recipeId: string }) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/articles/add', creditials)
}

export function* submitRecipeBoxRecipeAddAsync(action: any) {
  yield put({
    type: RECIPEBOX.ADDING_RECIPE,
  })

  const { userId, recipeId } = action.payload
  const creditials = { userId, recipeId }
  if (userId && recipeId) {
    try {
      const loginResponse = yield call(submitRecipeBoxRecipeAdd, creditials)

      yield put({
        type: RECIPEBOX.ADD_RECIPE_SUCCESS,
        payload: loginResponse.data.message,
      })
    } catch (error) {
      console.log('LOGIN ERROR: ', error)
      yield put({
        type: RECIPEBOX.ADD_RECIPE_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.ADD_RECIPE_FAILURE,
    })
  }
}

const submitRecipeBoxRecipeDelete = (creditials: { recipeId: string }) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/articles/delete', creditials)
}

export function* submitRecipeBoxRecipeDeleteAsync(action: any) {
  yield put({
    type: RECIPEBOX.DELETING_RECIPE,
  })

  const { userId, recipeId } = action.payload
  const creditials = { userId, recipeId }
  if (userId && recipeId) {
    try {
      const loginResponse = yield call(submitRecipeBoxRecipeDelete, creditials)

      yield put({
        type: RECIPEBOX.DELETE_RECIPE_SUCCESS,
        payload: loginResponse.data.message,
      })
    } catch (error) {
      console.log('LOGIN ERROR: ', error)
      yield put({
        type: RECIPEBOX.DELETE_RECIPE_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.DELETE_RECIPE_FAILURE,
    })
  }
}
