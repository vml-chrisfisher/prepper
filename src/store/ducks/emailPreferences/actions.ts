import { EMAIL_PREFERENCES } from './types';

export const onTryUpdateRecipeEmailPreferences = (payload: any) => ({
    type: EMAIL_PREFERENCES.TRY_UPDATE_RECIPE_EMAIL_PREFERENCES,
    payload
})

export const onTryUpdateArticleEmailPreferences = (payload: any) => ({
    type: EMAIL_PREFERENCES.TRY_UPDATE_ARTICLE_EMAIL_PREFERENCES,
    payload
})

export const onTryUpdateRoundupEmailPreferences = (payload: any) => ({
    type: EMAIL_PREFERENCES.TRY_UPDATE_ROUNDUP_EMAIL_PREFERENCES,
    payload
})