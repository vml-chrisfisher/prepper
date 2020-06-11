import styled from '@emotion/styled'
import dateformat from 'dateformat'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
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
} from '../template-interfaces/recipe'

class RecipeTemplate extends React.Component<RecipeProps> {
  render() {
    const recipeFeatures: FeatureContentRowProps = {
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
    `

    const CreateDate = styled.div`
      text-align: center;
      font-family: 'Nunito', sans-serif;
      font-size: 1em;
      padding-bottom: 3.125em;
    `

    const BodyCopy = styled.div`
      column-count: 2;
      column-gap: 40px;
      color: #464646;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      line-height: 2em;
      padding-top: 1.875em;
      padding-bottom: 1.875em;
      text-align: justify;
    `

    const MainContainer = styled.div`
      background-color: #fff;
      position: absolute;
      top: 15.625em;
      width: 100%;
    `

    const InstructionTitle = styled.h2`
      color: #464646;
      font-size: 2.25em;
      padding-bottom: 50px;
    `

    const InstructionContainer = styled.div`
      display: inline-block;
      width: 66%;
    `

    const Instruction = styled.div`
      color: #464646;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      line-height: 2em;
      padding-bottom: 1.75em;
      text-align: justify;
    `

    const IngredientContainer = styled.div`
      display: inline-block;
      width: 30%;
      padding-right: 4%;
    `

    const IngredientTitle = styled.h2`
      color: #464646;
      font-size: 2.25em;
      padding-bottom: 50px;
    `

    const Ingredient = styled.div`
      color: #464646;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      line-height: 2em;
      padding-bottom: 1.75em;
    `

    const TagStyled = styled.p`
      color: #464646;
      display: inline-block;
      font-size: 0.75em;
      font-family: 'Nunito', sans-serif;
      padding-right: 20px;
      text-transform: uppercase;
    `

    const GroupTitle = styled.div`
      color: #464646;
      display: inline-block;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
      padding-bottom: 10px;
    `

    const FeaturedSpacer = styled.div`
      padding-top: 50px;
    `

    const post: AllContentfulRecipe = get(this.props, 'data.contentfulRecipe')
    const siteTitle: string = get(this.props, 'data.site.siteMetadata.title')
    const postCreate = dateformat(post.createdAt, 'fullDate')
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200

    const structuredIngredients = []

    post.recipeGroup.map(recipeGroup => {
      recipeGroup.ingredients.map(ingredient => {
        let ingred = ''
        if (
          ingredient.recipeQuantity &&
          ingredient.recipeQuantity.recipeQuantity &&
          ingredient.recipeQuantity.recipeMeasurement
        ) {
          ingred = `${ingredient.recipeQuantity.recipeQuantity} ${ingredient.recipeQuantity.recipeMeasurement}`
        }
        if (ingredient.ingredient && ingredient.ingredient.ingredient) {
          ingred += ingredient.ingredient.ingredient
        }
        if (ingredient.prep && ingredient.prep.prep) {
          ingred += ingredient.prep.prep
        }

        structuredIngredients.push(ingred)
      })
    })

    const structuredInstructions = []

    post.recipeInstructionGroups.map(instructionGroup => {
      instructionGroup.instructions.map((instruction, index) => {
        const instr = {
          '@type': 'HowToStep',
          name: `${instructionGroup.displayName} - Step${index}`,
          text: instruction.instruction.childMarkdownRemark.rawMarkdownBody,
          url: `https://knifeandfish.com/recipe/${post.slug}`,
          image: post.heroImage.file.url,
        }
        structuredInstructions.push(instr)
      })
    })

    const structuredRecipeData = `
    {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": "${post.title}",
      "image": "${post.heroImage.file.url}",
      "author": {
        "@type": "Organization",
        "name": "Knife and Fish"
      },
      "datePublished": "${post.createdAt}",
      "description": "${post.bodyCopy.childMarkdownRemark.rawMarkdownBody}",
      "recipeCategory": "${post.mealType}",
      "recipeIngredient": ${structuredIngredients},
      "recipeInstructions": ${structuredInstructions}
    }
    `

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
            <script type="application/ld+json">{structuredRecipeData}</script>

            {/* The title of your current page */}
            <title>{post.title}</title>

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
            <picture lazyload>
              <source srcSet={`${post.heroImage.file.url}?fm=webp&q=80&w=${windowWidth}`} />
              <source srcSet={`${post.heroImage.file.url}?fm=jpg&q=90&w=${windowWidth}`} />
              <img src={`${post.heroImage.file.url}?fm=webp&q=80&w=${windowWidth}`} alt={post.heroImage.description} />
            </picture>
            <div className="row">
              <div className="col2"></div>
              <div className="col8">
                <BodyCopy
                  dangerouslySetInnerHTML={{
                    __html: post.bodyCopy.childMarkdownRemark.rawMarkdownBody,
                  }}
                ></BodyCopy>
              </div>
              <div className="col2"></div>
              <div className="col2" />
              <div className="col8">
                <div>
                  <IngredientContainer>
                    <IngredientTitle>Ingredients</IngredientTitle>
                    {post.recipeGroup.map((recipeGroup: RecipeGroup, index: number) => {
                      return (
                        <div key={`recipe-group-${index}`}>
                          {recipeGroup.displayName && <GroupTitle>{recipeGroup.displayName}</GroupTitle>}
                          {recipeGroup.ingredients.map((ingredient: RecipeIngredient, index: number) => {
                            return (
                              <Ingredient key={`ingredient-${index}`}>
                                {ingredient.recipeQuantity && (
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
                              </Ingredient>
                            )
                          })}
                        </div>
                      )
                    })}
                  </IngredientContainer>
                  <InstructionContainer>
                    <InstructionTitle>Instructions</InstructionTitle>
                    {post.recipeInstructionGroups.map((instructionGroup: RecipeInstructionGroup, index: number) => {
                      return (
                        <div key={`instruction-group-${index}`}>
                          {instructionGroup.displayName && <GroupTitle>{instructionGroup.displayName}</GroupTitle>}
                          {instructionGroup.instructions.map((instruction: RecipeInstruction, index: number) => {
                            return (
                              <Instruction
                                key={`instruction-${index}`}
                                dangerouslySetInnerHTML={{
                                  __html: instruction.instruction.childMarkdownRemark.rawMarkdownBody,
                                }}
                              ></Instruction>
                            )
                          })}
                        </div>
                      )
                    })}
                  </InstructionContainer>
                  <div className="col12">
                    <h3>Tags</h3>
                    <TagStyled>{post.mealType}</TagStyled>
                    <TagStyled>{post.proteinType}</TagStyled>
                    {post.vegetableType.map((vegetable: string, index: number) => {
                      return <TagStyled key={`tag-${index}`}>{vegetable}</TagStyled>
                    })}
                  </div>
                </div>
                <FeaturedSpacer>
                  <FeaturedContentRow {...recipeFeatures} />
                </FeaturedSpacer>

                <GeneralContentRow />
                <Footer {...{ theme: HeaderTheme.DARK }} />
              </div>

              <div className="col2" />
            </div>

            <div className="row">
              <div className="col12"></div>
            </div>
          </div>
        </MainContainer>
      </Layout>
    )
  }
}

export default RecipeTemplate

export const pageQuery = graphql`
  query RecipeBySlug($slug: String) {
    contentfulRecipe(slug: { eq: $slug }) {
      bodyCopy {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      createdAt
      heroImage {
        description
        file {
          url
        }
      }
      mealType
      proteinType
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
  }
`
