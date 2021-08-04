import { ModifiedRecipeArticle, RecipeBoxArticle, RecipeBoxRecipe, RecipesBox } from './interfaces'

export const getRecipesBox = (state: any) => {
  return (state?.recipesBox as RecipesBox) || ({} as RecipesBox)
}

export const getRecipesBoxRecipes = (state: any) => {
  return getRecipesBox(state).Recipes
}

export const getRecipesBoxArticles = (state: any) => {
  return getRecipesBox(state).Articles
}

export const getRecipeBoxIsRecipeSelected = (state: any, recipeId: string) => {
  if (getRecipesBoxRecipes(state)?.All) {
    const recipesFound = getRecipesBoxRecipes(state)?.All.filter((recipe: RecipeBoxRecipe) => {
      return recipe.recipeId === recipeId
    })

    return recipesFound && recipesFound?.length > 0
  } else {
    return false
  }
}

export const getRecipesBoxIsArticleSelected = (state: any, articleId: string) => {
  if (getRecipesBoxArticles(state)?.All) {
    const articlesFound = getRecipesBoxArticles(state)?.All.filter((article: RecipeBoxArticle) => {
      return article.articleId === articleId
    })

    return articlesFound && articlesFound?.length > 0
  } else {
    return false
  }
}

export const getRecipesBoxRecipesRecentlyViewed = (state: any) => {
  getRecipesBox(state).Recipes.RecentlyViewed
}

export const getRecipesBoxRecipesRecentlyAdded = (state: any) => {
  getRecipesBox(state).Recipes.RecentlyAdded
}

export const getRecipesBoxRecipesMostCooked = (state: any) => {
  getRecipesBox(state).Recipes.MostCooked
}

export const getRecipesBoxArticlesRecentlyViewed = (state: any) => {
  getRecipesBox(state).Articles.RecentlyViewed
}

export const getRecipeBoxArticlesRecentlyAdded = (state: any) => {
  getRecipesBox(state).Articles.RecentlyAdded
}
