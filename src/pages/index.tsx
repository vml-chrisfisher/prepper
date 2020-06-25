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
  render() {
    const posts: HomeEdge[] = get(this, 'props.data.allContentfulHomePage.edges')
    const post: HomeEdge = posts[0]
    const videoPath = 'https://knifeandfish.s3.amazonaws.com/knifefishbackground.mp4'
    const headline = post.node.headline.childMarkdownRemark.rawMarkdownBody
    const searchQuestion = post.node.searchQuestion
    const searchPlaceholder = post.node.searchPlaceholder

    const recipeFeatures: FeatureContentRowProps = {
      details: {
        title: 'Recipes',
        description:
          'I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage',
        buttonCaption: 'Find Recipes',
        slug: '/recipes',
        theme: HeaderTheme.LIGHT,
      },
      features: [
        {
          title: 'Cornmeal Fried Okra',
          slug: 'Okra',
          imagePath:
            '//images.ctfassets.net/ce6fbxhy1t51/46pHQHUxijoTd2fpcYq3w6/52e78a0c5ab047359f4b10259b1c059f/fried-okra-rectangle.jpg',
          description:
            'The finished stew should be decidedly sour, tamarind’s calling card, but you’re in control of how ­puckery things get.',
          basePath: 'recipe',
        },
        {
          title: 'Sausage, Shrimp and Okra Gumbo',
          slug: 'Okra',
          imagePath:
            '//images.ctfassets.net/ce6fbxhy1t51/nWI1iStg20DSjv0xqjyfJ/d0ae7ed21130834667a60a4cfac3042e/Gumbo-11.jpg',
          description: 'For authentic gumbo, add filé, a Creole herb found in better markets.',
          basePath: 'recipe',
        },
        {
          title: 'Stir Fried Okra',
          slug: 'Okra',
          imagePath:
            '//images.ctfassets.net/ce6fbxhy1t51/6erFjTvbIYftFkbDbaXi6i/c08cee40d7ebd49ae5fe757314f4c59b/stir-fried-okra.jpg',
          description: 'Working in batches ensures golden and tender okra, not soft and slimy.',
          basePath: 'recipe',
        },
      ],
      basePath: 'recipe',
    }

    const articleFeatures: FeatureContentRowProps = {
      details: {
        title: 'May Articles',
        description:
          'I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage',
        buttonCaption: 'Explore May Posts',
        slug: '/articles',
        theme: HeaderTheme.LIGHT,
      },
      features: [
        {
          title: 'Spring Seedling To Start Now',
          slug: 'Okra',
          imagePath: '/andrej-lisakov-zYUn4R37o_U-unsplash.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          basePath: 'article',
        },
        {
          title: 'Compost',
          slug: 'Okra',
          imagePath: '/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg',
          description:
            'Erat velit scelerisque in dictum non consectetur a erat. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.',
          basePath: 'article',
        },
        {
          title: 'Spring Root Vegetables',
          slug: 'Okra',
          imagePath: '/heather-gill-VJa9L3ZVBIc-unsplash.jpg',
          description:
            'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Malesuada bibendum arcu vitae elementum.',
          basePath: 'article',
        },
      ],
      basePath: 'article',
    }

    return (
      <Layout
        meta="Garden with confidence. Cook with passion. Enjoy your food. Create conversation.  Find recipes, search our encyclopedia of gardening and cooking tips and ingredients, watch food videos, and more."
        location={this.props.location}
      >
        <Helmet title="Knife & Fish" />
        <div style={{ background: '#fff', display: 'list-item' }}>
          <VideoBackground {...{ videoPath }} />
        </div>
        <div className={styles.homeContent}>
          <div className="container">
            <HomeHero {...{ headline, searchPlaceholder, searchQuestion }}></HomeHero>
            <FeaturedVegetableRow />
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
  }
`
