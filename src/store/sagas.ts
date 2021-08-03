import { all, takeEvery } from 'redux-saga/effects'
import { fetchHeaderProductCategoryDetailAsync } from './ducks/header/sagas'
import { HEADER_ACTION_TYPES } from './ducks/header/types'
import { createHouseholdFromSurveyAsync } from './ducks/household/sagas'
import { CREATE_HOUSEHOLD_FROM } from './ducks/household/types'
import { localStorageLoginAsync, submitLoginAsync } from './ducks/login/sagas'
import { LOGIN_STEPS } from './ducks/login/types'
import { submitNewsletterEmailAsync } from './ducks/newsletter/sagas'
import { NEWSLETTER_ACTION_TYPES } from './ducks/newsletter/types'
import { fetchProfileAsync } from './ducks/profile/sagas'
import { PROFILE_STEPS } from './ducks/profile/types'
import {
  fetachAllArticleRatingsAsync,
  fetachAllRecipeRatingsAsync,
  submitArticleRatingAsync,
  submitRecipeRatingAsync,
} from './ducks/ratings/sagas'
import { RATINGS } from './ducks/ratings/types'
import { RECIPEBOX } from './ducks/recipesBox/types'
import { submitSearchAsync } from './ducks/search/sagas'
import { SEARCH_ACTION_TYPES } from './ducks/search/types'
import {
  fetchMostCookedRecipesRecommendationsAsync,
  fetchRecentlyAddedArticlesRecommendationsAsync,
  fetchRecentlyAddedRecipesRecommendationsAsync,
  fetchRecentlyViewedRecipesRecommendationsAsync,
  fetchRecipesBoxAsync,
  submitRecipeBoxArticleAddAsync,
  submitRecipeBoxArticleAddViewAsync,
  submitRecipeBoxArticleDeleteAsync,
  submitRecipeBoxRecipeAddAsync,
  submitRecipeBoxRecipeAddCookedAsync,
  submitRecipeBoxRecipeAddViewAsync,
  submitRecipeBoxRecipeDeleteAsync,
} from './ducks/recipesBox/sagas'
import {
  removeRecipeAsync,
  submitHelloContactAsync,
  submitPartnershipContactAsync,
  submitRecipeContactAsync,
  submitSuggestionContactAsync,
  uploadRecipeAsync,
} from './ducks/contact/sagas'
import {
  CONTACT_HELLO_STEPS,
  CONTACT_PARTNERSHIP_STEPS,
  CONTACT_RECIPE_STEPS,
  CONTACT_SUGGESTION_STEPS,
} from './ducks/contact/types'

function* watchFetchHeaderProductCategoryDetail() {
  yield takeEvery(HEADER_ACTION_TYPES.CATEGORY_SELECTED, fetchHeaderProductCategoryDetailAsync)
}

function* watchSubmitNewsletterEmail() {
  yield takeEvery(NEWSLETTER_ACTION_TYPES.SUBMIT, submitNewsletterEmailAsync)
}

function* watchSearch() {
  yield takeEvery(SEARCH_ACTION_TYPES.SEARCH, submitSearchAsync)
}

function* watchLogin() {
  yield takeEvery(LOGIN_STEPS.SUBMIT_LOGIN, submitLoginAsync)
}

function* watchProfile() {
  yield takeEvery(PROFILE_STEPS.LOAD, fetchProfileAsync)
}

function* watchHelloContact() {
  yield takeEvery(CONTACT_HELLO_STEPS.SUBMIT_HELLO, submitHelloContactAsync)
}

function* watchRecipeContact() {
  yield takeEvery(CONTACT_RECIPE_STEPS.SUBMIT_RECIPE, submitRecipeContactAsync)
}

function* watchSuggestionContact() {
  yield takeEvery(CONTACT_SUGGESTION_STEPS.SUBMIT_SUGGESTION, submitSuggestionContactAsync)
}

function* watchPartnershipContact() {
  yield takeEvery(CONTACT_PARTNERSHIP_STEPS.SUBMIT_PARTNERSHIP, submitPartnershipContactAsync)
}

// function* watchCreateHouseholdFromNewsletter() {
//   yield takeEvery(CREATE_HOUSEHOLD_FROM.NEWSLETTER, createHouseholdFromNewsletterAsync)
// }

function* watchCreateHouseholdFromSurvey() {
  yield takeEvery(CREATE_HOUSEHOLD_FROM.SURVEY, createHouseholdFromSurveyAsync)
}

function* watchUploadRecipe() {
  yield takeEvery(CONTACT_RECIPE_STEPS.UPLOAD_RECIPE, uploadRecipeAsync)
}

function* watchRemoveRecipe() {
  yield takeEvery(CONTACT_RECIPE_STEPS.TRY_REMOVE_RECIPE, removeRecipeAsync)
}

function* watchFetchRecipesBox() {
  yield takeEvery(RECIPEBOX.TRY_FETCH_RECIPEBOX, fetchRecipesBoxAsync)
}

function* watchRecipeBoxAddRecipe() {
  yield takeEvery(RECIPEBOX.TRY_ADD_RECIPE, submitRecipeBoxRecipeAddAsync)
}

function* watchRecipeAddView() {
  yield takeEvery(RECIPEBOX.TRY_ADD_RECIPE_VIEW, submitRecipeBoxRecipeAddViewAsync)
}

function* watchRecipeAddCooked() {
  yield takeEvery(RECIPEBOX.TRY_ADD_RECIPE_COOKED, submitRecipeBoxRecipeAddCookedAsync)
}

function* watchRecipeBoxDeleteRecipe() {
  yield takeEvery(RECIPEBOX.TRY_DELETE_RECIPE, submitRecipeBoxRecipeDeleteAsync)
}

function* watchRecipeBoxAddArticle() {
  yield takeEvery(RECIPEBOX.TRY_ADD_ARTICLE, submitRecipeBoxArticleAddAsync)
}

function* watchRecipeBoxDeleteArticle() {
  yield takeEvery(RECIPEBOX.TRY_DELETE_ARTICLE, submitRecipeBoxArticleDeleteAsync)
}

function* watchArticleAddView() {
  yield takeEvery(RECIPEBOX.TRY_ADD_ARTICLE_VIEW, submitRecipeBoxArticleAddViewAsync)
}

function* watchLocalStorageLogin() {
  yield takeEvery(LOGIN_STEPS.TRY_LOCAL_STORAGE_LOGIN, localStorageLoginAsync)
}

function* watchRecentlyAddedRecipesRecommendations() {
  yield takeEvery(
    RECIPEBOX.TRY_FETCH_RECENTLY_ADDED_RECIPES_RECOMMENDATIONS,
    fetchRecentlyAddedRecipesRecommendationsAsync,
  )
}

function* watchRecentlyViewedRecipesRecommendations() {
  yield takeEvery(
    RECIPEBOX.TRY_FETCH_RECENTLY_VIEWED_RECIPES_RECOMMENDATIONS,
    fetchRecentlyViewedRecipesRecommendationsAsync,
  )
}

function* watchMostCookedRecipesRecommendations() {
  yield takeEvery(RECIPEBOX.TRY_FETCH_MOST_COOKED_RECIPES_RECOMMENDATIONS, fetchMostCookedRecipesRecommendationsAsync)
}

function* watchRecentlyAddedArticlesRecommendations() {
  yield takeEvery(
    RECIPEBOX.TRY_FETCH_RECENTLY_ADDED_ARTICLES_RECOMMENDATIONS,
    fetchRecentlyAddedArticlesRecommendationsAsync,
  )
}

function* watchRecentlyViewedArticlesRecommendation() {
  yield takeEvery(
    RECIPEBOX.TRY_FETCH_RECENTLY_VIEWED_ARTICLES_RECOMMENDATIONS,
    fetchRecentlyViewedRecipesRecommendationsAsync,
  )
}

function* watchAddRecipeRating() {
  yield takeEvery(RATINGS.TRY_ADD_RECIPE_RATING, submitRecipeRatingAsync)
}

function* watchAddArticleRating() {
  yield takeEvery(RATINGS.TRY_ADD_ARTICLE_RATING, submitArticleRatingAsync)
}

function watchFetchAllRecipeRatings() {
  yield takeEvery(RATINGS.TRY_FETCH_ALL_RECIPE_RATINGS, fetachAllRecipeRatingsAsync)
}

function* watchFetchAllArticleRatings() {
  yield takeEvery(RATINGS.TRY_FETCH_ALL_ARTICLE_RATINGS, fetachAllArticleRatingsAsync)
}

export default function* rootSaga() {
  yield all([
    watchCreateHouseholdFromSurvey(),
    watchFetchHeaderProductCategoryDetail(),
    watchFetchRecipesBox(),
    watchHelloContact(),
    watchLogin(),
    watchPartnershipContact(),
    watchProfile(),
    watchRecipeBoxAddRecipe(),
    watchRecipeAddView(),
    watchRecipeAddCooked(),
    watchRecipeBoxDeleteRecipe(),
    watchArticleAddView(),
    watchRecipeContact(),
    watchRemoveRecipe(),
    watchSearch(),
    watchSubmitNewsletterEmail(),
    watchSuggestionContact(),
    watchUploadRecipe(),
    watchRecipeBoxAddArticle(),
    watchRecipeBoxDeleteArticle(),
    watchLocalStorageLogin(),
    watchRecentlyAddedRecipesRecommendations(),
    watchRecentlyViewedRecipesRecommendations(),
    watchMostCookedRecipesRecommendations(),
    watchRecentlyAddedArticlesRecommendations(),
    watchRecentlyViewedArticlesRecommendation(),
    watchAddRecipeRating(),
    watchAddArticleRating(),
    watchFetchAllRecipeRatings(),
    watchFetchAllArticleRatings(),
  ])
}
