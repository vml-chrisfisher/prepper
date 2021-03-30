import { PROFILE_STEPS } from '../profile/types'
import { HEADER_ACTION_TYPES } from './types'

export interface HeaderAction {
  type: HEADER_ACTION_TYPES | PROFILE_STEPS
  familyId: string
  categoryId: string
  imagePath: string
  copy: string
}
