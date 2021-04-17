import axios, { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'
import { EmailPreferences } from '../emailPreferences/interfaces'
import { EMAIL_SEND_FREQUENCY } from '../emailPreferences/types'
import { Household, HOUSEHOLD_MEMBER_ROLE, HouseholdMember } from '../household/interfaces'
import { NEWSLETTER_ACTION_TYPES } from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const submitNewsletterEmail = (household: Household): Promise<AxiosResponse<any>> => {
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
}

export function* submitNewsletterEmailAsync(action: any) {
  yield put({
    type: NEWSLETTER_ACTION_TYPES.SUBMITTING,
  })
  const { email } = action
  const household: Household = {}
  const householdMember: HouseholdMember = {
    emailAddress: email,
    role: HOUSEHOLD_MEMBER_ROLE.FAMILY_OWNER,
  }
  const emailPreferences: EmailPreferences = {
    recipes: EMAIL_SEND_FREQUENCY.DAILY,
    articles: EMAIL_SEND_FREQUENCY.DAILY,
    roundups: EMAIL_SEND_FREQUENCY.MONTHLY,
  }
  household.householdMembers = [householdMember]
  household.emailPreferences = emailPreferences
  if (email) {
    try {
      const response = yield call(submitNewsletterEmail, household)
      yield put({
        type: NEWSLETTER_ACTION_TYPES.ADDED_SUCCESS,
      })
      yield delay(3000)
      yield put({ type: NEWSLETTER_ACTION_TYPES.RESET })
    } catch (error) {
      yield put({
        type: NEWSLETTER_ACTION_TYPES.ADDED_FAILURE,
        error: error,
      })
    }
  } else {
    yield put({ type: NEWSLETTER_ACTION_TYPES.ADDED_FAILURE, error: new Error('sdf') })
  }
}
