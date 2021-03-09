 /* eslint-disable  @typescript-eslint/no-var-requires */
/* eslint-disable  no-undef */
const Promise = require('bluebird')
const path = require('path')
const { resolve } = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const articlesPromise = new Promise((resolve, reject) => {
    const articleTemplate = path.resolve('./src/templates/article.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulArticle {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const articles = result.data.allContentfulArticle.edges
        articles.forEach((article) => {
          createPage({
            path: `/article/${article.node.slug}/`,
            component: articleTemplate,
            context: {
              slug: article.node.slug
            },
          })
        })
      })
    )
  })

  const recipesPromise = new Promise((resolve, reject) => {
    const recipeTemplate = path.resolve('./src/templates/recipe.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulRecipe {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const recipes = result.data.allContentfulRecipe.edges
        recipes.forEach((recipe) => {
          createPage({
            path: `/recipe/${recipe.node.slug}/`,
            component: recipeTemplate,
            context: {
              slug: recipe.node.slug
            },
          })
        })
      })
    )
  })
  const recipesAMPPromise = new Promise((resolve, reject) => {
    const recipeAmpTemplate = path.resolve('./src/templates/recipeAmp.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulRecipe {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log("ERRORS: ", result.errors)
          reject(result.errors)
        }

        const recipes = result.data.allContentfulRecipe.edges
        recipes.forEach((recipe) => {
          createPage({
            path: `/recipe/amp/${recipe.node.slug}/`,
            component: recipeAmpTemplate,
            context: {
              slug: recipe.node.slug
            },
          })
        })
      })
    )
  })
  const mealTypes = ['Appetizer', 'Condiment', 'Dessert', 'Drink', 'Main', 'Side', 'Snack']
  const recipeMealTypePromises = mealTypes.map(mealType => {
    new Promise((resolve, reject) => {
      const recipeMealTypeTemplate = path.resolve('./src/templates/recipeMealType.tsx')
      resolve(
        createPage({
          path: `/recipes/${mealType.toLowerCase()}/`,
          component: recipeMealTypeTemplate,
          context: {
            mealType: mealType
          },
        })
      )
    })
  })

  return Promise.all([articlesPromise, recipesPromise, recipesAMPPromise, recipeMealTypePromises])
}
