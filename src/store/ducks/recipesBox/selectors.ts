export const getRecipesBox = (state: any) => state?.recipesBox || {}

export const getRecipesBoxRecipes = (state: any) => {
  return getRecipesBox(state).recipes
}

export const getRecipesBoxArticles = (state: any) => {
  return getRecipesBox(state).articles
}

export const getRecipeBoxIsRecipeSelected = (state: any, recipeId: string) => {
  if (getRecipesBoxRecipes(state)) {
    const recipesFound = getRecipesBoxRecipes(state)?.filter((recipe: string) => {
      return recipe === recipeId
    })

    return recipesFound && recipesFound?.length > 0
  } else {
    return false;
  }

}

export const getRecipesBoxIsArticleSelected = (state: any, articleId: string) => {
  if (getRecipesBoxArticles(state)) {
    const articlesFound = getRecipesBoxArticles(state)?.filter((article: string) => {
      return article === articleId
    })

    return articlesFound && articlesFound?.length > 0;
  } else {
    return false;
  }
}
