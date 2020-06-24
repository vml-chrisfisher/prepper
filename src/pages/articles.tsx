import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import ArticleSummaryInterface from '../components/articleSummary/interface'
import Footer from '../components/footer'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import RandomFourSummary from '../components/randomFourSummary'
import { ArticlesEdge, ArticlesProps } from '../page-interfaces/articles'

class ArticlesIndex extends React.Component<ArticlesProps> {
  render() {
    const MainContainer = styled.div`
      background-color: #fff;
      position: absolute;
      top: 15.625em;
      width: 100%;
      @media (max-width:767px) {
        top: 6em;
    `
    const siteTitle: string = get(this, 'props.data.site.siteMetadata.title')
    const posts: ArticlesEdge[] = get(this, 'props.data.allContentfulArticle.edges')
    const chunkSize = 4
    const chunked: ArticleSummaryInterface[][] = []
    const postsCopy: ArticleSummaryInterface[] = posts.map((post: any) => {
      return {
        description: '',
        title: post.node.title,
        slug: post.node.slug,
        imagePath: post.node.bannerImage.file.url,
        imageDescription: post.node.bannerImage.title,
        basePath: 'article',
      }
    })

    while (postsCopy.length > 0) {
      chunked.push(postsCopy.splice(0, chunkSize))
    }

    return (
      <Layout
        meta="Garden with confidence. Cook with passion. Enjoy your food. Create conversation.  Find recipes, search our encyclopedia of gardening and cooking tips and ingredients, watch food videos, and more."
        location={this.props.location}
      >
        <MainContainer>
          <Helmet title="Knife & Fish | Articles" />
          <h1>Articles</h1>
          <div className="wrapper">
            <div>
              {chunked.map((chunk: ArticleSummaryInterface[], index: number) => {
                return <RandomFourSummary key={`articles-chuck-${index}`} {...{ chunk }}></RandomFourSummary>
              })}
            </div>
          </div>
          <Footer {...{ theme: HeaderTheme.DARK }} />
        </MainContainer>
      </Layout>
    )
  }
}

export default ArticlesIndex

export const pageQuery = graphql`
  query AllArticlesQuery {
    allContentfulArticle(sort: { fields: createdAt, order: DESC }) {
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
