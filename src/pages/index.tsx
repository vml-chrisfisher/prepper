import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import * as baseStyles from '../components/base.module.css';
import Footer from '../components/footer';
import HomeHero from '../components/homeHero';
import Layout from '../components/layout';
import VideoBackground from '../components/videoBackground';
import * as styles from './blog.module.css';
import FeaturedContentRow from '../components/featuredContentRow'
import ArticleSummaryInterface from '../components/articleSummary/interface'
import FeatureContentRowProps from '../components/featuredContentRow/interface'
import FeaturedVegetableRow from '../components/featuredVegetableRow'

class RootIndex extends React.Component<any> {
  render() {
    const posts = get(this, 'props.data.allContentfulHomePage.edges')
    const post = posts[0]
    const videoPath = post.node.backgroundVideo.file.url
    const headline = post.node.headline.childMarkdownRemark.rawMarkdownBody
    const searchQuestion = post.node.searchQuestion
    const searchPlaceholder = post.node.searchPlaceholder

    const recipeFeatures: FeatureContentRowProps = {
      details: {
        title: 'Recipes',
        description: "I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage",
        buttonCaption: 'Find Recipes',
        slug: '/recipes'
      },
      features: [
        {
          title: 'Cornmeal Fried Okra',
          slug: 'Okra',
          imagePath: '/fried-okra-rectangle.jpg',
          description: 'The finished stew should be decidedly sour, tamarind’s calling card, but you’re in control of how ­puckery things get.'
        },
        {
          title: 'Sausage, Shrimp and Okra Gumbo',
          slug: 'Okra',
          imagePath: '/Gumbo-11.jpg',
          description: 'For authentic gumbo, add filé, a Creole herb found in better markets.'
        },
        {
          title: 'Stir Fried Okra',
          slug: 'Okra',
          imagePath: '/stir-fried-okra.jpg',
          description: 'Working in batches ensures golden and tender okra, not soft and slimy.'
        }
      ]
    }

    const articleFeatures: FeatureContentRowProps = {
      
      details: {
        title: 'May Articles',
        description: "I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage",
        buttonCaption: 'Explore May Posts',
        slug: '/articles'
      },
      features: [
        {
          title: 'Spring Seedling To Start Now',
          slug: 'Okra',
          imagePath: '/andrej-lisakov-zYUn4R37o_U-unsplash.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          title: 'Compost',
          slug: 'Okra',
          imagePath: '/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg',
          description: "Erat velit scelerisque in dictum non consectetur a erat. Nunc pulvinar sapien et ligula ullamcorper malesuada proin."
        },
        {
          title: 'Spring Root Vegetables',
          slug: 'Okra',
          imagePath: '/heather-gill-VJa9L3ZVBIc-unsplash.jpg',
          description: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Malesuada bibendum arcu vitae elementum."
        }
      ]
    }

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff', display: 'list-item' }}>
          <VideoBackground {...{videoPath} }/>
        </div>
        <div className={styles.homeContent}>
          <div className={baseStyles.container}>
            <HomeHero {...{headline, searchPlaceholder, searchQuestion}}></HomeHero>
            <FeaturedVegetableRow />
            <FeaturedContentRow {...recipeFeatures} />
            <FeaturedContentRow {...articleFeatures} />
            <Footer />
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