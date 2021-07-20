import {
  ModifiedRecipeArticle,
  RecipeBoxArticle,
  RecipeBoxArticles,
  RecipeBoxRecipe,
  RecipeBoxRecipes,
} from './interfaces'
import { getRecipeBoxIsRecipeSelected } from './selectors'

export default {
  Recipes: {} as RecipeBoxRecipes,
  Articles: {} as RecipeBoxArticles,
  lastModified: Array<ModifiedRecipeArticle>(),
}
