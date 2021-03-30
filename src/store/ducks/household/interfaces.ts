export enum HouseholdMemberRole {
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
  firstName?: string
  lastNamse?: string
  avatar?: string
  phoneNumber?: string
  emailAddrress?: string
  passwordLength?: number
  passwordResetQuestionsAnswers?: Array<PasswordResetQuestionAnswer>
  role?: HouseholdMemberRole
  diet: {
    allergies?: Array<string>
    calorieCouting?: {
      atLeast?: number
      atMost?: number
    }
    currentDiets?: Array<string>
  }
  foods: {
    like: Array<FoodLikeDislike>
    dislike: Array<FoodLikeDislike>
  }
}

export interface Household {
  id?: string
  name?: string
  householdMembers: Array<HouseholdMember>
}
