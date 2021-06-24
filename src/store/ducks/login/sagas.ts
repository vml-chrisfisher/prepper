import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { isBrowser } from '../../../utils/auth'
import { LOGIN_STEPS } from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const submitLogin = (creditials: { username: string; password: string }) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/login', creditials)
}

export function* submitLoginAsync(action: any) {
  yield put({
    type: LOGIN_STEPS.LOGGING_IN,
  })

  const { username, password } = action.payload
  const creditials = { username, password }
  if (creditials) {
    try {
      const loginResponse = yield call(submitLogin, creditials)
      if (isBrowser) {
        localStorage.setItem('hasLoggedInBefore', 'true')
      }
      console.log(loginResponse)
      yield put({
        type: LOGIN_STEPS.LOGIN_SUCCESS,
        payload: loginResponse.data.message,
      })
    } catch (error) {
      console.log('LOGIN ERROR: ', error)
      yield put({
        type: LOGIN_STEPS.LOGIN_FAILURE,
      })
    }
  } else {
    yield put({
      type: LOGIN_STEPS.LOGIN_FAILURE,
    })
  }
}
