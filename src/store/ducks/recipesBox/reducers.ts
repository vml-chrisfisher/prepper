import initialState, { ModifiedRecipeArticle } from './initialState';
import { RECIPEBOX } from './types';

const loginReducers = (state = initialState, action: { type?: string; payload?: any }) => {
  console.log(action)
  switch (action?.type) {
    case RECIPEBOX.ADD_RECIPE_SUCCESS:
      return { ...state, lastModified: [...state.lastModified, {...action.payload, type: 'recipe', action: 'add'}] }
    case RECIPEBOX.FETCHED_RECIPEBOX_SUCCESS:
      return { 
        ...state, 
        recipes: action.payload.data.recipeBox.Recipes,
        articles: action.payload.data.recipeBox.Articles
      }
    case RECIPEBOX.ADD_RECIPE_FAILURE:
    case RECIPEBOX.DELETE_RECIPE_SUCCESS:
      return { ...state, lastModified: [...state.lastModified, {...action.payload, type: 'recipe', action: 'delete'}] }
    case RECIPEBOX.DELETE_RECIPE_FAILURE:
      return state;

    default:
      return state
  }
}

export default loginReducers
