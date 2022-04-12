import axios, { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'
import { isBrowser } from '../../../utils/auth'
import { EmailPreferences } from '../emailPreferences/interfaces'
import { EMAIL_SEND_FREQUENCY } from '../emailPreferences/types'
import { Household, HOUSEHOLD_MEMBER_ROLE, HouseholdMember } from '../household/interfaces'
import { NEWSLETTER_ACTION_TYPES, NEWSLETTER_LINKID_TYPES, RECIPE_RATINGS_EMAIL_TYPES } from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => {
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

const fetchNewsletterLinkId = () => {
  return new Promise<Record<string, unknown> | void>((resolve, reject) => {
    const knifeAndFishLocalStorage = isBrowser ? localStorage.getItem('knifeAndFish') : undefined
    if (knifeAndFishLocalStorage) {
      const json = JSON.parse(knifeAndFishLocalStorage)
      const linkId = json.linkId
      resolve({
        linkId: linkId,
      })
    } else {
      reject()
    }
  })
}

export function* fetchNewsletterLinkIdAsync(action: any) {
  try {
    const fetchResponse = yield call(fetchNewsletterLinkId)
    yield put({
      type: NEWSLETTER_LINKID_TYPES.FETCH_SUCCESS,
      payload: fetchResponse,
    })
  } catch (error) {
    yield put({
      type: NEWSLETTER_LINKID_TYPES.FETCH_FAILURE,
    })
  }
}

const submitNewsletterLinkId = (linkId: string) => {
  return new Promise<Record<string, unknown> | void>((resolve, reject) => {
    if (isBrowser) {
      const knifeAndFishLocalStorage = localStorage.getItem('knifeAndFish')
      if (knifeAndFishLocalStorage) {
        const json = JSON.parse(knifeAndFishLocalStorage)
        json.linkId = linkId
        localStorage.setItem('knifeAndFish', JSON.stringify(json))
        resolve({
          linkId: linkId,
        })
      } else {
        localStorage.setItem(
          'knifeAndFish',
          JSON.stringify({
            linkId: linkId,
          }),
        )
      }
    } else {
      reject()
    }
  })
}

export function* submitNewsletterLinkIdAsync(action: any) {
  const { linkId } = action
  try {
    const fetchResponse = yield call(submitNewsletterLinkId, linkId)
    yield put({
      type: NEWSLETTER_LINKID_TYPES.SUBMIT_SUCCESS,
      payload: fetchResponse,
    })
  } catch (error) {
    yield put({
      type: NEWSLETTER_LINKID_TYPES.SUBMIT_FAILURE,
    })
  }
}

const submitRecipeRatingEmail = (payload: {
  linkId: string
  recipeId: string
  imageUrl: string
  recipeName: string
}) => {
  const { linkId, recipeId } = payload
  const url = 'https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/email/rating/recipe'
  return axios.post(
    url,
    {
      linkId: linkId,
      recipeId: recipeId,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
export function* submitRecipeRatingsEmailAsync(action: any) {
  console.log('SUBMITING1: ', action)
  if (action.payload) {
    const { linkId, recipeId, imageUrl, recipeName } = action.payload
    if (linkId && recipeId) {
      try {
        const fetchResponse = yield call(submitRecipeRatingEmail, { linkId, recipeId, imageUrl, recipeName })
        yield put({
          type: RECIPE_RATINGS_EMAIL_TYPES.SUBMIT_SUCCESS,
          payload: fetchResponse,
        })
      } catch (error) {
        yield put({
          type: RECIPE_RATINGS_EMAIL_TYPES.SUBMIT_FAILURE,
        })
      }
    }
  }
}
