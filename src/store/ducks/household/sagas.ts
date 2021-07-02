import axios, { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { HouseholdMember } from '../profile/types';
import { Household } from './interfaces';
import {
  CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS,
  CREATE_HOUSEHOLD_SURVEY_ASYNC_STEPS,
  CREATE_HOUSEHOLD_SURVEY_STEP,
} from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const createHousehold = (household: Household): Promise<AxiosResponse<HouseholdMember>> => {
  const url = 'https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/newsletter'
  return axios.post(
    url,
    {
      household: household,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  // return Promise.resolve(household)
}

export function* createHouseholdFromSurveyAsync(action: any) {
  yield put({
    type: CREATE_HOUSEHOLD_SURVEY_ASYNC_STEPS.SUBMITTING,
  })

  const { household } = action.payload
  if (household) {
    try {
      const profileResponse = yield call(createHousehold, new Household())
      yield delay(3000)
      yield put({
        type: CREATE_HOUSEHOLD_SURVEY_ASYNC_STEPS.SUCCESS,
        payload: profileResponse.data.message,
      })
    } catch (error) {
      yield put({
        type: CREATE_HOUSEHOLD_SURVEY_ASYNC_STEPS.FAILURE,
      })
    }
  } else {
    yield put({
      type: CREATE_HOUSEHOLD_SURVEY_ASYNC_STEPS.FAILURE,
    })
  }
}

export function* createHouseholdFromNewsletterAsync(action: any) {
  yield put({
    type: CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS.SUBMITTING,
  })

  const { userId } = action.payload
  if (userId) {
    try {
      const profileResponse = yield call(createHousehold, new Household())
      yield delay(3000)
      yield put({
        type: CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS.SUCCESS,
        payload: profileResponse.data.message,
      })
    } catch (error) {
      yield put({
        type: CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS.FAILURE,
      })
    }
  } else {
    yield put({
      type: CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS.FAILURE,
    })
  }
}
