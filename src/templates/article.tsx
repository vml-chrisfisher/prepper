import styled from '@emotion/styled'
import dateformat from 'dateformat'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'
import ArticleSection from '../components/articleSection'
import ArticleSecionInterface from '../components/articleSection/interface'
import FeaturedContentRow from '../components/featuredContentRow'
import FeatureContentRowProps from '../components/featuredContentRow/interface'
import Footer from '../components/footer'
import GeneralContentRow from '../components/generalContentRow'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import { AllContentfulArticle, ArticleProps, ArticleTag } from '../template-interfaces/article'

class ArticleTemplate extends React.Component<ArticleProps> {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const Title = styled.h1`
      padding: 0 0 0.4em 0;
      @media (max-width: 767px) {
        font-size: 3.5em;
        padding: 0;
      }
    `

    const CreateDate = styled.div`
      text-align: center;
      font-family: 'Nunito', sans-serif;
      font-size: 1em;
      padding-bottom: 3.125em;
    `

    const TagContainer = styled.div`
      display: inline-block;
      width: 100%;
      padding-right: 4%;
      @media (max-width: 767px) {
        padding-left: 10%;
        width: 80%;
      }
    `

    const TagStyled = styled.p`
      color: #464646;
      display: inline-block;
      font-size: 0.75em;
      font-family: 'Nunito', sans-serif;
      padding-right: 20px;
      text-transform: uppercase;
    `

    const BodyCopy = styled.div`
      color: #464646;
      column-count: 2;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      line-height: 2em;
      padding-top: 1.875em;
      padding-bottom: 1.875em;
      text-align: justify;
      @media (max-width: 767px) {
        column-count: 1;
        padding-left: 10%;
        width: 80%;
      }
    `

    const MainContainer = styled.div`
      background-color: #fff;
      position: absolute;
      top: 15.625em;
      @media (max-width: 767px) {
        top: 6em;
      }
    `

    const Col2Full = styled.div`
      width: 16.66%;
      @media (max-width: 767px) {
        width: 100%;
      }
    `

    const Col8Full = styled.div`
      width: 66.66%;
      @media (max-width: 767px) {
        width: 100%;
      }
    `

    const post: AllContentfulArticle = get(this.props, 'data.contentfulArticle')
    const postCreate = dateformat(post.createdAt, 'fullDate')
    const expirationDateRaw = new Date(post.updatedAt)
    expirationDateRaw.setFullYear(expirationDateRaw.getFullYear())

    const tags = post.tags.map((tag: ArticleTag) => {
      return tag.tag
    })

    const structuredDataArticle = `{
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://knifeandfish.com/article/${post.slug}"
      },
      "headline": "${post.title}",
      "image": ["${post.heroImage.file.url}"],
      "datePublished": "${post.createdAt}",
      "dateModified": "${post.createdAt}",
      "author": {
        "@type": "Person",
        "name": "Chris Fisher"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Knife and Fish",
        "logo": {
          "@type": "ImageObject",
          "url": "//images.ctfassets.net/ce6fbxhy1t51/4rf552O0YO79rkWIvVg00Y/5d820bf870030801d3c4e9569d727b41/logo.svg"
        }
      }
    }`

    const recipes = get(this, 'props.data.allContentfulRecipe.edges')
    const recipeFeatures: FeatureContentRowProps = {
      details: {
        title: 'Recipes',
        description: 'Creating a meal, creates conversations and brings people to together. Let us help you.',
        buttonCaption: 'Find Recipes',
        slug: '/recipes',
        theme: HeaderTheme.LIGHT,
        backgroundColor: '#bc940a',
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

    const articles = get(this, 'props.data.allContentfulArticle.edges')
    const articleFeatures: FeatureContentRowProps = {
      details: {
        title: 'Articles',
        description: 'From learning the best knife to buy or how to cut an onion correctly.',
        buttonCaption: 'Explore',
        slug: '/articles',
        theme: HeaderTheme.LIGHT,
        backgroundColor: '#1e5c14',
      },
      basePath: 'articles',
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

    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    const heroHeight =
      (post.heroImage.file.details.image.height * windowWidth) / post.heroImage.file.details.image.width
    const bannerHeight =
      (post.bannerImage.file.details.image.height * windowWidth) / post.bannerImage.file.details.image.width

    return (
      <Layout location={this.props.location}>
        <MainContainer style={{ background: '#fff' }}>
          <Helmet>
            {/* The description that appears under the title of your website appears on search engines results */}
            <meta name="description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />
            <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1"></meta>
            {/* The thumbnail of your website */}
            <meta name="image" content={post.heroImage.file.url} />

            {/* Opengraph meta tags for Facebook & LinkedIn */}
            <meta property="og:url" content={`https://www.knifeandfish.com/article/${post.slug}`} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />
            <meta property="og:image" content={post.heroImage.file.url} />
            <meta property="og:article:published_time" content={post.createdAt} />
            <meta property="og:article:modified_time" content={post.updatedAt} />
            <meta property="og:article:expiration_time" content={expirationDateRaw.toISOString()} />
            <meta property="og:article:author" content="Chris Fisher" />
            <meta property="og:article:section" content="Cooking" />
            <meta property="og:article:tag" content={tags.toString()} />

            {/* These tags work for Twitter & Slack, notice I've included more custom tags like reading time etc... */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="knifeandfisher1" />
            <meta name="twitter:site" content="knifeandfisher1" />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />
            <meta name="twitter:image:src" content={post.heroImage.file.url} />
            <meta
              name="twitter:image:alt"
              content="Knife and Fish is a food and cocktail blog, from the midwest, with a focus on approachable meals and classic cocktails."
            />
            <meta name="author" content="Knife and Fish" data-react-helmet="true" />
            <meta name="article:published_time" content={post.createdAt} data-react-helmet="true" />

            {/* Structured data */}
            <script type="application/ld+json">{structuredDataArticle}</script>
            <link rel="canonical" href={location.href}></link>
            {/* The title of your current page */}
            <title>{post.title} | Knife & Fish</title>

            {/* Default language and direction */}
            <html lang="en" dir="ltr" amp />
          </Helmet>
          <div>
            <div className="row">
              <div className="col3" />
              <div className="col6">
                <Title className="section-headline">{post.title}</Title>
                <CreateDate>{postCreate}</CreateDate>
              </div>
              <div className="col3" />
            </div>
            <LazyLoad
              className="hidden-sm"
              style={{ width: '100%', paddingBottom: '56%', backgroundColor: '#FEFEFE' }}
              once
              offset={100}
            >
              <picture>
                <source type="image/webp" srcSet={`${post.heroImage.file.url}?fm=webp&q=70&w=${windowWidth}`} />
                <source type="image/jpg" srcSet={`${post.heroImage.file.url}?fm=jpg&q=70&w=${windowWidth}`} />
                <img
                  src={`${post.heroImage.file.url}?fm=jpg&q=70&w=${Math.round(windowWidth)}&h=${Math.round(
                    heroHeight,
                  )}&fit=fill`}
                  alt={post.heroImage.description}
                />
              </picture>
            </LazyLoad>
            <LazyLoad
              className="hidden-lg"
              style={{ width: '100%', paddingBottom: '56%', backgroundColor: '#FEFEFE' }}
              once
              offset={100}
            >
              <picture>
                <source type="image/webp" srcSet={`${post.bannerImage.file.url}?fm=webp&q=70&w=${windowWidth}`} />
                <source type="image/jpg" srcSet={`${post.bannerImage.file.url}?fm=jpg&q=70&w=${windowWidth}`} />
                <img
                  src={`${post.bannerImage.file.url}?fm=jpg&q=70&w=${Math.round(windowWidth)}&h=${Math.round(
                    bannerHeight,
                  )}&fit=fill`}
                  alt={post.bannerImage.description}
                />
              </picture>
            </LazyLoad>
            <div className="row">
              <Col2Full className="col2" />
              <Col8Full className="col8">
                <BodyCopy
                  dangerouslySetInnerHTML={{
                    __html: post.bodyCopy.childMarkdownRemark.rawMarkdownBody,
                  }}
                ></BodyCopy>
                {post.sections &&
                  post.sections.length > 0 &&
                  post.sections.map((section: ArticleSecionInterface, index: number) => {
                    return <ArticleSection key={`article-section-${index}`} {...section} />
                  })}
                <TagContainer className="col12">
                  <h3>Tags</h3>
                  {post.tags.map((tag: ArticleTag, index: number) => {
                    return <TagStyled key={`tag-${index}`}>{tag.tag}</TagStyled>
                  })}
                </TagContainer>
                <FeaturedContentRow {...recipeFeatures} />
                <FeaturedContentRow {...articleFeatures} />
                <GeneralContentRow />
                <Footer {...{ theme: HeaderTheme.DARK }} />
              </Col8Full>
              <Col2Full className="col2" />
            </div>
          </div>
        </MainContainer>
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      bodyCopy {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      slug
      createdAt
      updatedAt
      heroImage {
        description
        file {
          details {
            image {
              height
              width
            }
          }
          url
        }
      }
      bannerImage {
        description
        file {
          details {
            image {
              height
              width
            }
          }
          url
        }
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
          description
          file {
            url
          }
          description
        }
        isTwoColumn
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
