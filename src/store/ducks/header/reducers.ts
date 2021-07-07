import { products } from '../../static/products';
import { PROFILE_STEPS } from '../profile/types';
import { SIDEBAR_ACTION_TYPES } from '../sidebar/actions/types';
import { SIDEBAR_ANIMATION_STEPS } from '../sidebar/animations/types';
import { ProductCategoryDetail } from './../../../components/header/interface';
import initialState from './initialState';
import { HeaderAction } from './interfaces';
import { HEADER_ACTION_TYPES, HEADER_NOTIFICATION_TYPES } from './types';

const headerReducers = (state = initialState, action: HeaderAction) => {
  let selectedCategory: ProductCategoryDetail = {}
  switch (action.type) {
    case HEADER_ACTION_TYPES.FETCH:
      return { ...state, data: products }
    case HEADER_ACTION_TYPES.FAMILY_SELECTED:
      return {
        ...state,
        categories: products.filter(product => {
          return product.productId === action.familyId
        })[0].categories,
      }
    case HEADER_ACTION_TYPES.CATEGORY_DETAILS_FETCHED:
      if (action.imagePath && action.copy) {
        selectedCategory = {
          imagePath: action.imagePath,
          copy: action.copy,
        }
      }
      return { ...state, categoryDetail: selectedCategory }
    case HEADER_ACTION_TYPES.SHOW_SEARCH:
      return { ...state, showSearch: true, showHeaderProfile: false }
    case HEADER_ACTION_TYPES.HIDE_SEARCH:
      return { ...state, showSearch: false }
    case HEADER_ACTION_TYPES.SHOW_PROFILE_LOGIN:
      return { ...state, showSearch: false, showHeaderProfile: SIDEBAR_ANIMATION_STEPS.SHOW, showRecipesBoxLoginRegisterNotification: false }
    case HEADER_ACTION_TYPES.HIDE_PROFILE_LOGIN:
      return { ...state, showHeaderProfile: SIDEBAR_ANIMATION_STEPS.HIDE, showRecipesBoxLoginRegisterNotification: false }
    case HEADER_ACTION_TYPES.SHOW_PROFILE_QUESTIONS:
      return { ...state, showHeaderProfile: SIDEBAR_ANIMATION_STEPS.PROFILE_CREATION }
    case PROFILE_STEPS.START_CREATE_PROFILE:
      return { ...state, showHeaderProfile: SIDEBAR_ANIMATION_STEPS.PROFILE_CREATION }
    case HEADER_NOTIFICATION_TYPES.SHOW_RECIPES_BOX_LOGIN_REGISTER_NOTIFICATION: 
      return { ...state, showRecipesBoxLoginRegisterNotification: true}
    default:
      return state
  }
}

export default headerReducers
