import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticleSummary from '../components/articleSummary'
import ArticleSummaryInterface from '../components/articleSummary/interface'
import RandomFourSummary from '../components/randomFourSummary'

class ArticlesIndex extends React.Component<any> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArticle.edges')
    console.log("size: ", posts.length)
    const chunkSize = 4;
    const chunked = []
    let postsCopy = posts.map((post: any) => {
      return {
        title: post.node.title,
        slug: post.node.slug,
        imagePath: post.node.bannerImage.file.url
      }
    })

    while (postsCopy.length > 0) {
      chunked.push(postsCopy.splice(0, chunkSize))
    }

    console.log("CHUCNKS: ", chunked)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff', paddingTop: '144px' }}>
          <Helmet title={siteTitle} />
          <h1>Articles</h1>
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

export default ArticlesIndex

export const pageQuery = graphql`
  query AllArticlesQuery {
  allContentfulArticle(sort: {fields: createdAt, order: DESC}) {
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