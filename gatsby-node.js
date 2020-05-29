 /* eslint-disable  @typescript-eslint/no-var-requires */
/* eslint-disable  no-undef */
const Promise = require('bluebird')
const path = require('path')

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

  return Promise.all([articlesPromise, recipesPromise]);
}
