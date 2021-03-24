import { hasLoggedInBefore } from '../../../../utils/auth'

export default {
  showAccount: true,
  showCart: false,
  showRegister: !hasLoggedInBefore(),
  showLogin: hasLoggedInBefore(),
  showProfile: false,
}
