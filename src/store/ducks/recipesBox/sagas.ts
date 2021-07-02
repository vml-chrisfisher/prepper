import axios from 'axios';
import { actionChannel, call, put } from 'redux-saga/effects';
import { RECIPEBOX } from './types';

const fetchRecipesBox = (userId: string) => {
  console.log(userId)
  return axios.get(`https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/${userId}`)
}

export function* fetchRecipesBoxAsync(action: any) {
  yield put({
    type: RECIPEBOX.FETCHING_RECIPEBOX,
  })
  console.log("ACTION: ", action.payload)
  const userId = action.payload
  console.log("SAGA USERID: ", userId)
  if (userId) {
    try {
      const fetchResponse = yield call(fetchRecipesBox, userId)

      yield put({
        type: RECIPEBOX.FETCHED_RECIPEBOX_SUCCESS,
        payload: fetchResponse,
      })

      // yield put ({
      //   type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
      //   payload: userId
      // })
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
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/recipe/add', creditials)
}

export function* submitRecipeBoxRecipeAddAsync(action: any) {
  yield put({
    type: RECIPEBOX.ADDING_RECIPE,
  })

  const { userId, recipeId, recipeName } = action.payload
  const creditials = { userId, recipeId }
  if (userId && recipeId) {
    try {
      yield call(submitRecipeBoxRecipeAdd, creditials)

      yield put({
        type: RECIPEBOX.ADD_RECIPE_SUCCESS,
        payload: {
          recipeId: recipeId,
          recipeName: recipeName
        },
      })
      yield put({
        type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
        payload: userId
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
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/recipe/delete', creditials)
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
      yield put({
        type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
        payload: userId
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

const submitRecipeBoxArticlesAdd = (creditials: { articleId: string }) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/article/add', creditials)
}

export function* submitRecipeBoxArticleAddAsync(action: any) {
  yield put({
    type: RECIPEBOX.ADDING_ARTICLE,
  })

  const { userId, articleId, articleName } = action.payload
  const creditials = { userId, articleId }
  if (userId && articleId) {
    try {
      yield call(submitRecipeBoxArticlesAdd, creditials)

      yield put({
        type: RECIPEBOX.ADD_ARTICLE_SUCCESS,
        payload: {
          articleId: articleId,
          articleName: articleName
        },
      })
      yield put({
        type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
        payload: userId
      })
    } catch (error) {
      yield put({
        type: RECIPEBOX.ADD_ARTICLE_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.ADD_ARTICLE_FAILURE,
    })
  }
}

const submitRecipeBoxArticleDelete = (creditials: { articleId: string }) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/article/delete', creditials)
}

export function* submitRecipeBoxArticleDeleteAsync(action: any) {
  yield put({
    type: RECIPEBOX.DELETING_ARTICLE,
  })

  const { userId, articleId } = action.payload
  const creditials = { userId, articleId }
  if (userId && articleId) {
    try {
      const loginResponse = yield call(submitRecipeBoxArticleDelete, creditials)

      yield put({
        type: RECIPEBOX.DELETE_ARTICLE_SUCCESS,
        payload: loginResponse.data.message,
      })
      yield put({
        type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
        payload: userId
      })
    } catch (error) {
      console.log('LOGIN ERROR: ', error)
      yield put({
        type: RECIPEBOX.DELETE_ARTICLE_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.DELETE_ARTICLE_FAILURE,
    })
  }
}
