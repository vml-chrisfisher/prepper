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

class ArticlesIndex extends React.Component<ArticlesProps> {
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
        contenfulId: post.node.contentful_id,
      }
    })

    while (postsCopy.length > 0) {
      chunked.push(postsCopy.splice(0, chunkSize))
    }

    return (
      <Layout>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6045517989994393"
          crossOrigin="anonymous"
        ></script>

        <HeaderContainer {...{ theme: HeaderTheme.LIGHT }} />
        <MainContainer>
          <Helmet title="Articles | Knife & Fish">
            <link rel="canonical" href="https://www.knifeandfish.com/articles"></link>
          </Helmet>
          <h1>Articles</h1>
          <div className="wrapper">
            <div>
              {chunked.map((chunk: ArticleSummaryInterface[], index: number) => {
                return (
                  <RandomFourSummary
                    key={`articles-chuck-${index}`}
                    {...{ chunk, straight: false }}
                  ></RandomFourSummary>
                )
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
          contentful_id
        }
      }
    }
  }
`
