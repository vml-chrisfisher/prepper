import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import * as styles from './blog.module.css'
import * as baseStyles from '../components/base.module.css'
import Layout from '../components/layout'
import ArticleSummary from '../components/articleSummary'
import ArticleSummaryInterface from '../components/articleSummary/interface'

class ArticleIndex extends React.Component<any> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArticle.edges')
    console.log(posts)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <h1>Articles</h1>
          <div className={baseStyles.wrapper}>
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

export default ArticleIndex

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