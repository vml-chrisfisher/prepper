import { string } from 'yup/lib/locale'
import { PROFILE_STEPS } from './types'

export default {
  accessToken: undefined,
  userId: undefined,
  profileStep: PROFILE_STEPS.LOADING,
  householdMembers: [],
  shipments: [],
  groceries: [],
  billingInformation: undefined,
}
