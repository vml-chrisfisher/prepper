import { string } from 'yup/lib/locale'
import { LOGIN_STEPS } from './types'

export default {
  loginStep: LOGIN_STEPS.DEFAULT,
  creditials: undefined,
  loggedIn: false,
  accessToken: undefined,
  userId: undefined,
}
