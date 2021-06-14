import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { ArticleSummaryInterface, ArticleSummaryNode } from '../components/articleSummary/interface'
import Footer from '../components/footer'
import HeaderContainer from '../components/header/container'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import RandomFourSummary from '../components/randomFourSummary'
import { ArticlesEdge, ArticlesProps } from '../page-interfaces/articles'

class RecipeBoxIndex extends React.Component<ArticlesProps> {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const MainContainer = styled.div`
      background-color: #fff;
      position: absolute;
      top: 15.625em;
      width: 100%;

      @media (max-width: 767px) {
        top: 6em;
      }
    `
    const SubHeader = styled.h2`
      font-size: 1.5em;
      letter-spacing: -0.5px;
      padding-bottom: 50px;
    `
    const posts: ArticlesEdge[] = get(this, 'props.data.allContentfulArticle.edges')
    const chunkSize = 4
    const chunked: ArticleSummaryInterface[][] = []
    const postsCopy: ArticleSummaryInterface[] = posts.map((post: ArticleSummaryNode) => {
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
      <Layout>
        <HeaderContainer {...{ theme: HeaderTheme.DARK }} />
        <MainContainer>
          <Helmet title="Articles | Knife & Fish">
            <link rel="canonical" href="https://www.knifeandfish.com/articles"></link>
          </Helmet>
          <h1>Recipe Box</h1>
          <div className="wrapper">
            <section>
              <SubHeader>Recently Viewed</SubHeader>
              <RandomFourSummary key={`articles-chuck-0`} chunk={chunked[0]}></RandomFourSummary>
            </section>
            <section>
              <SubHeader>Recently Added</SubHeader>
              <RandomFourSummary key={`articles-chuck-0`} chunk={chunked[1]}></RandomFourSummary>
            </section>
            <section>
              <SubHeader>Most Cooked</SubHeader>
              <RandomFourSummary key={`articles-chuck-0`} chunk={chunked[2]}></RandomFourSummary>
            </section>
            <div></div>
          </div>
          <Footer {...{ theme: HeaderTheme.DARK }} />
        </MainContainer>
      </Layout>
    )
  }
}

export default RecipeBoxIndex

export const pageQuery = graphql`
  query RecipeBoxQuery {
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
