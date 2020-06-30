export interface RecipesProps {
  location: Location
  data: RecipesData
}

export interface RecipesData {
  site: RecipesSite
}

export interface RecipesSite {
  siteMetaData: RecipeSiteMetaData
}

export interface RecipeSiteMetaData {
  title: string
}

export interface AllContentfulRecipe {
  edges: RecipesEdge[]
}

export interface RecipesEdge {
  node: RecipesNode
}

export interface RecipesNode {
  bannerImage: RecipesBannerImage
  bodyCopy: {
    childMarkdownRemark: {
      rawMarkdownBody: string
    }
  }
  mealType: string
  preparationType: string
  slug: string
  title: string
}

export interface RecipesBannerImage {
  file: RecipeBannerImageFile
  title: string
}

export interface RecipeBannerImageFile {
  url: string
}
