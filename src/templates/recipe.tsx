import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';


class RecipeTemplate extends React.Component<any> {
  render() {
    console.log(this.props)
    const post = get(this.props, 'data.contentfulRecipe')
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

export default RecipeTemplate

export const pageQuery = graphql`
  query RecipeBySlug($slug: String) {
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