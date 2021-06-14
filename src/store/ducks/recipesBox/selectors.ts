export const getRecipesBox = (state: any) => state?.recipesBox || {}

export const getRecipeBoxRecipes = (state: any) => {
  return getRecipesBox(state).recipes
}

export const getRecipeBoxIsRecipeSelected = (state: any, recipeId: string) => {
  const recipesFound = getRecipeBoxRecipes(state).filter((recipe: string) => {
    return recipe === recipeId
  })

  return recipesFound.length
}
