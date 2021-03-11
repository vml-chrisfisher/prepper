import { HEADER_ACTION_TYPES, NEWSLETTER_ACTION_TYPES, SEARCH_ACTION_TYPES, SIDEBAR_ACTION_TYPES } from './types'

export const fetch = () => ({
  type: HEADER_ACTION_TYPES.FETCH,
})

export const onFamilySelected = (id: string) => ({
  type: HEADER_ACTION_TYPES.FAMILY_SELECTED,
  familyId: id,
})

export const onCategorySelected = (id?: string) => ({
  type: HEADER_ACTION_TYPES.CATEGORY_SELECTED,
  categoryId: id,
})

export const onNewsletterReset = () => ({
  type: NEWSLETTER_ACTION_TYPES.RESET,
})

export const onNewsletterSubmit = (email: string) => ({
  type: NEWSLETTER_ACTION_TYPES.SUBMIT,
  email: email,
})

export const onSearch = (value: string) => ({
  type: SEARCH_ACTION_TYPES.SEARCH,
  search: value,
})

export const onShowSearch = () => ({
  type: HEADER_ACTION_TYPES.SHOW_SEARCH,
})

export const onHideSearch = () => ({
  type: HEADER_ACTION_TYPES.HIDE_SEARCH,
})

export const onShowHeaderProfile = () => ({
  type: HEADER_ACTION_TYPES.SHOW_PROFILE_LOGIN,
})

export const onHideHeaderProfile = () => ({
  type: HEADER_ACTION_TYPES.HIDE_PROFILE_LOGIN,
})

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
