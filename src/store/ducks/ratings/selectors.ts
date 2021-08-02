import Rating from './interface'

export const getRatings = (state: any) => {
  return state?.ratings || {}
}

export const getAllRecipeRatings = (state: any) => {
  return getRatings(state)?.recipes || Array<Rating>()
}

export const getAllArticleRatings = (state: any) => {
  return getRatings(state)?.articles || Array<Rating>()
}

export const getRecipeRating = (state: any, recipeId: string) => {
  const needle = getAllRecipeRatings(state).find((recipeRating: Rating) => {
    recipeRating.id === recipeId
  })

  return needle ? needle : { id: recipeId, rating: 0, numberOfRatings: 0 }
}

export const getArticleRating = (state: any, articleId: string) => {
  const needle = getAllArticleRatings(state).find((articleRating: Rating) => {
    articleRating.id === articleId
  })

  return needle ? needle : { id: articleId, rating: 0, numberOfRatings: 0 }
}
