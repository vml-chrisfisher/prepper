import styled from '@emotion/styled'
import dateformat from 'dateformat'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'
import { useDispatch, useSelector } from 'react-redux'
import ArticleSection from '../components/articleSection'
import ArticleSecionInterface from '../components/articleSection/interface'
import Bookmark from '../components/common/buttons/bookmark'
import FeaturedContentRow from '../components/featuredContentRow'
import FeatureContentRowProps from '../components/featuredContentRow/interface'
import Footer from '../components/footer'
import GeneralContentRow from '../components/generalContentRow'
import HeaderContainer from '../components/header/container'
import { HeaderTheme } from '../components/header/interface'
import Sidebar from '../components/header/profile_login_create_account'
import Layout from '../components/layout'
import MainContainer from '../components/layout/mainContainer'
import RatingBar from '../components/ratingBar'
import { onShowRecipesBoxLoginRegisterNotifcation } from '../store/ducks/header/actions'
import { getUserId } from '../store/ducks/profile/selectors'
import { onTryFetchArticleRating } from '../store/ducks/ratings/action'
import Rating from '../store/ducks/ratings/interface'
import { getArticleRating } from '../store/ducks/ratings/selectors'
import { onTryAddArticle, onTryAddArticleView, onTryDeleteArticle } from '../store/ducks/recipesBox/actions'
import { RecipeBoxArticle, RecipeBoxArticlePayload } from '../store/ducks/recipesBox/interfaces'
import { AllContentfulArticle, ArticleProps, ArticleTag } from '../template-interfaces/article'

const ArticleTemplate = (props: ArticleProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  })

  const Title = styled.h1`
    padding: 0 0 0.4em 0;

    @media (max-width: 767px) {
      font-size: 3.5em;
      padding: 0;
    }
  `

  const CreateDate = styled.div`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 100;
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
    font-family: 'Roboto', sans-serif;
    padding-right: 20px;
    text-transform: uppercase;
  `

  const BodyCopy = styled.div`
    color: #464646;
    column-count: 2;
    font-size: 0.85em;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
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

  const ArticleMainContainer = styled.div`
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

  const SocialBar = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 20px;
    padding-top: 2em;
    padding-bottom: 10em;
  `

  const InstagramSocialIcon = styled.svg`
    display: inline-block;
    fill: #464646;
    height: 20px;
    padding-right: 20px;
    width: 20px;
    &:hover {
      fill: #f24e11;
    }
  `

  const RatingBarContainer = styled.div`
    padding-top: 30px;
  `

  const post: AllContentfulArticle = get(props, 'data.contentfulArticle')
  const postCreate = dateformat(post.createdAt, 'fullDate')
  const expirationDateRaw = new Date(post.updatedAt)
  const articleId = post.contentful_id
  expirationDateRaw.setFullYear(expirationDateRaw.getFullYear())

  const tags = post.tags.map((tag: ArticleTag) => {
    return tag.tag
  })

  const userId = useSelector(getUserId)

  const dispatch = useDispatch()

  useEffect(() => {
    if (userId) {
      const article: RecipeBoxArticlePayload = {
        userId: userId,
        articleId: articleId,
        articleName: post.title,
        articleSlug: post.slug,
        articleDescription: post.bodyCopy.childMarkdownRemark.rawMarkdownBody,
        articleImagePath: post.bannerImage.file.url,
        articleImageMeta: post.bannerImage.description,
        articleBasePath: 'article',
        date: new Date().toString(),
      }
    }
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
    features: recipes?.map((recipe: any) => {
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
    features: articles?.map((article: any) => {
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

  const onArticleBookmarkClick = (event: React.MouseEvent, isSelected: boolean) => {
    event.preventDefault()
    if (userId) {
      if (isSelected) {
        dispatch(onTryDeleteArticle({ userId: userId, articleId: articleId, articleName: post.title }))
      } else {
        dispatch(
          onTryAddArticle({
            userId: userId,
            articleId: articleId,
            articleName: post.title,
            articleSlug: post.slug,
            articleDescription: post.bodyCopy.childMarkdownRemark.rawMarkdownBody,
            articleImagePath: post.heroImage.file.url,
            articleImageMeta: post.heroImage.description,
            articleBasePath: 'article',
            date: new Date().toString(),
          }),
        )
      }
    } else {
      // show pop up for new account or login
      dispatch(onShowRecipesBoxLoginRegisterNotifcation())
    }
  }

  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
  const heroHeight = (post.heroImage.file.details.image.height * windowWidth) / post.heroImage.file.details.image.width
  const bannerHeight =
    (post.bannerImage.file.details.image.height * windowWidth) / post.bannerImage.file.details.image.width

  return (
    <Layout>
      <HeaderContainer {...{ theme: HeaderTheme.LIGHT }} />
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
        <link rel="canonical" href={`https://www.knifeandfish.com/article/${post.slug}`}></link>
        {/* The title of your current page */}
        <title>{post.title} | Knife &amp; Fish</title>

        {/* Default language and direction */}
        <html lang="en" dir="ltr" />
      </Helmet>
      <MainContainer id="mainContainer">
        <ArticleMainContainer style={{ background: '#fff' }}>
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
              style={{ width: '100%', paddingBottom: '56%', backgroundColor: '#fefefe' }}
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
              style={{ width: '100%', paddingBottom: '56%', backgroundColor: '#fefefe' }}
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
              <div className="col2"></div>
              <div className="col8">
                <div className="row">
                  <div className="col6 col-12-sm">
                    <RatingBarContainer>
                      <RatingBar articleId={articleId}></RatingBar>
                    </RatingBarContainer>
                  </div>
                  <div className="col6 col-12-sm">
                    <SocialBar>
                      <a aria-label="Knife and Fish Pinterest" href="https://www.pinterest.com/knifeandfish/">
                        <InstagramSocialIcon>
                          <path
                            d="M0,10c0.1-2.8,1.1-5.2,3-7.1S7.3,0,10,0c2.9,0.1,5.3,1,7.2,3C19,4.9,20,7.3,20,10c-0.1,2.8-1.1,5.2-3,7.1
	C15,19,12.7,20,10,20c-0.9,0-1.9-0.1-2.8-0.4c0.2-0.3,0.4-0.6,0.5-1c0.2-0.4,0.5-1.3,0.8-2.5c0.1-0.3,0.2-0.8,0.4-1.4
	C9,15,9.4,15.3,9.8,15.6c1.2,0.5,2.4,0.5,3.7-0.2c1.4-0.8,2.3-2,2.8-3.6c0.5-1.7,0.4-3.3-0.2-4.8c-0.6-1.5-1.6-2.5-3.1-3.2
	C11.1,3.3,9.3,3.3,7.5,4s-3,1.8-3.8,3.4C3.5,8,3.4,8.6,3.4,9.2c0,0.6,0,1.2,0.1,1.7C3.5,11.5,3.7,12,4,12.4c0.3,0.4,0.7,0.8,1.2,1
	c0.1,0.1,0.2,0.1,0.3,0c0.1-0.1,0.2-0.3,0.3-0.6C6,12.5,6,12.2,6,12.1c0-0.1-0.1-0.1-0.2-0.3C5.3,10.9,5.1,10,5.3,9
	c0.2-1,0.6-1.8,1.2-2.5c1-0.9,2.1-1.3,3.4-1.4c1.3-0.1,2.4,0.3,3.3,1.1c0.5,0.6,0.8,1.3,1,2.1c0.1,0.8,0.1,1.6,0,2.3
	c-0.1,0.7-0.4,1.4-0.8,2.1c-0.7,1-1.4,1.5-2.3,1.6c-0.5,0-0.9-0.2-1.3-0.6c-0.3-0.4-0.4-0.8-0.3-1.3c0.1-0.3,0.2-0.8,0.5-1.7
	c0.3-0.8,0.4-1.5,0.4-1.9c-0.1-1-0.5-1.5-1.4-1.5C8.4,7.3,7.9,7.6,7.6,8.1S7.1,9.2,7.1,9.8c0.1,0.8,0.2,1.3,0.4,1.6
	c-0.3,1.2-0.5,2.1-0.7,2.8c-0.1,0.2-0.2,0.7-0.4,1.7C6.1,16.8,6,17.6,6,18v1.1c-1.8-0.9-3.3-2.1-4.4-3.7S0,12,0,10z"
                          />
                        </InstagramSocialIcon>
                      </a>
                      <a aria-label="Knife and Fish Instagram" href="https://www.instagram.com/knifeandfish/">
                        <InstagramSocialIcon>
                          <path
                            d="M15.3,3.5L15.3,3.5c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2c0.7,0,1.2-0.5,1.2-1.2S16,3.5,15.3,3.5L15.3,3.5z
	 M19.9,5.9c0-0.8-0.2-1.7-0.5-2.4c-0.3-0.7-0.7-1.3-1.2-1.8c-0.5-0.5-1.1-0.9-1.8-1.2c-0.8-0.3-1.6-0.5-2.4-0.5C13.1,0,12.7,0,10,0
	S6.9,0,5.9,0.1C5,0.1,4.2,0.2,3.4,0.5C2.8,0.8,2.2,1.2,1.7,1.7C1.2,2.2,0.8,2.8,0.5,3.4C0.2,4.2,0.1,5,0.1,5.9C0,6.9,0,7.3,0,10
	s0,3.1,0.1,4.1c0,0.8,0.2,1.7,0.5,2.4c0.2,0.7,0.6,1.3,1.1,1.8c0.5,0.5,1.1,0.9,1.8,1.1c0.8,0.3,1.6,0.5,2.4,0.5
	C6.9,20,7.3,20,10,20s3.1,0,4.1-0.1c0.8,0,1.7-0.2,2.4-0.5c0.7-0.2,1.3-0.6,1.8-1.1c0.5-0.5,0.9-1.1,1.2-1.8
	c0.3-0.8,0.4-1.6,0.5-2.4c0-1.1,0.1-1.4,0.1-4.1S20,6.9,19.9,5.9z M18.1,14c0,0.6-0.1,1.3-0.3,1.9c-0.2,0.4-0.4,0.8-0.8,1.1
	c-0.3,0.3-0.7,0.6-1.1,0.8c-0.6,0.2-1.2,0.3-1.9,0.3c-1,0-1.4,0.1-4,0.1s-3,0-4-0.1c-0.7,0-1.3-0.1-1.9-0.3C3.7,17.6,3.3,17.4,3,17
	c-0.3-0.3-0.6-0.7-0.7-1.1C2,15.3,1.9,14.7,1.9,14c0-1-0.1-1.4-0.1-4s0-3,0.1-4c0-0.6,0.1-1.3,0.4-1.9C2.4,3.7,2.7,3.3,3,3
	c0.3-0.3,0.7-0.6,1.1-0.8C4.7,2,5.4,1.9,6,1.9c1,0,1.4-0.1,4-0.1s3,0,4,0.1c0.6,0,1.3,0.1,1.9,0.3C16.3,2.4,16.7,2.6,17,3
	c0.3,0.3,0.6,0.7,0.8,1.1C18,4.7,18.1,5.4,18.1,6c0,1,0.1,1.4,0.1,4S18.2,13,18.1,14z M10,4.9c-2.8,0-5.1,2.3-5.1,5.1
	c0,2.8,2.3,5.1,5.1,5.1c2.8,0,5.1-2.3,5.1-5.1C15.1,7.2,12.9,4.9,10,4.9C10,4.9,10,4.9,10,4.9z M10,13.3c-1.8,0-3.3-1.5-3.3-3.3
	S8.2,6.7,10,6.7s3.3,1.5,3.3,3.3l0,0C13.3,11.8,11.8,13.3,10,13.3z"
                          />
                        </InstagramSocialIcon>
                      </a>
                      <a aria-label="Knife and Fish Facebook" href="https://www.facebook.com/knifeandfish">
                        <InstagramSocialIcon>
                          <path
                            d="M20,10c0-5.5-4.5-10-10-10S0,4.5,0,10c0,5,3.7,9.1,8.4,9.9v-7H5.9V10h2.5V7.8c0-2.5,1.5-3.9,3.8-3.9
	c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6V10h2.8l-0.4,2.9h-2.3v7C16.3,19.1,20,15,20,10z"
                          />
                          <path
                            d="M711.3,660L734,512H592v-96c0-40.5,19.8-80,83.4-80H740V210c0,0-58.6-10-114.6-10
	c-117,0-193.4,70.9-193.4,199.2V512H302v148h130v357.8c53,8.3,107,8.3,160,0V660H711.3z"
                          />
                        </InstagramSocialIcon>
                      </a>
                      <Bookmark
                        idToFollow={articleId}
                        onClick={(event: React.MouseEvent, isSelected: boolean) => {
                          onArticleBookmarkClick(event, isSelected)
                        }}
                      />
                    </SocialBar>
                  </div>
                </div>
              </div>
              <div className="col2"></div>
            </div>
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
        </ArticleMainContainer>
      </MainContainer>
      <Sidebar></Sidebar>
    </Layout>
  )
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
      contentful_id
      id
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
