const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  console.log("HELLO: ", graphql)
  const { createPage } = actions

  const blogPromise = new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
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

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })

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
        articles.forEach((article, index) => {
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
        recipes.forEach((recipe, index) => {
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

  return Promise.all([blogPromise, articlesPromise, recipesPromise]);
}
