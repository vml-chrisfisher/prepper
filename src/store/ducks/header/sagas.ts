import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { HEADER_ACTION_TYPES } from './types'

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
  const contentfulConfig = require('../../../../.contentful.json')
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
