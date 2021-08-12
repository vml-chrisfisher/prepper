import { rejectPromiseAction, resolvePromiseAction } from '@adobe/redux-saga-promise';
import axios, { AxiosResponse } from 'axios';
import {
  all,
  call,
  put,
  takeEvery
  } from 'redux-saga/effects';
import { LOGIN_STEPS } from '../login/types';
import { ProfileSubmit } from './interface';
import { PROFILE, PROFILE_STEPS } from './types';

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const fetchProfile = (userId: string): AxiosResponse<any> => {
  return axios.get(`https://rzg7h98b14.execute-api.us-east-1.amazonaws.com/dev/login?userId=${userId}`);
}

export function* fetchProfileAsync(action: any) {
  yield put({
    type: PROFILE_STEPS.LOADING,
  })

  const { userId } = action.payload
  if (userId) {
    try {
      const profileResponse = yield call(fetchProfile, userId)
      yield delay(3000)
      yield put({
        type: PROFILE_STEPS.LOADING_SUCCESS,
        payload: profileResponse.data.message
      })
    } catch (error) {
      yield put({
        type: PROFILE_STEPS.LOADING_FAILURE
      })
    }
  } else {
    yield put({
      type: PROFILE_STEPS.LOADING_FAILURE
    })
  }
}

const createProfile = (profile: ProfileSubmit) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/profile', profile, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function* createProfileAsync(action: any) {
  console.log("first", action.payload)
  yield put({
    type: PROFILE.CREATING_NEW_PROFILE
  })

  console.log("sdfdsfs")

  const { registerFirstName, registerLastName, registerEmail, registerPassword } = action.payload

  if (registerFirstName && registerLastName && registerEmail && registerPassword) {
    try {
      const profileResponse = yield call(createProfile, { registerFirstName, registerLastName, registerPassword, registerEmail })
      yield call(resolvePromiseAction, action, profileResponse)
      yield put({
        type: LOGIN_STEPS.SUBMIT_LOGIN,
        payload: {username: registerEmail, password: registerPassword}
      })
    } catch (error) {
      if (error.response){
        yield call(rejectPromiseAction, action, error.response)
      }
      
    }
  } else {
    yield call(rejectPromiseAction, action)
  }
}
