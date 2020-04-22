import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import * as styles from './blog.module.css'
import * as baseStyles from '../components/base.module.css'
import Layout from '../components/layout'
import ArticleSummary from '../components/articleSummary'
import ArticleSummaryInterface from '../components/articleSummary/interface'
import VegetablesSummary from '../components/vegetableSummary'
import VegetablesSummaryInterface from '../components/vegetableSummary/interface'

class VegetablesIndex extends React.Component<any> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulVegetable.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff', paddingTop: '144px' }}>
          <Helmet title={siteTitle} />
          <h1>Vegetables</h1>
          <div className={baseStyles.wrapper}>
            <div className="article-list">
              {posts.map((node: any) => {
                const props: VegetablesSummaryInterface = { ...node.node, 
                  imagePath: node.node.bannerImage.file.url,
                  parentVegetable: node.node.parentVegetable.name
                }
                return (
                  <VegetablesSummary {...props}></VegetablesSummary>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default VegetablesIndex

export const pageQuery = graphql`
  query AllVegetablesQuery {
  allContentfulVegetable(sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        bannerImage {
          file {
            url
          }
        }
        title
        slug
        parentVegetable {
          name
        }
      }
    }
  }
}

`