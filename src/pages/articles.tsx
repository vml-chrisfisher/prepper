import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticleSummary from '../components/articleSummary'
import ArticleSummaryInterface from '../components/articleSummary/interface'

class ArticlesIndex extends React.Component<any> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArticle.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff', paddingTop: '144px' }}>
          <Helmet title={siteTitle} />
          <h1>Articles</h1>
          <div className='wrapper'>
            <div className="article-list">
              {posts.map((node: any) => {
                const props: ArticleSummaryInterface = {... node.node, imagePath: node.node.bannerImage.file.url}
                return (
                  <ArticleSummary {... props}></ArticleSummary>
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