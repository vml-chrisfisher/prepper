import { SIDEBAR_ACTION_TYPES } from './types'
export const showSidebarAccount = () => ({
  type: SIDEBAR_ACTION_TYPES.SHOW_ACCOUNT,
})

export const showSidebarCart = () => ({
  type: SIDEBAR_ACTION_TYPES.SHOW_CART,
})

export const showLogin = () => ({
  type: SIDEBAR_ACTION_TYPES.SHOW_LOGIN,
})

export const showRegister = () => ({
  type: SIDEBAR_ACTION_TYPES.SHOW_REGISTER,
})

export const showProfile = () => ({
  type: SIDEBAR_ACTION_TYPES.SHOW_PROFILE,
})
