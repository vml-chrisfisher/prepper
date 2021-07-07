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
}
