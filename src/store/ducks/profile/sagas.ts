import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { LOGIN_STEPS, PROFILE_STEPS } from './types'

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const fetchProfile = (userId: string) => {
  return Promise.resolve({
    data: {
      message: {
        name: 'Fisher',
        userId: userId,

        householdMembers: [
          {
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jdoe@gmail.com',
            passwordCharacterCount: 12,
            securityQuestionsAnswers: [
              {
                question: 'fdsfdsf',
                answer: 'xcfsdf',
              },
              {
                question: 'fdsfdsf',
                answer: 'xcfsdf',
              },
              {
                question: 'fdsfdsf',
                answer: 'xcfsdf',
              },
              {
                question: 'fdsfdsf',
                answer: 'xcfsdf',
              },
            ],
            role: 'Household Owner',
            allergies: [],
            carlorieCounting: {
              least: undefined,
              most: undefined,
            },
            diet: [],
            lifestyle: [],
            foods: {
              likes: {
                told: [],
                think: [],
              },
              dislikes: {
                told: [],
                think: [],
              },
            },
          },
          {
            firstName: 'jack',
            lastName: 'Doe',
            email: 'jackdoe@gmail.com',
            passwordCharacterCount: 12,
            securityQuestionsAnswers: [
              {
                question: 'fdsfdsf',
                answer: 'xcfsdf',
              },
              {
                question: 'fdsfdsf',
                answer: 'xcfsdf',
              },
              {
                question: 'fdsfdsf',
                answer: 'xcfsdf',
              },
              {
                question: 'fdsfdsf',
                answer: 'xcfsdf',
              },
            ],
            role: 'Household Owner',
            allergies: [],
            carlorieCounting: {
              least: undefined,
              most: undefined,
            },
            diet: [],
            lifestyle: [],
            foods: {
              likes: {
                told: [],
                think: [],
              },
              dislikes: {
                told: [],
                think: [],
              },
            },
          },
        ],
        shipments: {
          next: {
            name: 'Shipment Name',
            shipId: '12345',
            expectedShipDate: new Date(),
            expectingChangesUntil: new Date(),
          },
          previous: [
            {
              name: 'Shipment Name 1',
              shipId: '123454',
              status: 'Delivered',
              deliveryCompany: 'UPS',
              trackingNumber: 'Z12349099898909800009',
            },
            {
              name: 'Shipment Name 2',
              shipId: '123454',
              status: 'Delivered',
              deliveryCompany: 'UPS',
              trackingNumber: 'Z12349099898909800009',
            },
            {
              name: 'Shipment Name 3',
              shipId: '123454',
              status: 'Delivered',
              deliveryCompany: 'UPS',
              trackingNumber: 'Z12349099898909800009',
            },
            {
              name: 'Shipment Name 4',
              shipId: '123454',
              status: 'Delivered',
              deliveryCompany: 'UPS',
              trackingNumber: 'Z12349099898909800009',
            },
            {
              name: 'Shipment Name 5',
              shipId: '123454',
              status: 'Delivered',
              deliveryCompany: 'UPS',
              trackingNumber: 'Z12349099898909800009',
            },
            {
              name: 'Shipment Name 6',
              shipId: '123454',
              status: 'Delivered',
              deliveryCompany: 'UPS',
              trackingNumber: 'Z12349099898909800009',
            },
            {
              name: 'Shipment Name 7',
              shipId: '123454',
              status: 'Delivered',
              deliveryCompany: 'UPS',
              trackingNumber: 'Z12349099898909800009',
            },
            {
              name: 'Shipment Name 8',
              shipId: '123454',
              status: 'Delivered',
              deliveryCompany: 'UPS',
              trackingNumber: 'Z12349099898909800009',
            },
          ],
        },
        groceries: [
          {
            name: 'Aldi',
            preferredOrder: 0,
          },
          {
            name: 'Hyvee',
            preferredOrder: 0,
          },
          {
            name: 'Hen House',
            preferredOrder: 0,
          },
          {
            name: 'Kroger',
            preferredOrder: 3,
          },
          {
            name: 'Piggly Wiggly',
            preferredOrder: 0,
          },
          {
            name: 'Price Chopper',
            preferredOrder: 0,
          },
          {
            name: 'Publix',
            preferredOrder: 2,
          },
          {
            name: 'Whole Food',
            preferredOrder: 1,
          },
        ],
        emailPreferences: {
          email: 'chrisfisher236@gmail.com',
          recipes: 'weekly',
          articles: 'weekly',
          roundup: 'monthly',
        },
        billingInformation: {
          nextBilling: new Date(),
          contact: {
            firstName: 'Chris',
            lastName: 'Fisher',
            phone: '816-738-5554',
          },
          address: {
            address1: '429 W. 58th St.',
            address2: '',
            city: 'Kansas City',
            state: 'MO',
            zipCode: '64113',
          },
          cardInformation: {
            cardType: 'visa',
            cardNumber: '**** **** *** 4832',
            expirationDate: '09/22',
          },
        },
      },
    },
  })
  //return axios.get(`https://rzg7h98b14.execute-api.us-east-1.amazonaws.com/stage/login?userId=${userId}`);
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
        payload: profileResponse.data.message,
      })
    } catch (error) {
      console.log('PROFILE ERROR: ', error)
      yield put({
        type: PROFILE_STEPS.LOADING_FAILURE,
      })
    }
  } else {
    yield put({
      type: PROFILE_STEPS.LOADING_FAILURE,
    })
  }
}
