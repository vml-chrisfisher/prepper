import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import FeaturedContentRow from '../components/featuredContentRow'
import FeatureContentRowProps from '../components/featuredContentRow/interface'
import Footer from '../components/footer'
import GeneralContentRow from '../components/generalContentRow'
import HeaderContainer from '../components/header/container'
import { HeaderTheme } from '../components/header/interface'
import Sidebar from '../components/header/profile_login_create_account'
import HomeHero from '../components/homeHero'
import Layout from '../components/layout'
import MainContainer from '../components/layout/mainContainer'
import VideoBackground from '../components/videoBackground'
import { HomeEdge, HomeProps } from '../page-interfaces/home'
import styles from './blog.css'

class RootIndex extends React.Component<HomeProps> {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const posts: HomeEdge[] = get(this, 'props.data.allContentfulHomePage.edges')
    const post: HomeEdge = posts[0]
    const videoPath = 'https://knifeandfish.s3.amazonaws.com/knifefishbackground.mp4'
    const mobileVideoPath = 'https://knifeandfish.s3.amazonaws.com/knifeandfishmobile.mp4'
    const headline = 'Delicious<br>organic,<br>locally sourced</br>sustainable<br>meals for everyone.'
    const searchQuestion = post.node.searchQuestion
    const searchPlaceholder = post.node.searchPlaceholder

    const recipes = get(this, 'props.data.allContentfulRecipe.edges')
    console.log(recipes)
    const recipeFeatures: FeatureContentRowProps = {
      details: {
        title: 'Recipes',
        description: 'Delicious<br>organic,<br>locally sourced</br>sustainable<br>meals for everyone.',
        buttonCaption: 'Find Recipes',
        slug: '/recipes',
        theme: HeaderTheme.LIGHT,
        backgroundColor: 'transparent',
      },
      basePath: 'recipes',
      features: recipes.map((recipe: any) => {
        return {
          title: recipe.node.title,
          slug: recipe.node.slug,
          description: recipe.node.bodyCopy.childMarkdownRemark.rawMarkdownBody,
          imagePath: recipe.node.bannerImage.file.url,
          imageDescription: recipe.node.bannerImage.title,
          basePath: 'recipe',
        }
      }),
    }
    console.log(recipeFeatures)

    const articles = get(this, 'props.data.allContentfulArticle.edges')
    const articleFeatures: FeatureContentRowProps = {
      details: {
        title: 'Articles',
        description: 'From learning the best knife to buy or how to cut an onion correctly.',
        buttonCaption: 'Explore Articles',
        slug: '/articles',
        theme: HeaderTheme.LIGHT,
        backgroundColor: 'transparent',
      },
      basePath: 'article',
      features: articles.map((article: any) => {
        return {
          title: article.node.title,
          slug: article.node.slug,
          description: article.node.bodyCopy.childMarkdownRemark.rawMarkdownBody,
          imagePath: article.node.bannerImage.file.url,
          imageDescription: article.node.bannerImage.title,
          basePath: 'article',
        }
      }),
    }

    // const MainContainer = styled.div`
    //   background-color: #fff;
    //   position: absolute;
    //   top: 15.625em;

    //   @media (max-width: 767px) {
    //     top: 6em;
    //   }
    // `

    return (
      <Layout>
        <HeaderContainer {...{ theme: HeaderTheme.DARK }} />
        <Helmet title="Knife & Fish">
          <link rel="canonical" href="https://www.knifeandfish.com"></link>
        </Helmet>
        <MainContainer id="mainContainer">
          <div style={{ background: '#fff', display: 'list-item' }}>
            <VideoBackground {...{ videoPath, mobileVideoPath }} />
          </div>
          <div className={styles.homeContent}>
            <div className="container">
              <HomeHero {...{ headline, searchPlaceholder, searchQuestion }}></HomeHero>
              {/* <FeaturedVegetableRow /> */}
              <FeaturedContentRow {...recipeFeatures} />
              <FeaturedContentRow {...articleFeatures} />
              <GeneralContentRow />
              <Footer {...{ theme: HeaderTheme.LIGHT }} />
            </div>
          </div>
        </MainContainer>
        <Sidebar></Sidebar>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHomePage {
      edges {
        node {
          backgroundVideo {
            file {
              url
            }
          }
          headline {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          searchPlaceholder
          searchQuestion
        }
      }
    }
    allContentfulRecipe(limit: 3, sort: { fields: createdAt, order: DESC }) {
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
        }
      }
    }
    allContentfulArticle(limit: 3, sort: { fields: createdAt, order: DESC }) {
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
        }
      }
    }
  }
`
