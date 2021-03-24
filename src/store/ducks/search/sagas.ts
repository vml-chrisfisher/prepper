import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { SEARCH_ACTION_TYPES } from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const submitSearch = (value: string) => {
  const url = 'https://rzg7h98b14.execute-api.us-east-1.amazonaws.com/stage/newletter'
  return axios.post(
    url,
    {
      search: value,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

export function* submitSearchAsync(action: any) {
  yield put({
    type: SEARCH_ACTION_TYPES.SEARCHING,
  })
  const { search } = action
  if (search) {
    try {
      const response = yield call(submitSearch, search)
      console.log(response)
      yield delay(3000)
      yield put({
        type: SEARCH_ACTION_TYPES.SEARCH_SUCCESS,
        searchResults: response,
      })
    } catch (error) {
      console.log('ERROR: ', error)
      yield put({
        type: SEARCH_ACTION_TYPES.SEARCH_FAILURE,
        error: error,
      })
    }
  } else {
    yield put({
      type: SEARCH_ACTION_TYPES.SEARCH_FAILURE,
    })
  }
}
