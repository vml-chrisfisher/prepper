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

class RootIndex extends React.Component<any> {
  render() {
    const posts = get(this, 'props.data.allContentfulHomePage.edges')
    const post = posts[0]
    const videoPath = post.node.backgroundVideo.file.url
    const headline = post.node.headline.childMarkdownRemark.rawMarkdownBody
    const searchQuestion = post.node.searchQuestion
    const searchPlaceholder = post.node.searchPlaceholder

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff', display: 'list-item' }}>
          <VideoBackground {...{videoPath} }/>
        </div>
        <div className={styles.homeContent}>
          <div className={baseStyles.container}>
            <HomeHero {...{headline, searchPlaceholder, searchQuestion}}></HomeHero>
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