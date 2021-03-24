import { NEWSLETTER_ACTION_TYPES } from './types'

export const onNewsletterReset = () => ({
  type: NEWSLETTER_ACTION_TYPES.RESET,
})

export const onNewsletterSubmit = (email: string) => ({
  type: NEWSLETTER_ACTION_TYPES.SUBMIT,
  email: email,
})
