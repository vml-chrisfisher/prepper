import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import FeaturedContentRow from '../components/featuredContentRow'
import FeatureContentRowProps from '../components/featuredContentRow/interface'
import FeaturedVegetableRow from '../components/featuredVegetableRow'
import Footer from '../components/footer'
import GeneralContentRow from '../components/generalContentRow'
import { HeaderTheme } from '../components/header/interface'
import HomeHero from '../components/homeHero'
import Layout from '../components/layout'
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
    const headline = post.node.headline.childMarkdownRemark.rawMarkdownBody
    const searchQuestion = post.node.searchQuestion
    const searchPlaceholder = post.node.searchPlaceholder

    const recipes = get(this, 'props.data.allContentfulRecipe.edges')
    const recipeFeatures: FeatureContentRowProps = {
      details: {
        title: 'Recipes',
        description: 'Creating a meal, creates conversations and brings people to together. Let us help you.',
        buttonCaption: 'Find Recipes',
        slug: '/recipes',
        theme: HeaderTheme.LIGHT,
        backgroundColor: 'transparent',
      },
      basePath: 'recipes',
      features: recipes.map((recipe: any) => {
        console.log(recipe)
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

    const articles = get(this, 'props.data.allContentfulArticle.edges')
    const articleFeatures: FeatureContentRowProps = {
      details: {
        title: 'Articles',
        description:
          'From learning the best knife to buy or how to cut an onion correctly, we trying to give everyone the knowledge needed.',
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

    return (
      <Layout location={this.props.location}>
        <Helmet title="Knife & Fish" />
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
