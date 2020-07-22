import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import StoryHero from '../components/storyHero'
import VideoStoryBackground from '../components/storyVideo'
import VideoBackground from '../components/videoBackground'
import { HomeEdge, HomeProps } from '../page-interfaces/home'
import styles from './blog.css'
import HeaderContainer from '../components/header/container'

class StoryIndex extends React.Component<HomeProps> {
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

    const StoryContainer = styled.div`
      position: relative;
      width: 100%;
    `

    const Title = styled.h2`
      color: #333
      text-align: left;
      padding-top: 30px;
      @media (max-width: 767px) {
        padding-left: 10%;
        width: 80%;
      }
    `

    const BodyCopy = styled.div`
      color: #464646;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      line-height: 2em;
      padding-top: 1.875em;
      padding-bottom: 1.875em;
      text-align: justify;
      @media (max-width: 767px) {
        padding-left: 10%;
        width: 80%;
      }
    `

    const Quote = styled.h4`
      color: #333;
      padding-bottom: 100px;
      @media (max-width: 767px) {
        padding-bottom: 0px;
        padding-left: 10%;
        width: 80%;
      }
    `

    return (
      <Layout location={this.props.location}>
        <HeaderContainer {...{ theme: HeaderTheme.LIGHT }} />
        <Helmet title="Knife & Fish">
          <link rel="canonical" href="https://www.knifeandfish.com/story"></link>
        </Helmet>
        <div className={styles.homeContent}>
          <StoryContainer>
            <VideoStoryBackground {...{ videoPath, mobileVideoPath }} />
            <StoryHero></StoryHero>
            <div className="row">
              <div className="col2" />
              <div className="col8">
                <Title>About Knife and Fish</Title>
                <BodyCopy
                  dangerouslySetInnerHTML={{
                    __html: `I started Knife and Fish as creative outlet for my passion simple and delicious food. Learning through exploring, learning and the pursuit of perfect. Several years ago I married into a family of foodies and have been racing to build my knowledge and palette ever since.<br><br>
                  A half remember quote that goes, "Sit at my table and eat my food, you will know who I am.'  has always ran true for me.  I believe food represents everything that is good about the world.  A meal creates an atmosphere for laughter, conversations, debates and just simple humanity.  It's something we have always needed but now more than ever. <br><br>
                  I balanced between four things when it comes to cooking: <br><br>
                  <b>A soft boiled egg is a perfection I can always get behind.</b><br>
                  It is something that elludes so many people but when done right it's the perfect vehicle for any bite of food.<br><br>
                  <b>Food is love</b><br>
                  No one wakes up at 4 in the morning to smoke 3 pounds of meat or stands in front of a stove for 10 hours, just for the hell of it.<br><br>
                  <b>The perfect bite is something to always strive for.</b><br>
                  Watch someone take a bite of something, you cooked, that makes for a moment all of their problems go away. How can you not be happy with that.<br><br>
                  <b>No one gives a shit about your curry if you fuck up the rice</b><br>
                  The basics are always the hardest to perfect but are the base to everything.<br>
                 
                  `,
                  }}
                ></BodyCopy>
                <Quote>
                  {' '}
                  <i>Anyone can cook, so just go do it.</i>
                </Quote>
              </div>
              <div className="col2" />
            </div>
            <Footer {...{ theme: HeaderTheme.DARK }} />
          </StoryContainer>
        </div>
      </Layout>
    )
  }
}

export default StoryIndex

export const pageQuery = graphql`
  query StoryQuery {
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
