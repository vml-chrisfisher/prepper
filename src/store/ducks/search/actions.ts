import { SEARCH_ACTION_TYPES } from './types'

export const onSearch = (value: string) => ({
  type: SEARCH_ACTION_TYPES.SEARCH,
  search: value,
})
