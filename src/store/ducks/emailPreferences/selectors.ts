import { EmailPreferences } from './interfaces'

export const getEmailPreferencesData = (state: any): EmailPreferences =>
  state?.EmailPreferences || ({} as EmailPreferences)

export const getEmailPreferencesRecipesPreference = (state: any): string => {
  return getEmailPreferencesData(state).recipes
}

export const getEmailPreferencesArticlesPreference = (state: any): string => {
  return getEmailPreferencesData(state).articles
}

export const getEmailPreferencesRoundupsPreference = (state: any): string => {
  return getEmailPreferencesData(state).roundups
}
