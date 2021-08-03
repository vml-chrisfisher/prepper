import axios from 'axios'
import { actionChannel, call, put, select } from 'redux-saga/effects'
import { isBrowser } from '../../../utils/auth'
import { RecipeBoxArticle, RecipeBoxRecipe } from './interfaces'
import { getRecipeBoxIsRecipeSelected, getRecipesBoxIsArticleSelected } from './selectors'
import { RECIPEBOX } from './types'

const fetchRecipesBox = (userId: string) => {
  return axios.get(`https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/${userId}`)
}

export function* fetchRecipesBoxAsync(action: any) {
  console.log('FETCHING RECIPE BOX')
  yield put({
    type: RECIPEBOX.FETCHING_RECIPEBOX,
  })
  const userId = action.payload
  if (userId) {
    try {
      const fetchResponse = yield call(fetchRecipesBox, userId)

      yield put({
        type: RECIPEBOX.FETCHED_RECIPEBOX_SUCCESS,
        payload: fetchResponse,
      })

      // yield put ({
      //   type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
      //   payload: userId
      // })
    } catch (error) {
      yield put({
        type: RECIPEBOX.FETCHED_RECIPEBOX_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.FETCHED_RECIPEBOX_FAILURE,
    })
  }
}

const submitRecipeBoxRecipeAdd = (payload: RecipeBoxRecipe) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/recipe/add', payload)
}

export function* submitRecipeBoxRecipeAddAsync(action: any) {
  yield put({
    type: RECIPEBOX.ADDING_RECIPE,
  })

  const { userId, recipeId } = action.payload
  if (userId && recipeId) {
    try {
      yield call(submitRecipeBoxRecipeAdd, action.payload as RecipeBoxRecipe)

      yield put({
        type: RECIPEBOX.ADD_RECIPE_SUCCESS,
        payload: action.payload,
      })
      yield put({
        type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
        payload: userId,
      })
    } catch (error) {
      console.log('LOGIN ERROR: ', error)
      yield put({
        type: RECIPEBOX.ADD_RECIPE_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.ADD_RECIPE_FAILURE,
    })
  }
}

const submitRecipeBoxRecipeAddView = (payload: RecipeBoxRecipe) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/recipe/addView', payload)
}

export function* submitRecipeBoxRecipeAddViewAsync(action: any) {
  const { userId, recipeId } = action.payload

  const state = yield select()
  const isSelected = getRecipeBoxIsRecipeSelected(state, recipeId)
  console.log('IN: ', isSelected, recipeId)

  if (isSelected) {
    yield put({
      type: RECIPEBOX.ADDING_ADD_RECIPE_VIEW,
    })

    if (userId && recipeId) {
      try {
        yield call(submitRecipeBoxRecipeAddView, action.payload as RecipeBoxRecipe)

        yield put({
          type: RECIPEBOX.ADD_RECIPE_VIEW_SUCCESS,
          payload: action.payload,
        })
        yield put({
          type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
          payload: userId,
        })
      } catch (error) {
        yield put({
          type: RECIPEBOX.ADD_RECIPE_VIEW_FAILURE,
        })
      }
    } else {
      yield put({
        type: RECIPEBOX.ADD_RECIPE_VIEW_FAILURE,
      })
    }
  } else {
    const knifeAndFishLocalStorage = isBrowser ? localStorage.getItem('knifeAndFish') : undefined
    if (knifeAndFishLocalStorage) {
      const json = JSON.parse(knifeAndFishLocalStorage)
      const recipesViewed = json.recipesViewed
      if (recipesViewed) {
        const filtered = recipesViewed.filter((needle: string) => {
          needle !== recipeId
        })
        filtered.push(recipeId)
        json.recipesViewed = filtered
      } else {
        json.recipesViewed = [recipeId]
      }
      localStorage.setItem('knifeAndFish', JSON.stringify(json))
    } else {
      localStorage.setItem(
        'knifeAndFish',
        JSON.stringify({
          recipesViewed: [recipeId],
        }),
      )
    }
  }
}

const submitRecipeBoxRecipeAddCooked = (payload: RecipeBoxRecipe) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/recipe/addCooked', payload)
}

export function* submitRecipeBoxRecipeAddCookedAsync(action: any) {
  const { userId, recipeId } = action.payload

  const state = yield select()
  const isSelected = getRecipeBoxIsRecipeSelected(state, recipeId)

  if (isSelected) {
    yield put({
      type: RECIPEBOX.ADDING_ADD_RECIPE_COOKED,
    })

    if (userId && recipeId) {
      try {
        yield call(submitRecipeBoxRecipeAddCooked, action.payload as RecipeBoxRecipe)

        yield put({
          type: RECIPEBOX.ADD_RECIPE_COOKED_SUCCESS,
          payload: action.payload,
        })
        yield put({
          type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
          payload: userId,
        })
      } catch (error) {
        yield put({
          type: RECIPEBOX.ADD_RECIPE_COOKED_FAILURE,
        })
      }
    } else {
      yield put({
        type: RECIPEBOX.ADD_RECIPE_COOKED_FAILURE,
      })
    }
  } else {
    const knifeAndFishLocalStorage = isBrowser ? localStorage.getItem('knifeAndFish') : undefined
    if (knifeAndFishLocalStorage) {
      const json = JSON.parse(knifeAndFishLocalStorage)
      const recipesCooked = json.recipesCooked
      if (recipesCooked) {
        const filtered = recipesCooked.filter((needle: string) => {
          needle !== recipeId
        })
        filtered.push(recipeId)
        json.recipesCooked = filtered
      } else {
        json.recipesCooked = [recipeId]
      }
      localStorage.setItem('knifeAndFish', JSON.stringify(json))
    } else {
      localStorage.setItem(
        'knifeAndFish',
        JSON.stringify({
          recipesCooked: [recipeId],
        }),
      )
    }
  }
}

const submitRecipeBoxRecipeDelete = (creditials: { recipeId: string }) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/recipe/delete', creditials)
}

export function* submitRecipeBoxRecipeDeleteAsync(action: any) {
  yield put({
    type: RECIPEBOX.DELETING_RECIPE,
  })

  const { userId, recipeId } = action.payload
  const creditials = { userId, recipeId }
  if (userId && recipeId) {
    try {
      const loginResponse = yield call(submitRecipeBoxRecipeDelete, creditials)

      yield put({
        type: RECIPEBOX.DELETE_RECIPE_SUCCESS,
        payload: loginResponse.data.message,
      })
      yield put({
        type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
        payload: userId,
      })
    } catch (error) {
      console.log('LOGIN ERROR: ', error)
      yield put({
        type: RECIPEBOX.DELETE_RECIPE_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.DELETE_RECIPE_FAILURE,
    })
  }
}

const fetchRecentlyAddedRecipesRecommendations = () => {
  return axios.get('')
}

export function* fetchRecentlyAddedRecipesRecommendationsAsync(action: any) {
  yield put({
    type: RECIPEBOX.FETCHING_RECENTLY_ADDDED_RECPES_RECOMMENDATIONS,
  })

  try {
    const response = yield call(fetchRecentlyAddedRecipesRecommendations)
  } catch (error) {
    yield put({
      type: RECIPEBOX.FETCH_RECENTLY_ADDED_RECIPES_RECOMMENDATIONS_FAILURE,
    })
  }
}

const fetchRecentlyViewedRecipesRecommendations = () => {
  return axios.get('')
}

export function* fetchRecentlyViewedRecipesRecommendationsAsync(action: any) {
  yield put({
    type: RECIPEBOX.FETCHING_RECENTLY_ADDDED_RECPES_RECOMMENDATIONS,
  })

  try {
    const response = yield call(fetchRecentlyViewedRecipesRecommendations)
  } catch (error) {
    yield put({
      type: RECIPEBOX.FETCH_RECENTLY_ADDED_RECIPES_RECOMMENDATIONS_FAILURE,
    })
  }
}

const fetchMostCookedRecipesRecommendations = () => {
  return axios.get('')
}

export function* fetchMostCookedRecipesRecommendationsAsync(action: any) {
  yield put({
    type: RECIPEBOX.FETCHING_MOSTED_COOKED_RECIPES_RECOMMENDATIONS,
  })

  try {
    const response = yield call(fetchMostCookedRecipesRecommendations)
  } catch (error) {
    yield put({
      type: RECIPEBOX.FETCH_MOKST_COOKED_RECIPES_RECOMMENDATIONS_FAILURE,
    })
  }
}

const submitRecipeBoxArticlesAdd = (payload: RecipeBoxArticle) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/article/add', payload)
}

export function* submitRecipeBoxArticleAddAsync(action: any) {
  yield put({
    type: RECIPEBOX.ADDING_ARTICLE,
  })

  const { userId, articleId } = action.payload
  if (userId && articleId) {
    try {
      yield call(submitRecipeBoxArticlesAdd, action.payload as RecipeBoxArticle)

      yield put({
        type: RECIPEBOX.ADD_ARTICLE_SUCCESS,
        payload: action.payload,
      })
      yield put({
        type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
        payload: userId,
      })
    } catch (error) {
      yield put({
        type: RECIPEBOX.ADD_ARTICLE_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.ADD_ARTICLE_FAILURE,
    })
  }
}

const submitRecipeBoxArticleDelete = (creditials: { articleId: string }) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/article/delete', creditials)
}

export function* submitRecipeBoxArticleDeleteAsync(action: any) {
  yield put({
    type: RECIPEBOX.DELETING_ARTICLE,
  })

  const { userId, articleId } = action.payload
  const creditials = { userId, articleId }
  if (userId && articleId) {
    try {
      const loginResponse = yield call(submitRecipeBoxArticleDelete, creditials)

      yield put({
        type: RECIPEBOX.DELETE_ARTICLE_SUCCESS,
        payload: loginResponse.data.message,
      })
      yield put({
        type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
        payload: userId,
      })
    } catch (error) {
      console.log('LOGIN ERROR: ', error)
      yield put({
        type: RECIPEBOX.DELETE_ARTICLE_FAILURE,
      })
    }
  } else {
    yield put({
      type: RECIPEBOX.DELETE_ARTICLE_FAILURE,
    })
  }
}

const submitRecipeBoxArticleAddView = (payload: RecipeBoxArticle) => {
  return axios.post('https://1yp0zu5x88.execute-api.us-east-1.amazonaws.com/dev/recipesBox/article/addView', payload)
}

export function* submitRecipeBoxArticleAddViewAsync(action: any) {
  const { userId, articleId } = action.payload
  const state = yield select()
  const isSelected = getRecipesBoxIsArticleSelected(state, articleId)

  if (isSelected) {
    yield put({
      type: RECIPEBOX.ADDING_ADD_ARTICLE_VIEW,
    })

    if (userId && articleId) {
      try {
        yield call(submitRecipeBoxArticleAddView, action.payload as RecipeBoxArticle)

        yield put({
          type: RECIPEBOX.ADD_ARTICLE_VIEW_SUCCESS,
          payload: action.payload,
        })
        yield put({
          type: RECIPEBOX.TRY_FETCH_RECIPEBOX,
          payload: userId,
        })
      } catch (error) {
        yield put({
          type: RECIPEBOX.ADD_ARTICLE_VIEW_FAILURE,
        })
      }
    } else {
      yield put({
        type: RECIPEBOX.ADD_ARTICLE_VIEW_FAILURE,
      })
    }
  } else {
    const knifeAndFishLocalStorage = isBrowser ? localStorage.getItem('knifeAndFish') : undefined
    if (knifeAndFishLocalStorage) {
      const json = JSON.parse(knifeAndFishLocalStorage)
      const articlesViewed = json.articlesViewed
      if (articlesViewed) {
        const filtered = articlesViewed.filter((needle: string) => {
          needle !== articleId
        })
        filtered.push(articleId)
        json.articlesViewed = filtered
      } else {
        json.articlesViewed = [articleId]
      }
      localStorage.setItem('knifeAndFish', JSON.stringify(json))
    } else {
      localStorage.setItem(
        'knifeAndFish',
        JSON.stringify({
          articlesViewed: [articleId],
        }),
      )
    }
  }
}

const fetchRecentlyAddedArticlesRecommendations = () => {
  return axios.get('')
}

export function* fetchRecentlyAddedArticlesRecommendationsAsync(action: any) {
  yield put({
    type: RECIPEBOX.FETCHING_RECENTLY_ADDDED_ARTICLES_RECOMMENDATIONS,
  })

  try {
    const response = yield call(fetchRecentlyAddedArticlesRecommendations)
  } catch (error) {
    yield put({
      type: RECIPEBOX.FETCH_RECENTLY_ADDED_ARTICLES_RECOMMENDATIONS_FAILURE,
    })
  }
}

const fetchRecentlyViewedArticlesRecommendations = () => {
  return axios.get('')
}

export function* fetchRecentlyViewedArticlesRecommendationsAsync(action: any) {
  yield put({
    type: RECIPEBOX.FETCHING_RECENTLY_VIEWED_ARTICLES_RECOMMENDATIONS,
  })

  try {
    const response = yield call(fetchRecentlyViewedArticlesRecommendations)
  } catch (error) {
    yield put({
      type: RECIPEBOX.FETCH_RECENTLY_ADDED_ARTICLES_RECOMMENDATIONS_FAILURE,
    })
  }
}
