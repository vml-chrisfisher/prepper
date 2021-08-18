import { HOUSEHOLD_MEMBER_ROLE } from '../household/interfaces'

export enum PROFILE_STEPS {
  LOAD = 'LOAD',
  LOADING = 'LOADING',
  UPDATING = 'UPDATING',
  LOADING_SUCCESS = 'LOADING_SUCCESS',
  LOADING_FAILURE = 'LOADING_FAILURE',
  UPDATING_SUCCESS = 'UPDATING_SUCCESS',
  UPDATING_FAILURE = 'UPDATING_FAILURE',
}

export enum HOUSEHOLD_ROLE {
  OWNER = 'OWNER',
  APPROVING_MEMEBER = 'APPROVING_MEMBER',
  MEMEBER = 'MEMBER',
}

export interface HouseholdMember {
  id: string
  firstName?: string
  lastName?: string
  avatar?: string
  phoneNumber?: string
  emailAddress: string
  password?: string
  role: HOUSEHOLD_MEMBER_ROLE
  passwordLength: number
}

export enum PROFILE {
  TRY_CREATE_NEW_PROFILE = 'TRY_CREATE_NEW_PROFILE',
  CREATING_NEW_PROFILE = 'CREATING_NEW_PROFILE',
  CREATE_NEW_PROFILE_SUCCESS = 'CREATE_NEW_PROFILE_SUCCESS',
  CREATE_NEW_PROFILE_FAILURE = 'CREATE_NEW_PROFILE_FAILURE',
}
