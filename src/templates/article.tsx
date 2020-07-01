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
  render() {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    const articleFeatures: FeatureContentRowProps = {
      details: {
        title: 'Recipes',
        description:
          'I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage',
        buttonCaption: 'Find Recipes',
        slug: '/recipes',
        theme: HeaderTheme.DARK,
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

    const structuredDataArticle = `{
		"@context": "http://schema.org",
		"@type": "NewsArticle",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://knifeandfish.com/article/${post.slug}"
		},
		"headline": "${post.title}",
		"image": "${post.heroImage.file.url}",
		"datePublished": "${post.createdAt}",
		"dateModified": "${post.createdAt}",
		"author": {
			"@type": "Organization",
			"name": "Knife and Fish"
		},
		"articleBody": "${post.bodyCopy.childMarkdownRemark.rawMarkdownBody}",
		"publisher": {
			"@type": "Organization",
			"name": "Knife and Fish",
			"logo": {
				"@type": "ImageObject",
				"url": "${post.heroImage.file.url}"
			}
		},
		"description": "${post.bodyCopy.childMarkdownRemark.rawMarkdownBody}",
		"url": "'https://www.knifeandfish.com/article/${post.slug}'"
  }`

    return (
      <Layout meta={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} location={this.props.location}>
        <MainContainer style={{ background: '#fff' }}>
          <Helmet>
            {/* The description that appears under the title of your website appears on search engines results */}
            <meta name="description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />

            {/* The thumbnail of your website */}
            <meta name="image" content={post.heroImage.file.url} />

            {/* Opengraph meta tags for Facebook & LinkedIn */}
            <meta property="og:url" content="'https://www.knifeandfish.com/article/${post.slug}'" />
            <meta property="og:type" content="NewsArticle" />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />
            <meta property="og:image" content={post.heroImage.file.url} />

            {/* These tags work for Twitter & Slack, notice I've included more custom tags like reading time etc... */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="knifeandfisher1" />
            <meta name="twitter:site" content="knifeandfisher1" />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />
            <meta name="twitter:image:src" content={post.heroImage.file.url} />
            <meta name="twitter:label1" value="Reading time" />
            <meta name="twitter:data1" value={`5 min read`} />
            <meta name="author" content="Knife and Fish" data-react-helmet="true" />
            <meta name="article:published_time" content={post.createdAt} data-react-helmet="true" />

            {/* Structured data */}
            <script type="application/ld+json">{structuredDataArticle}</script>

            {/* The title of your current page */}
            <title>{post.title} | Knife & Fish</title>

            {/* Default language and direction */}
            <html lang="en" dir="ltr" />
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
              offset={1000}
            >
              <picture>
                <source type="image/webp" srcSet={`${post.heroImage.file.url}?fm=webp&q=80&w=${windowWidth}`} />
                <source type="image/jpg" srcSet={`${post.heroImage.file.url}?fm=jpg&q=80&w=${windowWidth}`} />
                <img
                  src={`${post.heroImage.file.url}?fm=jpg&q=80&w=${Math.round(windowWidth)}&h=${Math.round(
                    windowWidth,
                  )}&fit=fill`}
                  alt={post.heroImage.description}
                />
              </picture>
            </LazyLoad>
            <LazyLoad
              className="hidden-lg"
              style={{ width: '100%', paddingBottom: '56%', backgroundColor: '#FEFEFE' }}
              once
              offset={1000}
            >
              <picture>
                <source type="image/webp" srcSet={`${post.bannerImage.file.url}?fm=webp&q=80&w=${windowWidth}`} />
                <source type="image/jpg" srcSet={`${post.bannerImage.file.url}?fm=jpg&q=80&w=${windowWidth}`} />
                <img
                  src={`${post.bannerImage.file.url}?fm=jpg&q=80&w=${Math.round(windowWidth)}&h=${Math.round(
                    windowWidth,
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
                {post.sections.map((section: ArticleSecionInterface, index: number) => {
                  return <ArticleSection key={`article-section-${index}`} {...section} />
                })}
                <TagContainer className="col12">
                  <h3>Tags</h3>
                  {post.tags.map((tag: ArticleTag, index: number) => {
                    return <TagStyled key={`tag-${index}`}>{tag.tag}</TagStyled>
                  })}
                </TagContainer>
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
      heroImage {
        description
        file {
          url
        }
        title
      }
      bannerImage {
        description
        file {
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
  }
`
