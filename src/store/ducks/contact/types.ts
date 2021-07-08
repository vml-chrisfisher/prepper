export enum CONTACT_ACTION_TYPES {
  SHOW_HELLO = 'SHOW HELLO',
  SHOW_RECIPE = 'SHOW RECIPE',
  SHOW_SUGGESTION = 'SHOW SUGGESTION',
  SHOW_PARTNERSHIP = 'SHOW PARTNERSHIP',
}

export enum CONTACT_HELLO_STEPS {
  DEFAULT = 'DEFAULT_HELLO',
  SUBMIT_HELLO = 'SUBMIT_HELLO',
  SUBMITTING_HELLO = 'SUBMITTING_HELLO',
  HELLO_SUBMIT_SUCCESS = 'HELLO_SUBMIT_SUCCESS',
  HELLO_SUBMIT_FAILURE = 'HELLO_SUBMIT_FAILURE',
  HELLO_RESET = 'HELLO_RESET',
}

export enum CONTACT_RECIPE_STEPS {
  DEFAULT = 'DEFAULT_RECIPE',
  SUBMIT_RECIPE = 'SUBMIT_RECIPE',
  SUBMITTING_RECIPE = 'SUBMITTING_RECIPE',
  RECIPE_SUBMIT_SUCCESS = 'RECIPE_SUBMIT_SUCCESS',
  RECIPE_SUBMIT_FAILURE = 'RECIPE_SUBMIT_FAILURE',
  RECIPE_RESET = 'RECIPE_RESET',
  UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME',
  UPDATE_RECIPE_EMAIL = 'UPDATE_RECIPE_EMAIL',
  UPDATE_RECIPE_MESSAGE = 'UPDATE_RECIPE_MESSAGE',
  RECIPE_FORM_RESET = 'RECIPE_FORM_RESET',
  TRY_REMOVE_RECIPE = 'TRY_REMOVE_RECIPE',
  UPLOAD_RECIPE = 'UPLOAD_RECIPE',
  REMOVE_RECIPE = 'REMOVE_RECIPE',
  UPDATE_RECIPE_UPLOAD_STATUS = 'UPDATE_RECIPE_UPLOAD_STATUS',
  UPDATE_RECIPE_UPLOADED = 'UPDATE_RECIPE_UPLOADED',
}

export enum CONTACT_SUGGESTION_STEPS {
  DEFAULT = 'DEFAULT_SUGGESTION',
  SUBMIT_SUGGESTION = 'SUBMIT_SUGGESTION',
  SUBMITTING_SUGGESTION = 'SUBMITTING_SUGGESTION',
  SUGGESTION_SUBMIT_SUCCESS = 'SUGGESTION_SUBMIT_SUCCESS',
  SUGGESTION_SUBMIT_FAILURE = 'SUGGESTION_SUBMIT_FAILURE',
  SUGGESTION_RESET = 'SUGGESTIOn_RESET',
}

export enum CONTACT_PARTNERSHIP_STEPS {
  DEFAULT = 'DEFAULT_PARTNERSHIP',
  SUBMIT_PARTNERSHIP = 'SUBMIT_PARTNERSHIP',
  SUBMITTING_PARTNERSHIP = 'SUBMITTING_PARTNERSHIP',
  PARTNERSHIP_SUBMIT_SUCCESS = 'PARTNERSHIP_SUBMIT_SUCCESS',
  PARTNERSHIP_SUBMIT_FAILURE = 'PARTNERSHIP_SUBMIT_FAILURE',
  PARTNERSHIP_RESET = 'PARTNERSHIP_RESET',
}