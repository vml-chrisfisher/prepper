import { all, takeEvery } from 'redux-saga/effects'
import { fetchHeaderProductCategoryDetailAsync } from './ducks/header/sagas'
import { HEADER_ACTION_TYPES } from './ducks/header/types'
import { submitLoginAsync } from './ducks/login/sagas'
import { LOGIN_STEPS } from './ducks/login/types'
import { submitNewsletterEmailAsync } from './ducks/newsletter/sagas'
import { NEWSLETTER_ACTION_TYPES } from './ducks/newsletter/types'
import { fetchProfileAsync } from './ducks/profile/sagas'
import { PROFILE_STEPS } from './ducks/profile/types'
import { submitSearchAsync } from './ducks/search/sagas'
import { SEARCH_ACTION_TYPES } from './ducks/search/types'

function* watchFetchHeaderProductCategoryDetail() {
  yield takeEvery(HEADER_ACTION_TYPES.CATEGORY_SELECTED, fetchHeaderProductCategoryDetailAsync)
}

function* watchSubmitNewsletterEmail() {
  yield takeEvery(NEWSLETTER_ACTION_TYPES.SUBMIT, submitNewsletterEmailAsync)
}

function* watchSearch() {
  yield takeEvery(SEARCH_ACTION_TYPES.SEARCH, submitSearchAsync)
}

function* watchLogin() {
  yield takeEvery(LOGIN_STEPS.SUBMIT_LOGIN, submitLoginAsync)
}

function* watchProfile() {
  yield takeEvery(PROFILE_STEPS.LOAD, fetchProfileAsync)
}

export default function* rootSaga() {
  console.log('root saga')
  yield all([
    watchFetchHeaderProductCategoryDetail(),
    watchSubmitNewsletterEmail(),
    watchSearch(),
    watchLogin(),
    watchProfile(),
  ])
}
