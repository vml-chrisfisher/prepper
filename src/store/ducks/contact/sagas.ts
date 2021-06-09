import { buffers, eventChannel } from '@redux-saga/core';
import * as AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
import axios from 'axios';
import { getUploadedRecipeBucketNames } from './selectors';
import {
  CONTACT_HELLO_STEPS,
  CONTACT_PARTNERSHIP_STEPS,
  CONTACT_RECIPE_STEPS,
  CONTACT_SUGGESTION_STEPS
  } from './types';

/* eslint no-empty-function: 0 */
/* @typescript-eslint/no-empty-function: 0 */

import {
  all,
  call,
  put,
  select,
  take,
  } from 'redux-saga/effects';

const bucketName = 'knife-and-fish-user-recipes'

AWS.config.region = 'us-east-1' // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:f74b6d29-5575-4ded-a0e7-374af44c6d7c',
})

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucketName },
})

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
      console.log('HELLO ERROR: ', error)
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
  uploadedFilesBucketNames: Array<string>
}) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/contact/recipe', payload)
}

export function* submitRecipeContactAsync(action: any) {
  yield put({
    type: CONTACT_RECIPE_STEPS.SUBMITTING_RECIPE,
  })
  const { recipeName, recipeEmail, recipeMessage } = action.payload
  const uploadedFilesBucketNames = yield select(getUploadedRecipeBucketNames)
  const payload = { recipeName, recipeEmail, recipeMessage, uploadedFilesBucketNames }
  if (payload) {
    try {
      const response = yield call(submitContactRecipe, payload)

      yield put({
        type: CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      console.log('RECIPE ERROR: ', error)
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
  return eventChannel(emitter => {
    const stream: AWS.S3.ManagedUpload = s3
      .upload(putRequest, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
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
      yield put({
        type: CONTACT_RECIPE_STEPS.UPDATE_RECIPE_UPLOAD_STATUS,
        payload: response,
      })
    }
  }
}

const removeRecipe = (request: {Bucket: string, Key: string}) => {
  s3.deleteObject(request, (err, data) => {

  }).promise()
}

export function* removeRecipeAsync(action: any) {
  const {fileName } = action.payload

  const deleteRequest = {
    Bucket: bucketName,
    Key: fileName
  }
  try {
    const response = yield call(removeRecipe, deleteRequest)

    yield put({
      type: CONTACT_RECIPE_STEPS.REMOVE_RECIPE,
      payload: fileName
    })
  }
  catch (error) {
    yield put({
      type: CONTACT_RECIPE_STEPS.REMOVE_RECIPE,
      payload: fileName
    })
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
      console.log('SUGGESTION ERROR: ', error)
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
  partnershipWebsite: string
  partnershipMessage: string
}) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/contact/partnership', payload)
}

export function* submitPartnershipContactAsync(action: any) {
  yield put({
    type: CONTACT_PARTNERSHIP_STEPS.SUBMITTING_PARTNERSHIP,
  })
  const { partnershipName, partnershipCompany, partnershipEmail, partnershipPhone, partnershipWebsite, partnershipMessage } = action.payload
  const payload = { partnershipName, partnershipCompany, partnershipEmail, partnershipPhone, partnershipWebsite, partnershipMessage }
  if (payload) {
    try {
      const response = yield call(submitContactPartnership, payload)

      yield put({
        type: CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_SUCCESS,
        payload: response.data.message,
      })
    } catch (error) {
      console.log('PARTNERSHIP ERROR: ', error)
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
