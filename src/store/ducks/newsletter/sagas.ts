import axios, { AxiosResponse } from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { NEWSLETTER_ACTION_TYPES } from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const submitNewsletterEmail = (email: string): Promise<AxiosResponse<any>> => {
  const url = 'https://rzg7h98b14.execute-api.us-east-1.amazonaws.com/stage/newletter'
  return axios.post(
    url,
    {
      email: email,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

export function* submitNewsletterEmailAsync(action: any) {
  yield put({
    type: NEWSLETTER_ACTION_TYPES.SUBMITTING,
  })
  const { email } = action
  if (email) {
    try {
      const response = yield call(submitNewsletterEmail, email)
      yield put({
        type: NEWSLETTER_ACTION_TYPES.ADDED_SUCCESS,
      })
      yield delay(3000)
      yield put({ type: NEWSLETTER_ACTION_TYPES.RESET })
    } catch (error) {
      console.log('ERROR: ', error)
      yield put({
        type: NEWSLETTER_ACTION_TYPES.ADDED_FAILURE,
        error: error,
      })
    }
  } else {
    yield put({ type: NEWSLETTER_ACTION_TYPES.ADDED_FAILURE, error: new Error('sdf') })
  }
}
