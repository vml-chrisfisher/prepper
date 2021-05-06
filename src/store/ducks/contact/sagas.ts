import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { isBrowser } from '../../../utils/auth'
import { CONTACT_HELLO_STEPS, CONTACT_PARTNERSHIP_STEPS, CONTACT_RECIPE_STEPS, CONTACT_SUGGESTION_STEPS } from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const submitHelloContact = (payload: { helloName: string; helloEmail: string; helloMessage: string }) => {
  return axios.post('https://rzg7h98b14.execute-api.us-east-1.amazonaws.com/stage/login', payload)
}

export function* submitHelloContactAsync(action: any) {
  yield put({
    type: CONTACT_HELLO_STEPS.SUBMITTING_HELLO,
  })
  const { helloName, helloEmail, helloMessage } = action.payload
  const payload = { helloName, helloEmail, helloMessage }
  if (payload) {
    try {
      const response = yield call(submitHelloContact, payload)

      yield put({
        type: CONTACT_HELLO_STEPS.HELLO_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      console.log('HELLO CONTACT ERROR: ', error)
      yield put({
        type: CONTACT_HELLO_STEPS.HELLO_SUBMIT_FAILURE,
      })
    }
  } else {
    yield put({
      type: CONTACT_HELLO_STEPS.HELLO_SUBMIT_FAILURE,
    })
  }
}

const submitContactRecipe = (payload: { recipeName: string; recipeEmail: string; recipeMessage: string }) => {
  return axios.post('https://rzg7h98b14.execute-api.us-east-1.amazonaws.com/stage/login', payload)
}

export function* submitRecipeContactAsync(action: any) {
  yield put({
    type: CONTACT_RECIPE_STEPS.SUBMITTING_RECIPE,
  })
  const { recipeName, recipeEmail, recipeMessage } = action.payload
  const payload = { recipeName, recipeEmail, recipeMessage }
  if (payload) {
    try {
      const response = yield call(submitContactRecipe, payload)

      yield put({
        type: CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      console.log('HELLO RECIPE ERROR: ', error)
      yield put({
        type: CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_FAILURE,
      })
    }
  } else {
    yield put({
      type: CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_FAILURE,
    })
  }
}

const submitContactSuggestion = (payload: { recipeName: string; recipeEmail: string; recipeMessage: string }) => {
  return axios.post('https://rzg7h98b14.execute-api.us-east-1.amazonaws.com/stage/login', payload)
}

export function* submitSuggestionContactAsync(action: any) {
  yield put({
    type: CONTACT_SUGGESTION_STEPS.SUBMITTING_SUGGESTION,
  })
  const { suggestionName, suggestionEmail, suggestionMessage } = action.payload
  const payload = { suggestionName, suggestionEmail, suggestionMessage }
  if (payload) {
    try {
      const response = yield call(submitContactSuggestion, payload)

      yield put({
        type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      console.log('HELLO RECIPE ERROR: ', error)
      yield put({
        type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_FAILURE,
      })
    }
  } else {
    yield put({
      type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_FAILURE,
    })
  }
}

const submitContactPartnership = (payload: {
  partnershipName: string
  partnershipCompany: string
  partnershipEmail: string
  partnershipPhone: string
  partnershipMessage: string
}) => {
  return axios.post('https://rzg7h98b14.execute-api.us-east-1.amazonaws.com/stage/login', payload)
}

export function* submitPartnershipContactAsync(action: any) {
  yield put({
    type: CONTACT_PARTNERSHIP_STEPS.SUBMITTING_PARTNERSHIP,
  })
  const { partnershipName, partnershipCompany, partnershipEmail, partnershipPhone, partnershipMessage } = action.payload
  const payload = { partnershipName, partnershipCompany, partnershipEmail, partnershipPhone, partnershipMessage }
  if (payload) {
    try {
      const response = yield call(submitContactPartnership, payload)

      yield put({
        type: CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      console.log('HELLO RECIPE ERROR: ', error)
      yield put({
        type: CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_FAILURE,
      })
    }
  } else {
    yield put({
      type: CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_FAILURE,
    })
  }
}
