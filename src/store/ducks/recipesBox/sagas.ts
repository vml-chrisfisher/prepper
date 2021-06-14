import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { RECIPEBOX } from './types'

const submitRecipeBoxRecipeAdd = (creditials: { recipeId: string }) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/login', creditials)
}

export function* submitRecipeBoxRecipeAddAsync(action: any) {
  yield put({
    type: RECIPEBOX.ADDING_RECIPE,
  })

  const { recipeId } = action.payload
  const creditials = { recipeId }
  if (creditials) {
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
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/login', creditials)
}

export function* submitRecipeBoxRecipeDeleteAsync(action: any) {
  yield put({
    type: RECIPEBOX.DELETING_RECIPE,
  })

  const { recipeId } = action.payload
  const creditials = { recipeId }
  if (creditials) {
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
