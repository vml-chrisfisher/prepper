import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import VideoBackground from '../components/videoBackground';
import VideoBackgroundProps from '../components/videoBackground/interface';

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
          <VideoBackground {...{videoPath, headline, searchPlaceholder, searchQuestion} }/>
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