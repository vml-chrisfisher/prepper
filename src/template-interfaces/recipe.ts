export interface RecipeProps {
  location: Location
  data: RecipeData
}

export interface RecipeData {
  site: RecipeSite
  contentfulRecipe: AllContentfulRecipe
}

export interface RecipeSite {
  siteMetaData: RecipeSiteMetaData
}

export interface RecipeSiteMetaData {
  title: string
}

export interface AllContentfulRecipe {
  bannerImage: RecipeBannerImage
  bodyCopy: {
    childMarkdownRemark: {
      rawMarkdownBody: string
    }
  }
  createdAt: string
  heroImage: RecipeBannerImage
  mealType: string
  proteinType: string
  slug: string
  title: string
  vegetableType: string[]
  recipeGroup: RecipeGroup[]
  recipeInstructionGroups: RecipeInstructionGroup[]
}

export interface RecipeBannerImage {
  description: string
  file: {
    url: string
  }
}

export interface RecipeGroup {
  recipeGroupName: string
  ingredients: RecipeIngredient[]
  displayName: string
}

export interface RecipeIngredient {
  ingredient: Ingredient
  prep: {
    prep: string
  }
  recipeQuantity: {
    recipeQuantity: Quantity
    recipeMeasurement: Measurement
  }
}

export interface Ingredient {
  ingredient: string
}

export interface Quantity {
  quantity: {
    childMarkdownRemark: {
      rawMarkdownBody: string
    }
  }
}

export interface Measurement {
  mesurement: {
    childMarkdownRemark: {
      rawMarkdownBody: string
    }
  }
}

export interface RecipeInstructionGroup {
  displayName: string
  instructions: RecipeInstruction[]
  recipeGroupName: string
}

export interface RecipeInstruction {
  instruction: {
    childMarkdownRemark: {
      rawMarkdownBody: string
    }
  }
}
