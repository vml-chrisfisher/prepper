import { ModifiedRecipeArticle, RecipeBoxArticles, RecipeBoxRecipes } from './interfaces'

export default {
  Recipes: {} as RecipeBoxRecipes,
  Articles: {} as RecipeBoxArticles,
  lastModified: Array<ModifiedRecipeArticle>(),
}
