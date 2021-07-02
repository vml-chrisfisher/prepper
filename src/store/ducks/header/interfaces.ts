import { PROFILE_STEPS } from '../profile/types';
import { HEADER_ACTION_TYPES, HEADER_NOTIFICATION_TYPES } from './types';

export interface HeaderAction {
  type: HEADER_ACTION_TYPES | PROFILE_STEPS | HEADER_NOTIFICATION_TYPES
  familyId: string
  categoryId: string
  imagePath: string
  copy: string
}
