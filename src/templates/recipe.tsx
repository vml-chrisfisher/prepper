import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import styled from '@emotion/styled'
import GeneralContentRow from '../components/generalContentRow'
import FeatureContentRowProps from '../components/featuredContentRow/interface'
import FeaturedContentRow from '../components/featuredContentRow'
import Footer from '../components/footer'
import { HeaderTheme } from '../components/header/interface'


class RecipeTemplate extends React.Component<any> {
  render() {

    const recipeFeatures: FeatureContentRowProps = {
      details: {
        title: 'Recipes',
        description: "I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage",
        buttonCaption: 'Find Recipes',
        slug: '/recipes'
      },
      features: [
        {
          title: 'Cornmeal Fried Okra',
          slug: 'Okra',
          imagePath: '/fried-okra-rectangle.jpg',
          description: 'The finished stew should be decidedly sour, tamarind’s calling card, but you’re in control of how ­puckery things get.'
        },
        {
          title: 'Sausage, Shrimp and Okra Gumbo',
          slug: 'Okra',
          imagePath: '/Gumbo-11.jpg',
          description: 'For authentic gumbo, add filé, a Creole herb found in better markets.'
        },
        {
          title: 'Stir Fried Okra',
          slug: 'Okra',
          imagePath: '/stir-fried-okra.jpg',
          description: 'Working in batches ensures golden and tender okra, not soft and slimy.'
        }
      ]
    }
    
    const SubTitle = styled.h2`
      font-size: 1.5em;
      padding-bottom: 30px;
      text-align: center;
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
      background-color: #FFF;
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
      width: 66%
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
      font-size: .75em;
      font-family: 'Nunito', sans-serif;
      padding-right: 20px;
      text-transform: uppercase;
    `

    const post = get(this.props, 'data.contentfulRecipe')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <MainContainer style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div>
            <div className="row">
              <div className="col3" />
              <div className="col6">
                <h1 className="section-headline">{post.title}</h1>
                <SubTitle>{post.subtitle}</SubTitle>
              </div>
              <div className="col3" />
            </div>

            <img src={post.heroImage.file.url} />
            <div className="row">
              <div className="col4"></div>
              <div className="col4">
                <BodyCopy dangerouslySetInnerHTML={
                  { __html: post.bodyCopy.childMarkdownRemark.rawMarkdownBody }
                }></BodyCopy>
              </div>
              <div className="col4"></div>
              <div className="col2" />
              <div className="col8">
              <div>
                  <IngredientContainer>
                    <IngredientTitle>Ingredients</IngredientTitle>
                  {
                    post.ingredients.map((ingredient: any) => {
                      return(
                        <Ingredient>
                          {ingredient.quantity && <span>{ingredient.quantity} {ingredient.ingredients} {ingredient.prep && <span>, {ingredient.prep}</span>}</span>}
                        </Ingredient>
                      )
                    })
                  }
                  </IngredientContainer>
                  <InstructionContainer>
                    <InstructionTitle>Instructions</InstructionTitle>
                  {
                    post.instructions.map((instruction: any, index: number) => {
                      return(<Instruction dangerouslySetInnerHTML={
                        { __html: instruction.instruction.childMarkdownRemark.rawMarkdownBody }
                      }></Instruction>)
                    })
                  }
                  </InstructionContainer>
                  <div className="col12">
                    <h3>Tags</h3>
                    <TagStyled>{post.mealType}</TagStyled>
                    <TagStyled>{post.proteinType}</TagStyled>
                    {
                      post.vegetableType.map((vegetable: any) => {
                        return <TagStyled>{vegetable}</TagStyled>
                      })
                    }
                  </div>
                </div>
                <FeaturedContentRow {...recipeFeatures} />
                <GeneralContentRow />
                <Footer {...{theme: HeaderTheme.DARK }} />
              </div>
              
              <div className="col2" />
            </div>


            <div className="row">
              <div className="col12">
              </div>

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
    contentfulRecipe(slug: {eq: $slug}) {
      bodyCopy {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
    heroImage {
      file {
        url
      }
    }
    ingredients {
      quantity
      prep
      ingredients
    }
    instructions {
      instruction {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
    mealType
    proteinType
    slug
    title
    vegetableType
    }
  }
`