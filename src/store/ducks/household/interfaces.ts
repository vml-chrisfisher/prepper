import { Billing } from '../billing/interface'
import { EmailPreferences } from '../emailPreferences/interfaces'
import { GroceriesPreferences, GroceryList } from '../groceries/interfaces'
import { Shipments } from '../shipments/interfaces'

export enum HOUSEHOLD_MEMBER_ROLE {
  FAMILY_OWNER = 'Family Owner',
  APPROVER = 'Approver',
  MEMBER = 'Member',
}

export interface PasswordResetQuestionAnswer {
  question: string
  answer: string
}

export interface FoodLikeDislike {
  food: string
  toldUs: boolean
}

export interface HouseholdMember {
  id: string
  firstName?: string
  lastName?: string
  avatar?: string
  phoneNumber?: string
  emailAddress?: string
  passwordLength?: number
  passwordResetQuestionsAnswers?: Array<PasswordResetQuestionAnswer>
  role?: HOUSEHOLD_MEMBER_ROLE
  diet?: {
    allergies?: Array<string>
    calorieCouting?: {
      atLeast?: number
      atMost?: number
    }
    currentDiets?: Array<string>
  }
  foods?: {
    like: Array<FoodLikeDislike>
    dislike: Array<FoodLikeDislike>
  }
}

export interface Household {
  id?: string
  name?: string
  householdMembers?: Array<HouseholdMember>
  shipments?: Shipments
  groceries?: GroceriesPreferences
  emailPreferences?: EmailPreferences
  billings?: Billing
}
