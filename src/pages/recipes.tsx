import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import ArticleSummaryInterface from '../components/articleSummary/interface'
import Footer from '../components/footer'
import HeaderContainer from '../components/header/container'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import RandomFourSummary from '../components/randomFourSummary'
import { RecipesEdge, RecipesProps } from '../page-interfaces/recipes'

class RecipeIndex extends React.Component<RecipesProps> {
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
    const posts: RecipesEdge[] = get(this, 'props.data.allContentfulRecipe.edges')
    const chunkSize = 4
    const chunked: ArticleSummaryInterface[][] = []
    const postsCopy: ArticleSummaryInterface[] = posts.map((post: RecipesEdge) => {
      const copyLength =
        post.node.bodyCopy.childMarkdownRemark.rawMarkdownBody.length < 250
          ? post.node.bodyCopy.childMarkdownRemark.rawMarkdownBody.length
          : 250
      const copyRaw = post.node.bodyCopy.childMarkdownRemark.rawMarkdownBody.substr(0, copyLength)
      const lastPeriod = copyRaw.lastIndexOf('.')
      const copy = lastPeriod ? copyRaw.substr(0, lastPeriod + 1) : copyRaw
      return {
        basePath: 'recipe',
        description: copy,
        imagePath: post.node.bannerImage.file.url,
        imageDescription: post.node.bannerImage.title,
        slug: post.node.slug,
        title: post.node.title,
      }
    })

    while (postsCopy.length > 0) {
      chunked.push(postsCopy.splice(0, chunkSize))
    }

    return (
      <Layout>
        <HeaderContainer {...{ theme: HeaderTheme.DARK }} />
        <MainContainer>
          <Helmet title="Recipes | Knife & Fish">
            <link rel="canonical" href="https://wwww.knifeandfish.com/recipes"></link>
          </Helmet>

          <h1>Recipes</h1>
          <div className="wrapper">
            <div>
              {chunked.map((chunk: ArticleSummaryInterface[], index: number) => {
                return <RandomFourSummary key={`recipes-chunk-${index}`} {...{ chunk }}></RandomFourSummary>
              })}
            </div>
          </div>
          <Footer {...{ theme: HeaderTheme.DARK }} />
        </MainContainer>
      </Layout>
    )
  }
}

export default RecipeIndex

export const pageQuery = graphql`
  query AllRecipesQuery {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      edges {
        node {
          bannerImage {
            file {
              url
            }
            title
          }
          bodyCopy {
            childMarkdownRemark {
              rawMarkdownBody
            }
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
