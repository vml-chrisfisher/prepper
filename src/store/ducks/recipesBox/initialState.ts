export interface ModifiedRecipeArticle {
  id: string,
  type: string,
  name: string,
  action: string
}

export default {
  recipes: Array<ModifiedRecipeArticle>(),
  articles: Array<ModifiedRecipeArticle>(),
  lastModified: Array<ModifiedRecipeArticle>()
}
