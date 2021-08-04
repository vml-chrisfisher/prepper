import { filter } from 'lodash'
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
  const filtered = getAllArticleRatings(state).filter((articleRating: any) => {
    return articleRating.DocumentId === recipeId
  })

  if (filtered.length) {
    const total = filtered.reduce((a: any, b: any) => {
      return a + b.Rating
    }, 0)

    return { id: recipeId, rating: total / filtered.length, numberOfRatings: filtered.length }
  }
  return { id: recipeId, rating: 1, numberOfRatings: 0 }
}

export const getArticleRating = (state: any, articleId: string) => {
  const filtered = getAllArticleRatings(state).filter((articleRating: any) => {
    return articleRating.DocumentId === articleId
  })

  if (filtered.length) {
    const total = filtered.reduce((a: any, b: any) => {
      return a + b.Rating
    }, 0)

    return { id: articleId, rating: total / filtered.length, numberOfRatings: filtered.length }
  }
  return { id: articleId, rating: 1, numberOfRatings: 0 }
}
