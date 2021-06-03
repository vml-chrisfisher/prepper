import { buffers, eventChannel } from '@redux-saga/core'
import * as AWS from 'aws-sdk'
import { ManagedUpload, PutObjectRequest } from 'aws-sdk/clients/s3'
import axios from 'axios'
import { all, call, put, take, takeEvery } from 'redux-saga/effects'
import { isBrowser } from '../../../utils/auth'
import { CONTACT_HELLO_STEPS, CONTACT_PARTNERSHIP_STEPS, CONTACT_RECIPE_STEPS, CONTACT_SUGGESTION_STEPS } from './types'

const bucketName = 'knife-and-fish-user-recipes'
const bucketRegion = 'us-east-1'
const identityPoolId = 'arn:aws:iam::078936372766:role/Cognito_RecipeUploadPoolUnauth_Role'

AWS.config.region = 'us-east-1' // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:f74b6d29-5575-4ded-a0e7-374af44c6d7c',
})

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucketName },
})

const delay = (ms: number): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const submitHelloContact = (payload: { helloName: string; helloEmail: string; helloMessage: string }) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/contact/hello', payload)
}

export function* submitHelloContactAsync(action: any) {
  yield put({
    type: CONTACT_HELLO_STEPS.SUBMITTING_HELLO,
  })
  const { helloName, helloEmail, helloMessage } = action.payload
  const payload = { helloName, helloEmail, helloMessage }
  if (payload) {
    try {
      const response = yield call(submitHelloContact, payload)

      yield put({
        type: CONTACT_HELLO_STEPS.HELLO_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      yield put({
        type: CONTACT_HELLO_STEPS.HELLO_SUBMIT_FAILURE,
      })
    }
  } else {
    yield put({
      type: CONTACT_HELLO_STEPS.HELLO_SUBMIT_FAILURE,
    })
  }
}

const submitContactRecipe = (payload: {
  recipeName: string
  recipeEmail: string
  recipeMessage: string
  uploadedFiles: Array<string>
}) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/contact/recipe', payload)
}

export function* submitRecipeContactAsync(action: any) {
  yield put({
    type: CONTACT_RECIPE_STEPS.SUBMITTING_RECIPE,
  })
  const { recipeName, recipeEmail, recipeMessage, uploadedFiles } = action.payload
  const payload = { recipeName, recipeEmail, recipeMessage, uploadedFiles }
  if (payload) {
    try {
      const response = yield call(submitContactRecipe, payload)

      yield put({
        type: CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      console.log('HELLO RECIPE ERROR: ', error)
      yield put({
        type: CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_FAILURE,
      })
    }
  } else {
    yield put({
      type: CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_FAILURE,
    })
  }
}

const uploadRecipe = (putRequest: PutObjectRequest) => {
  console.log('PUT REQUEST: ', putRequest)
  return eventChannel(emitter => {
    const stream: AWS.S3.ManagedUpload = s3
      .upload(putRequest, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
        console.log('ERROR HERE: ', err)
        console.log('DATA HERE: ', data)
        if (data) {
          emitter({
            bucketLocation: data.Location,
            fileName: putRequest.Key,
            completed: true,
            completedPercentage: 100,
            file: putRequest.Body,
          })
        }
      })
      .on('httpUploadProgress', (progress: AWS.S3.ManagedUpload.Progress) => {
        console.log('PROGRESS: ', progress)
        emitter({
          bucketLocation: undefined,
          fileName: putRequest.Key,
          completed: false,
          completedPercentage: (progress.loaded * 100) / progress.total,
          file: putRequest.Body,
        })
      })
    return () => {
      stream.abort()
    }
  }, buffers.sliding(2))
}

export function* uploadRecipeAsync(action: any) {
  console.log(action)
  const { file, fileName } = action.payload

  const putRequest: PutObjectRequest = {
    Bucket: bucketName,
    Key: fileName,
    Body: file,
    ACL: 'public-read',
  }
  if (putRequest.Key && putRequest.Key.length > 0) {
    const channel = yield call(uploadRecipe, putRequest)
    while (true) {
      const response = yield take(channel)
      console.log('REPONSE: ', response)
      yield put({
        type: CONTACT_RECIPE_STEPS.UPDATE_RECIPE_UPLOAD_STATUS,
        payload: response,
      })
    }
  }
}

const submitContactSuggestion = (payload: {
  suggestionName: string
  suggestionEmail: string
  suggestionMessage: string
}) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/contact/suggestion', payload)
}

export function* submitSuggestionContactAsync(action: any) {
  yield put({
    type: CONTACT_SUGGESTION_STEPS.SUBMITTING_SUGGESTION,
  })
  const { suggestionName, suggestionEmail, suggestionMessage } = action.payload
  const payload = { suggestionName, suggestionEmail, suggestionMessage }
  if (payload) {
    try {
      const response = yield call(submitContactSuggestion, payload)

      yield put({
        type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      console.log('HELLO RECIPE ERROR: ', error)
      yield put({
        type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_FAILURE,
      })
    }
  } else {
    yield put({
      type: CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_FAILURE,
    })
  }
}

const submitContactPartnership = (payload: {
  partnershipName: string
  partnershipCompany: string
  partnershipEmail: string
  partnershipPhone: string
  partnershipMessage: string
}) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/contact/partnership', payload)
}

export function* submitPartnershipContactAsync(action: any) {
  yield put({
    type: CONTACT_PARTNERSHIP_STEPS.SUBMITTING_PARTNERSHIP,
  })
  const { partnershipName, partnershipCompany, partnershipEmail, partnershipPhone, partnershipMessage } = action.payload
  const payload = { partnershipName, partnershipCompany, partnershipEmail, partnershipPhone, partnershipMessage }
  if (payload) {
    try {
      const response = yield call(submitContactPartnership, payload)

      yield put({
        type: CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      console.log('HELLO RECIPE ERROR: ', error)
      yield put({
        type: CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_FAILURE,
      })
    }
  } else {
    yield put({
      type: CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_FAILURE,
    })
  }
}
