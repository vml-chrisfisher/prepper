import { HEADER_ACTION_TYPES } from './types'

export interface HeaderAction {
    type: HEADER_ACTION_TYPES
    familyId: string
    categoryId: string
    imagePath: string
    copy: string
}
