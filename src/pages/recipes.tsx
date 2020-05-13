import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import ArticleSummaryInterface from '../components/articleSummary/interface';
import Layout from '../components/layout';
import RandomFourSummary from '../components/randomFourSummary';

class RecipeIndex extends React.Component<any> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulRecipe.edges')
    const chunkSize = 4;
    const chunked = []
    let postsCopy = posts.map((post: any) => {
      return {
        title: post.node.title,
        slug: post.node.slug,
        imagePath: post.node.bannerImage.file.url,
        basePath: 'recipe'
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
          <div className='wrapper'>
            <div>
              {chunked.map((chunk: ArticleSummaryInterface[]) => {
                return (
                  <RandomFourSummary {...{chunk}}></RandomFourSummary>
                )
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
  allContentfulRecipe(sort: {fields: createdAt, order: DESC}) {
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
      }
    }
  }
}
`