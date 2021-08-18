import axios, { AxiosResponse } from 'axios'
import { all, call, put } from 'redux-saga/effects'
import { EmailPreferences } from '../emailPreferences/interfaces'
import { EMAIL_SEND_FREQUENCY } from '../emailPreferences/types'
import { HouseholdMember, PROFILE_STEPS } from '../profile/types'
import { SIDEBAR_ACTION_TYPES } from '../sidebar/actions/types'
import { Household, HOUSEHOLD_MEMBER_ROLE } from './interfaces'
import {
  CREATE_HOUSEHOLD_NEWLETTER_ASYNC_STEPS,
  CREATE_HOUSEHOLD_SURVEY_ASYNC_STEPS,
  CREATE_HOUSEHOLD_SURVEY_STEP,
  HOUSEHOLD,
} from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const createHousehold = (household: Household): Promise<AxiosResponse<HouseholdMember>> => {
  const url = 'https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/household'
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

export function* createNewHouseholdAsync(action: any) {
  yield put({
    type: HOUSEHOLD.CREATING_NEW_HOUSEHOLD,
  })

  const household = action.payload
  if (household) {
    try {
      const householdResponse = yield call(createHousehold, household)

      yield put({
        type: HOUSEHOLD.CREATE_NEW_HOUSEHOLD_SUCCESS,
        payload: householdResponse,
      })
    } catch (error) {
      yield put({
        type: HOUSEHOLD.CREATE_NEW_HOUSEHOLD_FAILURE,
        payload: error,
      })
    }
  } else {
    yield put({
      type: HOUSEHOLD.CREATE_NEW_HOUSEHOLD_FAILURE,
    })
  }
}

const fetchHousehold = (userId: string): Promise<AxiosResponse<Household>> => {
  const url = `https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/household/${userId}`
  return axios.get(url)
}

export function* fetchHouseholdAsync(action: any) {
  yield put({
    type: HOUSEHOLD.FETCHING_HOUSEHOLD,
  })

  const userId = action.payload
  if (userId) {
    try {
      const householdResponse = yield call(fetchHousehold, userId)
      yield all([
        put({
          type: HOUSEHOLD.FETCH_HOUSEHOLD_SUCCESS,
          payload: householdResponse.data,
        }),
      ])
    } catch (error) {
      yield put({
        type: HOUSEHOLD.FETCH_HOUSEHOLD_NOT_FOUND,
        payload: userId,
      })
    }
  } else {
    yield put({
      type: HOUSEHOLD.FETCH_HOUSEHOLD_FAILURE,
    })
  }
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
