import axios from 'axios';
import {
  all,
  call,
  put,
  takeEvery
  } from 'redux-saga/effects';
import { HEADER_ACTION_TYPES } from './../actions/types';



const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const fetchProductCategoryDetails = (categoryId: string) => {
  const contentful = require('contentful')
  const contentfulConfig = require('../../../.contentful.json')
  const client = contentful.createClient({
    space: contentfulConfig.spaceId,
    accessToken: contentfulConfig.accessToken
  })
  return client.getEntries({
    content_type: 'productCategory',
    'fields.productId': categoryId
  })

  return axios({
    method: "post",
    url: `https://tosometings.com/${categoryId}`
  })
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
        copy: categoryRaw.fields.description
      })
    } catch (error) {
      console.log("ERROR: ", error)
      yield put({
        type: HEADER_ACTION_TYPES.CATEGORY_DETAILS_FETCHED,
        imagePath: 'fail.jpg',
        copy: 'Well hello there and all the failed people'
      })
    }
  } else {
    yield put({
      type: HEADER_ACTION_TYPES.CATEGORY_DETAILS_FETCHED
    })
  }
}



export function* SMSSocialSubmitAsync() {
}

export function* FacebookSocialSubmitAsync() {
}

export function* InstagramSocialSubmitAsync() {
}

export function* PinterestSocialSubmitAsync() {
}

function* watchFetchHeaderProductCategoryDetail() {
  yield takeEvery(HEADER_ACTION_TYPES.CATEGORY_SELECTED, fetchHeaderProductCategoryDetailAsync)
}

function* watchSMSSocialSubmitAsync() {
}

function* watchFacebookSocialSubmitAsync() {
}

function* watchInstagramSocialSubmitAsync() {
}

function* watchPinterestSocialSubmitAsync() {
}

export default function* rootSaga() {
  yield all([
    watchFetchHeaderProductCategoryDetail(),
    watchSMSSocialSubmitAsync(),
    watchFacebookSocialSubmitAsync(),
    watchInstagramSocialSubmitAsync(),
    watchPinterestSocialSubmitAsync()
  ])
}
