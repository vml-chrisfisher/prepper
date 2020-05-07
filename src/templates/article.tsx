import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';


class ArticleTemplate extends React.Component<any> {
  render() {
    
    const post = get(this.props, 'data.contentfulArticle')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className="hero">
            <Img
              className="heroImage"
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    contentfulArticle(slug: {eq: $slug}) {
    bodyCopy {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
    heroImage {
      file {
        url
      }
      title
    }
    subtitle
    tags {
      tag
    }
    title
    sections {
      bodyCopy {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      images {
        file {
          url
        }
        description
      }
      isTwoColumn
    }
  }
  }

`