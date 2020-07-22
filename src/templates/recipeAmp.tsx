import styled from '@emotion/styled'
import dateformat from 'dateformat'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'
import FeaturedContentRow from '../components/featuredContentRow'
import FeatureContentRowProps from '../components/featuredContentRow/interface'
import Footer from '../components/footer'
import GeneralContentRow from '../components/generalContentRow'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import {
  RecipeProps,
  AllContentfulRecipe,
  RecipeGroup,
  RecipeIngredient,
  RecipeInstructionGroup,
  RecipeInstruction,
  ProteinType,
} from '../template-interfaces/recipe'

class RecipeAMPTemplate extends React.Component<RecipeProps> {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }

  render() {
    let step = 0
    const post: AllContentfulRecipe = get(this.props, 'data.contentfulRecipe')
    const postCreate = dateformat(post.createdAt, 'fullDate')
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    const bodyLong = post.bodyCopy.childMarkdownRemark.rawMarkdownBody.length > 200
    const heroHeight =
      (post.heroImage.file.details.image.height * windowWidth) / post.heroImage.file.details.image.width
    const bannerHeight =
      (post.bannerImage.file.details.image.height * windowWidth) / post.bannerImage.file.details.image.width

    const keywords = new Array<string>()
    keywords.push(post.mealType)
    if (post.proteinType && post.proteinType.length > 0) {
      post.proteinType.map((pType: ProteinType) => {
        keywords.push(pType.protein)
      })
    }
    post.vegetableType.map((vegetable: string) => {
      keywords.push(vegetable)
    })

    const expirationDateRaw = new Date(post.updatedAt)
    expirationDateRaw.setFullYear(expirationDateRaw.getFullYear())

    const ingredients = post.recipeGroup.map((group: RecipeGroup) => {
      return group.ingredients.map((ingredient: RecipeIngredient) => {
        let ingre1 = ''
        if (ingredient.recipeQuantity && ingredient.recipeQuantity.recipeQuantity)
          [(ingre1 = ingredient.recipeQuantity.recipeQuantity.quantity.childMarkdownRemark.rawMarkdownBody)]
        let ingre2 = ''
        if (
          ingredient.recipeQuantity &&
          ingredient.recipeQuantity.recipeMeasurement &&
          ingredient.recipeQuantity.recipeMeasurement.mesurement
        ) {
          ingre2 = ingredient.recipeQuantity.recipeMeasurement.mesurement.childMarkdownRemark.rawMarkdownBody
        }
        const ingre3 = ingredient.ingredient.ingredient
        let ingre4 = ''
        if (ingredient.prep) {
          ingre4 = ingredient.prep.prep
        }
        return `"${ingre1} ${ingre2} ${ingre3} ${ingre4}"`
      })
    })

    const instructions = post.recipeInstructionGroups.map((group: RecipeInstructionGroup) => {
      return group.instructions.map((instruction: RecipeInstruction) => {
        step++
        return JSON.stringify({
          '@type': 'HowToStep',
          name: `${instruction.instruction.childMarkdownRemark.rawMarkdownBody}`,
          image: `${post.bannerImage.file.url}`,
          text: `${instruction.instruction.childMarkdownRemark.rawMarkdownBody}`,
          url: `https://wwww.knifeandfish.com/recipe/${post.slug}#step${step}`,
        })
      })
    })
    step = 0

    const structuredDataArticle = `{
      "@context": "http://schema.org",
      "@type": "Recipe",
      "name": "${post.title}",
      "image": ["${post.heroImage.file.url}"],
      "author": {
        "@type": "Person",
        "name": "Chris Fisher"
      },
      "datePublished": "${post.createdAt}",
      "description": "${post.bodyCopy.childMarkdownRemark.rawMarkdownBody}",
      "prepTime": "PT20M",
      "cookTime": "PT30M",
      "totalTime": "PT50M",
      "keywords": "${keywords.toString()}",
      "recipeYield": "10",
      "recipeCategory": "${post.mealType}",
      "recipeCuisine": "American",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "270 calories"
      },
      "recipeIngredient": [${ingredients.toString()}],
      "recipeInstructions": [${instructions.toString()}]
    }`

    const recipes = get(this, 'props.data.allContentfulRecipe.edges')
    const recipeFeatures: FeatureContentRowProps = {
      details: {
        title: 'Recipes',
        description: 'Creating a meal, creates conversations and brings people to together. Let us help you.',
        buttonCaption: 'Find Recipes',
        backgroundColor: '#790505',
        slug: '/recipes',
        theme: HeaderTheme.LIGHT,
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
        backgroundColor: '#790505',
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

    return (
      <Layout location={this.props.location}>
        <div className="main-container" style={{ background: '#fff' }}>
          <Helmet>
            {/* The description that appears under the title of your website appears on search engines results */}
            <meta name="description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />

            {/* The thumbnail of your website */}
            <meta name="image" content={post.heroImage.file.url} />
            {/* Opengraph meta tags for Facebook & LinkedIn */}
            <meta property="og:url" content={`https://www.knifeandfish.com/article/${post.slug}`} />
            <meta property="og:type" content="NewsArticle" />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />
            <meta property="og:image" content={post.heroImage.file.url} />
            <meta property="og:article:published_time" content={post.createdAt} />
            <meta property="og:article:modified_time" content={post.updatedAt} />
            <meta property="og:article:expiration_time" content={expirationDateRaw.toISOString()} />
            <meta property="og:article:author" content="Chris Fisher" />
            <meta property="og:article:section" content="Cooking" />
            <meta property="og:article:tag" content={keywords.toString()} />

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

            {/* Structured data */}
            <script type="application/ld+json">{structuredDataArticle}</script>

            {/* The title of your current page */}
            <title>{post.title} | Knife & Fish</title>

            {/* Default language and direction */}
            <style amp-custom>
              {`
                .title {
                  padding: 0 0 0.4em 0;
                  font-size: 3.5em;
                  padding: 0;
                }
                .featured-spacer {
                  padding-left: 5%;
                  padding-top: 0px;
                  width: 90%;
                }
                .group-title {
                  color: #464646;
                  display: inline-block;
                  font-size: 1.15em;
                  font-family: 'Nunito', sans-serif;
                  font-weight: 600;
                  padding-bottom: 10px;
                }

                .tag-styled {
                  color: #464646;
                  display: inline-block;
                  font-size: 0.75em;
                  font-family: 'Nunito', sans-serif;
                  padding-right: 20px;
                  text-transform: uppercase;
                }
                .tag-container {
                  display: inline-block;
                  width: 80%;
                  padding-right: 4%;
                  padding-left: 10%;
                }

                .ingredient {
                  color: #464646;
                  font-size: 1em;
                  font-family: 'Nunito', sans-serif;
                  line-height: 2em;
                  padding-bottom: 1.75em;
                }

                .ingredient-title {
                  color: #464646;
                  font-size: 2.25em;
                  padding-bottom: 50px;
                }

                .ingredient-container {
                  display: inline-block;
                  width: 80%;
                  padding-right: 4%;
                  padding-left: 10%;
                }

                .instruction {
                  color: #464646;
                  font-size: 1em;
                  font-family: 'Nunito', sans-serif;
                  line-height: 2em;
                  padding-bottom: 1.75em;
                  text-align: justify;
                }

                .instruction-container {
                  display: inline-block;
                  width: 80%;
                  padding-left: 10%;
                }

                .instruction-title {
                  color: #464646;
                  font-size: 2.25em;
                  padding-bottom: 50px;
                }

                .main-container {
                  background-color: #fff;
                  position: absolute;
                  top: 6em;
                  width: 100%;       
                }

                .body-copy-two-column {
                  color: #464646;
                  column-count: 1;
                  font-size: 1em;
                  font-family: 'Nunito', sans-serif;
                  line-height: 2em;
                  padding-top: 1.875em;
                  padding-left: 10%;
                  padding-bottom: 1.875em;
                  text-align: justify;
                  width: 80%;
                }

                .body-copy {
                  color: #464646;
                  font-size: 1em;
                  font-family: 'Nunito', sans-serif;
                  line-height: 2em;
                  padding-top: 1.875em;
                  padding-left: 10%;
                  padding-bottom: 1.875em;
                  text-align: justify;
                  width: 80%;
                }

                .create-date {
                  text-align: center;
                  font-family: 'Nunito', sans-serif;
                  font-size: 1em;
                  padding-bottom: 3.125em;
                }
                `}
            </style>

            <html lang="en" amp />
          </Helmet>
          <div>
            <div className="row">
              <div className="col3" />
              <div className="col6">
                <h1 className="section-headline title">{post.title}</h1>
                <div className="create-date">{postCreate}</div>
              </div>
              <div className="col3" />
            </div>
            <amp-img
              class="hidden-sm"
              src={`${post.heroImage.file.url}?fm=webp&q=70&w=${windowWidth}`}
              width={windowWidth}
              height={Math.round((windowWidth * 9) / 16)}
            >
              <noscript>
                <img
                  src={`${post.heroImage.file.url}?fm=webp&q=70&w=${windowWidth}`}
                  width={windowWidth}
                  height={Math.round((windowWidth * 9) / 16)}
                />
              </noscript>
            </amp-img>
            <amp-img
              class="hidden-lg"
              src={`${post.bannerImage.file.url}?fm=webp&q=70&w=${windowWidth}`}
              width={windowWidth}
              height={Math.round((windowWidth * 3) / 2)}
            >
              <noscript>
                <img
                  src={`${post.bannerImage.file.url}?fm=webp&q=70&w=${windowWidth}`}
                  width={windowWidth}
                  height={Math.round((windowWidth * 3) / 2)}
                />
              </noscript>
            </amp-img>
            <div className="row">
              <div className="col2"></div>
              <div className="col8">
                {!bodyLong && (
                  <div
                    className="body-copy"
                    dangerouslySetInnerHTML={{
                      __html: post.bodyCopy.childMarkdownRemark.rawMarkdownBody,
                    }}
                  ></div>
                )}
                {bodyLong && (
                  <div
                    className="body-copy-two-column"
                    dangerouslySetInnerHTML={{
                      __html: post.bodyCopy.childMarkdownRemark.rawMarkdownBody,
                    }}
                  ></div>
                )}
              </div>
              <div className="col2"></div>
              <div className="col2" />
              <div className="col8">
                <div>
                  <div className="ingredient-container">
                    <h2 className="ingredient-title">Ingredients</h2>
                    {post.recipeGroup.map((recipeGroup: RecipeGroup, index: number) => {
                      return (
                        <div style={{ paddingBottom: '30px' }} key={`recipe-group-${index}`}>
                          {recipeGroup.displayName && post.recipeGroup.length > 1 && (
                            <div className="group-title">{recipeGroup.displayName}</div>
                          )}
                          {recipeGroup.ingredients.map((ingredient: RecipeIngredient, index: number) => {
                            return (
                              <div className="ingredient" key={`ingredient-${index}`}>
                                {ingredient.recipeQuantity && ingredient.recipeQuantity.recipeQuantity && (
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        ingredient.recipeQuantity.recipeQuantity.quantity.childMarkdownRemark
                                          .rawMarkdownBody,
                                    }}
                                  ></span>
                                )}{' '}
                                {ingredient.recipeQuantity &&
                                  ingredient.recipeQuantity.recipeMeasurement &&
                                  ingredient.recipeQuantity.recipeMeasurement.mesurement && (
                                    <span>
                                      {ingredient.recipeQuantity &&
                                        ingredient.recipeQuantity.recipeMeasurement.mesurement.childMarkdownRemark
                                          .rawMarkdownBody}
                                    </span>
                                  )}{' '}
                                {ingredient.ingredient.ingredient}
                                {ingredient.prep && <span>, {ingredient.prep.prep}</span>}
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                  <div className="instruction-container">
                    <h2 className="instruction-title">Instructions</h2>
                    {post.recipeInstructionGroups.map((instructionGroup: RecipeInstructionGroup, index: number) => {
                      return (
                        <div style={{ paddingBottom: '30px' }} key={`instruction-group-${index}`}>
                          {instructionGroup.displayName && post.recipeInstructionGroups.length > 1 && (
                            <div className="group-title">{instructionGroup.displayName}</div>
                          )}
                          {instructionGroup.instructions.map((instruction: RecipeInstruction, index: number) => {
                            step++
                            return (
                              <div
                                className="instruction"
                                id={`Step${step}`}
                                key={`instruction-${index}`}
                                dangerouslySetInnerHTML={{
                                  __html: instruction.instruction.childMarkdownRemark.rawMarkdownBody,
                                }}
                              ></div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                  <div className="tag-container col12">
                    <h3>Tags</h3>
                    <p className="tag-styled">{post.mealType}</p>
                    {/* {post.proteinType &&
                      post.proteinType.length > 0 &&
                      post.proteinType.map((proteinType: ProteinType, parentIndex: number) => {
                        return <TagStyled key={`tag=${parentIndex}`}>{proteinType.protein}</TagStyled>
                      })}
                    {post.vegetableType.map((vegetable: string, index: number) => {
                      return <TagStyled key={`tag-${index}`}>{vegetable}</TagStyled>
                    })} */}
                  </div>
                </div>
                <div className="featured-spacer">
                  <FeaturedContentRow {...articleFeatures} />
                  <FeaturedContentRow {...recipeFeatures} />
                </div>
                <div className="featured-spacer">
                  <GeneralContentRow />
                </div>

                <Footer {...{ theme: HeaderTheme.DARK }} />
              </div>

              <div className="col2" />
            </div>

            <div className="row">
              <div className="col12"></div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RecipeAMPTemplate

export const pageQuery = graphql`
  query RecipeAMPBySlug($slug: String) {
    contentfulRecipe(slug: { eq: $slug }) {
      bodyCopy {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
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
      mealType
      proteinType {
        protein
      }
      slug
      title
      vegetableType
      recipeGroup {
        recipeGroupName
        ingredients {
          prep {
            prep
          }
          ingredient {
            ingredient
          }
          recipeQuantity {
            recipeQuantity {
              quantity {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
            recipeMeasurement {
              mesurement {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        }
        displayName
      }
      recipeInstructionGroups {
        recipeGroupName
        instructions {
          instruction {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
        displayName
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
