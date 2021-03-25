import { string } from 'yup/lib/locale'
import { PROFILE_STEPS } from './types'

export default {
  accessToken: undefined,
  userId: undefined,
  profileStep: PROFILE_STEPS.LOADING,
  createProfileStep: PROFILE_STEPS.CREATE_PROFILE_DEFAULT,
  householdMembers: [],
  shipments: [],
  groceries: [],
  billingInformation: undefined,
}
