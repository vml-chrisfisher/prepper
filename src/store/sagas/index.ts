import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { HEADER_ACTION_TYPES, NEWSLETTER_ACTION_TYPES } from './../actions/types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const fetchProductCategoryDetails = (categoryId: string) => {
  /* eslint-disable  @typescript-eslint/no-var-requires */
  /* eslint-disable  no-undef */
  const contentful = require('contentful')
  const contentfulConfig = require('../../../.contentful.json')
  /* eslint-enable  @typescript-eslint/no-var-requires */
  /* eslint-enable  no-undef */
  const client = contentful.createClient({
    space: contentfulConfig.spaceId,
    accessToken: contentfulConfig.accessToken,
  })
  /* eslint-disable  @typescript-eslint/camelcase */
  return client.getEntries({
    content_type: 'productCategory',
    'fields.productId': categoryId,
  })
  /* eslint-enable  @typescript-eslint/camelcase */
}

export function* fetchHeaderProductCategoryDetailAsync(action: any) {
  const { categoryId } = action
  if (categoryId) {
    try {
      const response = yield call(fetchProductCategoryDetails, categoryId)
      const categoryRaw = response.items[0]
      yield put({
        type: HEADER_ACTION_TYPES.CATEGORY_DETAILS_FETCHED,
        imagePath: categoryRaw.fields.image.fields.file.url,
        copy: categoryRaw.fields.description,
      })
    } catch (error) {
      console.log('ERROR: ', error)
      yield put({
        type: HEADER_ACTION_TYPES.CATEGORY_DETAILS_FETCHED,
        imagePath: 'fail.jpg',
        copy: 'Well hello there and all the failed people',
      })
    }
  } else {
    yield put({
      type: HEADER_ACTION_TYPES.CATEGORY_DETAILS_FETCHED,
    })
  }
}

const submitNewsletterEmail = (email: string) => {
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
    yield put({
      type: NEWSLETTER_ACTION_TYPES.ADDED_FAILURE,
    })
  }
}

function* watchFetchHeaderProductCategoryDetail() {
  yield takeEvery(HEADER_ACTION_TYPES.CATEGORY_SELECTED, fetchHeaderProductCategoryDetailAsync)
}

function* watchSubmitNewsletterEmail() {
  yield takeEvery(NEWSLETTER_ACTION_TYPES.SUBMIT, submitNewsletterEmailAsync)
}

export default function* rootSaga() {
  yield all([watchFetchHeaderProductCategoryDetail(), watchSubmitNewsletterEmail()])
}
