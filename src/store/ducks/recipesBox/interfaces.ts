export interface RecipesBox {
  Recipes: RecipeBoxRecipes
  Articles: RecipeBoxArticles
}

export interface RecipeBoxRecipes {
  All: Array<RecipeBoxRecipe>
  RecentlyViewed: Array<RecipeBoxRecipe>
  RecentlyAdded: Array<RecipeBoxRecipe>
  MostCooked: Array<RecipeBoxRecipe>
}

export interface RecipeBoxArticles {
  All: Array<RecipeBoxArticle>
  RecentlyViewed: Array<RecipeBoxArticle>
  RecentlyAdded: Array<RecipeBoxArticle>
}

export interface ModifiedRecipeArticle {
  id: string
  type: string
  name: string
  action: string
}

export interface RecipeBoxRecipe {
  userId: string
  recipeId: string
  recipeName: string
  recipeSlug: string
  recipeDescription: string
  recipeImagePath: string
  recipeImageMeta: string
  recipeBasePath: string
  date: string
}

export interface RecipeBoxArticle {
  userId: string
  articleId: string
  articleName: string
  articleSlug: string
  articleDescription: string
  articleImagePath: string
  articleImageMeta: string
  articleBasePath: string
  date: string
}
