import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import ContactHero from '../components/ContactHero'
import ContactTabs from '../components/contactTabs'
import Footer from '../components/footer'
import HeaderContainer from '../components/header/container'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import { ContactEdge } from '../page-interfaces/contact'
import styles from './blog.css'

class ContactIndex extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const posts: ContactEdge[] = get(this, 'props.data.allContentfulContactLayout.edges')
    const layout: ContactEdge = posts[0]
    console.log(layout)

    const StoryContainer = styled.div`
      position: relative;
      width: 100%;
`

    const BodyCopy = styled.div`
      color: #464646;
      font-size: 1em;
      font-family: 'Roboto', sans-serif;
      line-height: 2em;
      padding-top: 1.875em;
      padding-bottom: 1.875em;
      text-align: justify;

      @media (max-width: 767px) {
        padding-left: 10%;
        width: 80%;
      }
`
    console.log(layout.node.recipeCopy.content[0].content[0].value)
    return (
      <Layout>
        <HeaderContainer {...{ theme: HeaderTheme.LIGHT }} />
        <Helmet title="Knife & Fish">
          <link rel="canonical" href="https://www.knifeandfish.com/contact"></link>
        </Helmet>
        <div className={styles.homeContent}>
          <StoryContainer>
            <ContactHero
              {...{
                heroPath: layout.node.heroImage.file.url,
                title: layout.node.title.content[0].content[0].value,
                copy: layout.node.copy.content[0].content[0].value,
                helloTab: layout.node.helloTabName,
                helloCopy: layout.node.helloCopy.content[0].content[0].value,
                recipeTab: layout.node.recipeTabName,
                recipeCopy: layout.node.recipeCopy.content[0].content[0].value,
                suggestionTab: layout.node.suggestionTabName,
                suggestionCopy: layout.node.suggestionCopy.content[0].content[0].value,
                partnershipTab: layout.node.partnershipTabName,
                partnershipCopy: layout.node.partnershipCopy.content[0].content[0].value,
              }}
            ></ContactHero>

            <Footer {...{ theme: HeaderTheme.DARK }} />
          </StoryContainer>
        </div>
      </Layout>
    )
  }
}

export default ContactIndex

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulContactLayout {
      edges {
        node {
          heroImage {
            file {
              url
            }
          }
          helloTabName
          helloCopy {
            content {
              content {
                value
              }
            }
          }
          recipeTabName
          recipeCopy {
            content {
              content {
                value
              }
            }
          }
          suggestionTabName
          suggestionCopy {
            content {
              content {
                value
              }
            }
          }
          partnershipTabName
          partnershipCopy {
            content {
              content {
                value
              }
            }
          }
          copy {
            content {
              content {
                value
              }
            }
          }
          title {
            content {
              content {
                value
              }
            }
          }
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
