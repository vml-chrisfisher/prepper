import { EMAIL_SEND_FREQUENCY } from './types'

export interface EmailPreferences {
  emailAddress?: string
  recipes: EMAIL_SEND_FREQUENCY
  articles: EMAIL_SEND_FREQUENCY
  roundups: EMAIL_SEND_FREQUENCY
}
