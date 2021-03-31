import { CREATE_HOUSEHOLD_FROM } from '../household/types'
import { NEWSLETTER_ACTION_TYPES } from './types'
export const onNewsletterReset = () => ({
  type: NEWSLETTER_ACTION_TYPES.RESET,
})

export const onNewsletterSubmit = (email: string) => ({
  type: CREATE_HOUSEHOLD_FROM.NEWSLETTER,
  email,
})
