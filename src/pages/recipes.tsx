import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import ArticleSummaryInterface from '../components/articleSummary/interface'
import Layout from '../components/layout'
import RandomFourSummary from '../components/randomFourSummary'
import { RecipesProps, RecipesEdge } from '../page-interfaces/recipes'

class RecipeIndex extends React.Component<RecipesProps> {
  render() {
    const siteTitle: string = get(this, 'props.data.site.siteMetadata.title')
    const posts: RecipesEdge[] = get(this, 'props.data.allContentfulRecipe.edges')
    const chunkSize = 4
    const chunked: ArticleSummaryInterface[][] = []
    const postsCopy: ArticleSummaryInterface[] = posts.map((post: RecipesEdge) => {
      return {
        basePath: 'recipe',
        description: '',
        imagePath: post.node.bannerImage.file.url,
        slug: post.node.slug,
        title: post.node.title,
      }
    })

    while (postsCopy.length > 0) {
      chunked.push(postsCopy.splice(0, chunkSize))
    }

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff', paddingTop: '250px', position: 'absolute', top: '0', width: '100%' }}>
          <Helmet title={siteTitle} />
          <h1>Recipes</h1>
          <div className="wrapper">
            <div>
              {chunked.map((chunk: ArticleSummaryInterface[], index: number) => {
                return <RandomFourSummary key={`recipes-chunk-${index}`} {...{ chunk }}></RandomFourSummary>
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RecipeIndex

export const pageQuery = graphql`
  query AllRecipesQuery {
    allContentfulRecipe(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          bannerImage {
            file {
              url
            }
            title
          }
          title
          slug
          mealType
          preparationType
        }
      }
    }
  }
`
