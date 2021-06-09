import {
  CONTACT_ACTION_TYPES,
  CONTACT_HELLO_STEPS,
  CONTACT_PARTNERSHIP_STEPS,
  CONTACT_RECIPE_STEPS,
  CONTACT_SUGGESTION_STEPS,
} from './types'

export default {
  contactTabShowing: CONTACT_ACTION_TYPES.SHOW_HELLO,
  helloStep: CONTACT_HELLO_STEPS.DEFAULT,
  recipeStep: CONTACT_RECIPE_STEPS.DEFAULT,
  recipesUploaded: new Array<RecipeUploadStatus>(),
  recipeName: '',
  recipeEmail: '',
  recipeMessage: '',
  suggestionStep: CONTACT_SUGGESTION_STEPS.DEFAULT,
  partnershipStep: CONTACT_PARTNERSHIP_STEPS.DEFAULT,
}

export interface RecipeUploadStatus {
  bucketLocation: string
  fileName: string
  completed: boolean
  completedPercentage: number
  file: any
}
