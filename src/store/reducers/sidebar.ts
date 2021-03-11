import { ShowRegister } from '../actions'
import { SIDEBAR_ACTION_TYPES } from '../actions/types'

const initialState = {
  showAccount: true,
  showCart: false,
  showRegister: true,
  showLogin: false,
  showProfile: false,
}

const sidebar = (state = initialState, action: { type: string; id: string; filter: string }) => {
  switch (action.type) {
    case SIDEBAR_ACTION_TYPES.SHOW_ACCOUNT:
      return { ...state, showAccount: true, showCart: false }
    case SIDEBAR_ACTION_TYPES.SHOW_CART:
      return { ...state, showAccount: false, showCart: true }
    case SIDEBAR_ACTION_TYPES.SHOW_REGISTER:
      return { ...state, showRegister: true, showLogin: false, showProfile: false }
    case SIDEBAR_ACTION_TYPES.SHOW_LOGIN:
      return { ...state, showRegister: false, showLogin: true, showProfile: false }
    case SIDEBAR_ACTION_TYPES.SHOW_PROFILE:
      return { ...state, showRegister: false, showLogin: false, showProfile: true }
    default:
      return state
  }
}

export default sidebar
