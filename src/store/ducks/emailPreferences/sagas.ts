import { actionChannel, call, put } from '@redux-saga/core/effects';
import axios, { AxiosResponse } from 'axios';
import { PROFILE_STEPS } from '../profile/types';
import { EMAIL_PREFERENCES, EMAIL_SEND_FREQUENCY } from './types';

const patchRecipeEmailPreference = (preference: EMAIL_SEND_FREQUENCY, userId: string): Promise<AxiosResponse<void>> => {
    const url = 'https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/household/emailPreferences/update/recipe'
    return axios.patch(
        url,
        {
            preference: preference,
            userId: userId
        },
    )
}

const patchArticleEmailPreferences = (preference: EMAIL_SEND_FREQUENCY, userId: string): Promise<AxiosResponse<void>> => {
    const url = 'https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/household/emailPreferences/update/article'
    return axios.patch(url, {
        preference: preference,
        userId: userId
    })
}

const patchRoundupEmailPreferences = (preference: EMAIL_SEND_FREQUENCY, userId: string): Promise<AxiosResponse<void>> => {
    const url = 'https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/household/emailPreferences/update/roundups'
    return axios.patch(url, {
        preference: preference,
        userId: userId
    })
}

export function* patchRecipeEmailPreferenceAsync(action: any) {
    yield put({
        type: EMAIL_PREFERENCES.UPDATING_RECIPE_EMAIL_PREFERENCES,
    });


    const { preference, householdId, userId } = action
    if (preference && householdId && userId) {
        try {
            const response = yield call(patchRecipeEmailPreference, { preference: preference, householdId: householdId })
            yield put({
                type: EMAIL_PREFERENCES.UPDATED_RECIPES_EMAIL_PREFERENCES_SUCCESS
            })
            yield put({
                type: PROFILE_STEPS.LOAD,
                userId: userId
            })
        } catch (error) {
            yield put({
                type: EMAIL_PREFERENCES.UPDATED_RECIPE_EMAIL_PREFERENCES_FAILURE,
                error: error,
            })
        }
    } else {
        yield put({ type: EMAIL_PREFERENCES.UPDATED_RECIPE_EMAIL_PREFERENCES_FAILURE, error: new Error('No user id or preference type') })
    }
}

export function* patchArticleEmailPreferenceAsync(action: any) {
    yield put({
        type: EMAIL_PREFERENCES.UPDATING_ARTICLE_EMAIL_PREFERENCES
    })

    const { preference, householdId, userId } = action;
    if (preference && householdId& userId) {
        try {
            const reponse = yield call(patchArticleEmailPreferences, { preference: preference, householdId: householdId })
            yield put({
                type: EMAIL_PREFERENCES.UPDATED_ARTICLE_EMAIL_PREFERENCES_SUCCESS
            })
            yield put({
                type: PROFILE_STEPS.LOAD,
                userId: userId
            })
        } catch (error) {
            yield put({
                type: EMAIL_PREFERENCES.UPDATED_ARTICLE_EMAIL_PREFERENCES_FAILURE
            })
        }
    } else {
        yield put({ type: EMAIL_PREFERENCES.UPDATED_ARTICLE_EMAIL_PREFERENCES_FAILURE })
    }
}

export function* patchRoundupEmailPreferencesAsync(action: any) {
    yield put({
        type: EMAIL_PREFERENCES.UPDATING_ROUNDUP_EMAIL_PREFERENCES
    })

    const { preference, householdId, userId } = action;
    if (preference && householdId && userId) {
        try {
            const response = yield call(patchRoundupEmailPreferences, { preference: preference, householdId, householdId })
            yield put({
                type: EMAIL_PREFERENCES.UPDATED_ROUNDUP_EMAIL_PREFERENCES_SUCCESS,
                payload: response
            })
            yield put({
                type: PROFILE_STEPS.LOAD,
                userId: userId
            })
        } catch (error) {
            yield put({
                type: EMAIL_PREFERENCES.UPDATED_ROUNDUP_EMAIL_PREFERENCES_FAILURE
            })
        }
    } else {
        yield put({ type: EMAIL_PREFERENCES.UPDATED_ROUNDUP_EMAIL_PREFERENCES_FAILURE })
    }
}