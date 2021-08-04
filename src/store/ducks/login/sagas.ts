import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { isBrowser } from '../../../utils/auth'
import { RECIPEBOX } from '../recipesBox/types'
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
      yield put({
        type: LOGIN_STEPS.LOGIN_SUCCESS,
        payload: loginResponse.data.message,
      })
    } catch (error) {
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

const localStorageLogin = () => {
  return new Promise<{} | void>((resolve, reject) => {
    const knifeAndFishLocalStorage = isBrowser ? localStorage.getItem('knifeAndFish') : undefined
    if (knifeAndFishLocalStorage) {
      const json = JSON.parse(knifeAndFishLocalStorage)
      const userId = json.userId
      const accessToken = json.accessToken
      const name = json.name
      resolve({
        userId: userId,
        accessToken: accessToken,
        name: name,
      })
    } else {
      reject()
    }
  })
}

export function* localStorageLoginAsync(action: any) {
  try {
    const loginResponse = yield call(localStorageLogin)
    yield put({
      type: LOGIN_STEPS.LOCAL_STORAGE_LOGIN_SUCCESS,
      payload: loginResponse,
    })
    yield put({
      type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
      payload: loginResponse.userId,
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: LOGIN_STEPS.LOCAL_STORAGE_LOGIN_FAILURE,
    })
  }
}
