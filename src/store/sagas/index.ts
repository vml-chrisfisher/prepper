import { all } from 'redux-saga/effects'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export function* EmailSocialSubmitAsync() {
}

export function* SMSSocialSubmitAsync() {
}

export function* FacebookSocialSubmitAsync() {
}

export function* InstagramSocialSubmitAsync() {
}

export function* PinterestSocialSubmitAsync() {
}

function* watchEmailSocialSubmitAsync() {
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
    watchEmailSocialSubmitAsync(),
    watchSMSSocialSubmitAsync(),
    watchFacebookSocialSubmitAsync(),
    watchInstagramSocialSubmitAsync(),
    watchPinterestSocialSubmitAsync()
  ])
}
