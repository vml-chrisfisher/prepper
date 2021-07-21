import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'
import * as Scroll from 'react-scroll'
import { ArticleSummaryInterface, ArticleSummaryNode } from '../components/articleSummary/interface'
import FeaturedContentRow from '../components/featuredContentRow'
import FeatureContentRowDetailProps from '../components/featuredContentRow/featuredContentRowDetail/interface'
import FeatureContentRowProps from '../components/featuredContentRow/interface'
import Footer from '../components/footer'
import HeaderContainer from '../components/header/container'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import RandomFourSummary from '../components/randomFourSummary'
import SectionHeader from '../components/sectionHeader'
import { ArticlesEdge, ArticlesProps } from '../page-interfaces/articles'
import { RecipeBoxArticle, RecipeBoxRecipe } from '../store/ducks/recipesBox/interfaces'
import { getRecipesBoxRecipesRecentlyViewed } from '../store/ducks/recipesBox/selectors'
import { useAppSelector } from '../store/hooks'
import { AppState } from '../store/rootReducer'

const RecipeBoxIndex = (props: ArticlesProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  })

  const [secondarySelectedMenu, setSecondarySelectedMenu] = useState('')
  const Element = Scroll.Element
  const scroller = Scroll.scroller

  interface SecondayProps {
    isSelected: boolean
  }
  const MainContainer = styled.div`
    background-color: #fff;
    position: absolute;
    top: 73px;
    width: 100%;

    @media (max-width: 767px) {
      top: 6em;
    }
  `

  const PageH1 = styled.h1`
    padding-bottom: 60px;
  `

  const SubHeader = styled.h2`
    font-size: 1.5em;
    letter-spacing: -0.5px;
    padding-bottom: 50px;
  `

  const CategorySubHeader = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 100;
    letter-spacing: -0.5px;
    padding-bottom: 10px;
    padding-top: 30px;
  `

  const ColumnContainer1 = styled.div`
    width: calc(50% - 40px);
    padding: 20px;
    background-color: #e2d9c2;
  `

  const ColumnContainer2 = styled.div`
    padding: 20px;
    background-color: #999999;
    width: calc(50% - 40px);
  `

  const Sidebar = styled.div`
    position: fixed;
  `

  const SidebarList = styled.ul`
    margin: 0;
    padding: 0;
    padding-inline-start: 0;
  `

  const SeconddaryList = styled.ul`
    padding-left: 10px;
  `

  const TopLevel = styled.li`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 100;
    list-style: none;
    letter-spacing: -0.5px;
    padding-bottom: 5px;
    padding-top: 5px;
  `

  const SecondLevel = styled.li<SecondayProps>`
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 100;
    list-style: none;
    font-weight: ${props => {
      return props.isSelected ? '500' : '100'
    }};
    color: ${props => {
      return props.isSelected ? '#f24e11' : '#333333'
    }};
    letter-spacing: -0.5px;
    padding-bottom: 5px;
    padding-top: 5px;
    transition: all 500ms ease;
    &:hover {
      color: #f24e11;
      transition: all 500ms ease;
    }
  `

  const FilterBy = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
    list-style: none;
    letter-spacing: -0.5px;
    padding-bottom: 5px;
    padding-top: 40px;
  `

  const Filter = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 100;
    letter-spacing: -0.5px;
    padding-bottom: 10px;
    padding-top: 30px;
    text-transform: uppercase;
  `

  const createPostsCopy = (posts: ArticlesEdge[]) => {
    return posts?.map((post: ArticleSummaryNode) => {
      return {
        description: post.node.bodyCopy.childMarkdownRemark.rawMarkdownBody,
        title: post.node.title,
        slug: post.node.slug,
        imagePath: post.node.bannerImage.file.url,
        imageDescription: post.node.bannerImage.title,
        basePath: 'article',
      }
    })
  }

  const createRecipesCopy = (posts: ArticlesEdge[]) => {
    return posts?.map((post: ArticleSummaryNode) => {
      return {
        description: post.node.bodyCopy.childMarkdownRemark.rawMarkdownBody,
        title: post.node.title,
        slug: post.node.slug,
        imagePath: post.node.bannerImage.file.url,
        imageDescription: post.node.bannerImage.title,
        basePath: 'recipe',
      }
    })
  }

  const posts = get(props, 'data.allContentfulArticle.edges')
  const recipes = get(props, 'data.allContentfulRecipe.edges')
  const chunkSize = 3
  const chunked: ArticleSummaryInterface[][] = []
  const recipesChunked: ArticleSummaryInterface[][] = []
  const postsCopy: ArticleSummaryInterface[] = createPostsCopy(posts)
  const recipesPostsCopy: ArticleSummaryInterface[] = createRecipesCopy(recipes)

  const onSectionFilterClick = (section: string) => {
    setSecondarySelectedMenu(section)
    const element = document.getElementById(section)
    if (element) {
      const headerOffset = 75
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (postsCopy) {
    while (postsCopy.length > 0) {
      chunked.push(postsCopy.splice(0, chunkSize))
    }
  }

  if (recipesPostsCopy) {
    while (recipesPostsCopy.length > 0) {
      recipesChunked.push(recipesPostsCopy.splice(0, chunkSize))
    }
  }

  const createRecipeChunks = (posts: RecipeBoxRecipe[]) => {
    const chunk = 4
    const chunked: ArticleSummaryInterface[][] = []
    const copy = posts.map((recipe: RecipeBoxRecipe) => {
      const copyLength = recipe.recipeDescription.length < 250 ? recipe.recipeDescription.length : 250
      const copyRaw = recipe.recipeDescription.substr(0, copyLength)
      const lastPeriod = copyRaw.lastIndexOf('.')
      const copy = lastPeriod ? copyRaw.substr(0, lastPeriod + 1) : copyRaw
      return {
        basePath: 'recipe',
        description: copy,
        imagePath: recipe.recipeImagePath,
        imageDescription: recipe.recipeImageMeta,
        slug: recipe.recipeSlug,
        title: recipe.recipeName,
      }
    })

    while (copy.length > 0) {
      chunked.push(copy.splice(0, chunk))
    }
    return chunked
  }

  const createArticleChunks = (posts: RecipeBoxArticle[]) => {
    const chunk = 4
    const chunked: ArticleSummaryInterface[][] = []
    const copy = posts.map((article: RecipeBoxArticle) => {
      const copyLength = article.articleDescription.length < 250 ? article.articleDescription.length : 250
      const copyRaw = article.articleDescription.substr(0, copyLength)
      const lastPeriod = copyRaw.lastIndexOf('.')
      const copy = lastPeriod ? copyRaw.substr(0, lastPeriod + 1) : copyRaw
      return {
        basePath: 'recipe',
        description: copy,
        imagePath: article.articleImagePath,
        imageDescription: article.articleImageMeta,
        slug: article.articleSlug,
        title: article.articleName,
      }
    })

    while (copy.length > 0) {
      chunked.push(copy.splice(0, chunk))
    }
    return chunked
  }

  const allChunkSize1 = 4
  const recipesRecentlyViewed = useAppSelector(state => state.recipesBox.Recipes.RecentlyViewed)
  let recipesRecentlyViewedChunked: ArticleSummaryInterface[][]
  if (recipesRecentlyViewed) {
    if (recipesRecentlyViewed.length > 4) {
      recipesRecentlyViewedChunked = createRecipeChunks(recipesRecentlyViewed.splice(0, 4))
    } else {
      recipesRecentlyViewedChunked = createRecipeChunks(recipesRecentlyViewed)
    }
  }

  const recipesRecentlyAdded = useAppSelector(state => state.recipesBox.Recipes.RecentlyAdded)
  let recipeRecentlyAddedChunked: ArticleSummaryInterface[][]
  if (recipesRecentlyAdded) {
    if (recipesRecentlyAdded.length > 4) {
      recipeRecentlyAddedChunked = createRecipeChunks(recipesRecentlyAdded.splice(0, 4))
    } else {
      recipeRecentlyAddedChunked = createRecipeChunks(recipesRecentlyAdded)
    }
  }

  const recipesMostCooked = useAppSelector(state => state.recipesBox.Recipes.MostCooked)
  let recipesMostCookedChunked: ArticleSummaryInterface[][]
  if (recipesMostCooked) {
    if (recipesMostCooked.length > 4) {
      recipesMostCookedChunked = createRecipeChunks(recipesMostCooked.splice(0, 4))
    } else {
      recipesMostCookedChunked = createRecipeChunks(recipesMostCooked)
    }
  }

  const recipesAll = useAppSelector(state => state.recipesBox.Recipes.All)
  let allRecipeChunked: ArticleSummaryInterface[][]
  if (recipesAll) {
    allRecipeChunked = createRecipeChunks(recipesAll)
  }
  const allChunkSize = 4

  const articledRecentlyViewed = useAppSelector(state => state.recipesBox.Articles.RecentlyViewed)
  let articlesRecentlyViewChunked: ArticleSummaryInterface[][]
  if (articledRecentlyViewed) {
    if (articledRecentlyViewed.length > 4) {
      articlesRecentlyViewChunked = createArticleChunks(articledRecentlyViewed.splice(0, 4))
    } else {
      articlesRecentlyViewChunked = createArticleChunks(articledRecentlyViewed)
    }
  }

  const articlesRecentlyAdded = useAppSelector(state => state.recipesBox.Articles.RecentlyAdded)
  let articlesRecentlyAddedChunked: ArticleSummaryInterface[][]
  if (articlesRecentlyAdded) {
    if (articlesRecentlyAdded.length > 4) {
      articlesRecentlyAddedChunked = createArticleChunks(articlesRecentlyAdded.splice(0, 4))
    } else {
      articlesRecentlyAddedChunked = createArticleChunks(articlesRecentlyAdded)
    }
  }

  const articlesAll = useAppSelector(state => state.recipesBox.Articles.All)
  let allArticleChunked: ArticleSummaryInterface[][]
  if (articlesAll) {
    allArticleChunked = createArticleChunks(articlesAll)
  }

  const featureRowRecentlyAdded = (chunks: any, basePath: string, details: FeatureContentRowDetailProps) => {
    const props: FeatureContentRowProps = {
      features: chunks,
      details: details,
      basePath: basePath,
    }
    return <FeaturedContentRow {...props}></FeaturedContentRow>
  }

  return (
    <Layout>
      <HeaderContainer {...{ theme: HeaderTheme.LIGHT }} />
      <MainContainer>
        <Helmet title="Articles | Knife & Fish">
          <link rel="canonical" href="https://www.knifeandfish.com/articles"></link>
        </Helmet>

        <div className="wrapper">
          <div className="row">
            <div className="col3">
              <Sidebar>
                <SidebarList>
                  <TopLevel>Recipes</TopLevel>
                  <SeconddaryList>
                    <SecondLevel
                      isSelected={secondarySelectedMenu === 'RecipesRecentlyViewed'}
                      onClick={() => onSectionFilterClick('RecipesRecentlyViewed')}
                    >
                      Recently Viewed
                    </SecondLevel>
                    <SecondLevel
                      isSelected={secondarySelectedMenu === 'RecipesRecentlyAdded'}
                      onClick={() => onSectionFilterClick('RecipesRecentlyAdded')}
                    >
                      Recently Added
                    </SecondLevel>
                    <SecondLevel
                      isSelected={secondarySelectedMenu === 'RecipesMostCooked'}
                      onClick={() => onSectionFilterClick('RecipesMostCooked')}
                    >
                      Most Cooked
                    </SecondLevel>
                    <SecondLevel
                      isSelected={secondarySelectedMenu === 'RecipesAll'}
                      onClick={() => onSectionFilterClick('RecipesAll')}
                    >
                      All
                    </SecondLevel>
                  </SeconddaryList>
                  <TopLevel>Articles</TopLevel>
                  <SeconddaryList>
                    <SecondLevel
                      isSelected={secondarySelectedMenu === 'ArticlesRecentlyViewed'}
                      onClick={() => onSectionFilterClick('ArticlesRecentlyViewed')}
                    >
                      Recently Viewed
                    </SecondLevel>
                    <SecondLevel
                      isSelected={secondarySelectedMenu === 'ArticlesRecentlyAdded'}
                      onClick={() => onSectionFilterClick('ArticlesRecentlyAdded')}
                    >
                      Recently Added
                    </SecondLevel>
                    <SecondLevel
                      isSelected={secondarySelectedMenu === 'ArticlesAll'}
                      onClick={() => onSectionFilterClick('ArticlesAll')}
                    >
                      All
                    </SecondLevel>
                  </SeconddaryList>
                  <FilterBy>Filter By</FilterBy>
                  <SeconddaryList>
                    <SecondLevel isSelected={secondarySelectedMenu === 'Breakfast'}>Breakfast</SecondLevel>
                    <SecondLevel isSelected={secondarySelectedMenu === 'Brunch'}>Brunch</SecondLevel>
                    <SecondLevel isSelected={secondarySelectedMenu === 'Lunch'}>Lunch</SecondLevel>
                    <SecondLevel isSelected={secondarySelectedMenu === 'Dinner'}>Dinner</SecondLevel>
                  </SeconddaryList>
                </SidebarList>
              </Sidebar>
            </div>
            <div className="col9">
              <PageH1>Fisher&apos;s Recipe Box</PageH1>
              <SubHeader>Recipes</SubHeader>

              <section id="RecipesRecentlyViewed">
                <SectionHeader
                  title="Recently Viewed"
                  description="It is easy to go down the rabbit hole of searching for recipes.  All of those tasty recipes that you added to your Recipe Box and keep looking at are all right here."
                ></SectionHeader>
                {recipesRecentlyViewedChunked?.length > 0 &&
                  recipesRecentlyViewedChunked.map((chunk: ArticleSummaryInterface[], index: number) => {
                    return (
                      <RandomFourSummary
                        key={`recipes-chunk-${index}`}
                        {...{ chunk, straight: true }}
                      ></RandomFourSummary>
                    )
                  })}
                {!(recipesRecentlyViewedChunked?.length > 0) &&
                  featureRowRecentlyAdded(recipesChunked[0], 'recipes', {
                    title: 'Recipes to Explore',
                    description: 'Lets get your Recipe Box going.  Explore our recipes and add your favorites.',
                    buttonCaption: 'All Recipes',
                    backgroundColor: 'transparent',
                    slug: 'dfds',
                    theme: HeaderTheme.DARK,
                  })}
              </section>
              <section id="RecipesRecentlyAdded">
                <SectionHeader
                  title="Recently Added"
                  description="Keep on tagging those recipes on your Sunday morning.  We will keep them all here, all a swipe away."
                ></SectionHeader>
                {recipeRecentlyAddedChunked?.length > 0 &&
                  recipeRecentlyAddedChunked?.map((chunk: ArticleSummaryInterface[], index: number) => {
                    return (
                      <RandomFourSummary
                        key={`recipes-chunk-${index}`}
                        {...{ chunk, straight: true }}
                      ></RandomFourSummary>
                    )
                  })}
                {!(recipeRecentlyAddedChunked?.length > 0) &&
                  featureRowRecentlyAdded(recipesChunked[1], 'recipe', {
                    title: 'Add Some of These',
                    description: 'All of those great recipes that keep making your taste buds ',
                    buttonCaption: 'Search Recipes',
                    backgroundColor: 'transparent',
                    slug: 'dfds',
                    theme: HeaderTheme.DARK,
                  })}
              </section>
              <section id="RecipesMostCooked">
                <SectionHeader
                  title="Most Cooked"
                  description="Remember all of those delicious recipes that you can&amp;t remember a year later.  We keep track of them right here."
                ></SectionHeader>
                {recipesMostCookedChunked?.length > 0 &&
                  recipesMostCookedChunked?.map((chunk: ArticleSummaryInterface[], index: number) => {
                    return (
                      <RandomFourSummary
                        key={`recipes-chunk-${index}`}
                        {...{ chunk, straight: true }}
                      ></RandomFourSummary>
                    )
                  })}
                {!(recipesMostCookedChunked?.length > 0) &&
                  featureRowRecentlyAdded(recipesChunked[2], 'recipe', {
                    title: 'Your Greatest Hits',
                    description: 'No better place to keep track of all of the great recipes you have cooked than here.',
                    buttonCaption: 'sdfds',
                    backgroundColor: 'transparent',
                    slug: 'dfds',
                    theme: HeaderTheme.DARK,
                  })}
              </section>
              {allRecipeChunked && allRecipeChunked.length > 0 && (
                <section id="RecipesAll">
                  <SectionHeader
                    title="All"
                    description="Remember all of those delicious recipes that you can&amp;t remember a year later.  We keep track of them right here."
                  ></SectionHeader>
                  <div>
                    {allRecipeChunked.map((chunk: ArticleSummaryInterface[], index: number) => {
                      return (
                        <RandomFourSummary
                          key={`recipes-chunk-${index}`}
                          {...{ chunk, straight: true }}
                        ></RandomFourSummary>
                      )
                    })}
                  </div>
                </section>
              )}
              <div></div>
              <SubHeader>Articles</SubHeader>
              <section id="ArticlesRecentlyViewed">
                <SectionHeader
                  title="Recently View"
                  description="We love learning about all things food.  Gardening, knife skills or the sciene of a pan sauce.  We love it all and here all them that you have looked at."
                ></SectionHeader>
                {articlesRecentlyViewChunked?.length > 0 &&
                  articlesRecentlyViewChunked?.map((chunk: ArticleSummaryInterface[], index: number) => {
                    return (
                      <RandomFourSummary
                        key={`recipes-chunk-${index}`}
                        {...{ chunk, straight: true }}
                      ></RandomFourSummary>
                    )
                  })}
                {!(articlesRecentlyViewChunked?.length > 0) &&
                  featureRowRecentlyAdded(chunked[0], 'article', {
                    title: 'Lets learn somethings together.',
                    description: 'sdfdsf',
                    buttonCaption: 'sdfds',
                    backgroundColor: 'transparent',
                    slug: 'dfds',
                    theme: HeaderTheme.DARK,
                  })}
              </section>
              <section id="ArticlesRecentlyAdded">
                <SectionHeader
                  title="Recently Added"
                  description="Remember that article about tomatoes you saved the other day.  We kept it and you can always pull it up right back here."
                ></SectionHeader>
                {articlesRecentlyAddedChunked?.length > 0 &&
                  articlesRecentlyAddedChunked?.map((chunk: ArticleSummaryInterface[], index: number) => {
                    return (
                      <RandomFourSummary
                        key={`recipes-chunk-${index}`}
                        {...{ chunk, straight: true }}
                      ></RandomFourSummary>
                    )
                  })}
                {!(articlesRecentlyAddedChunked?.length > 0) &&
                  featureRowRecentlyAdded(chunked[1], 'article', {
                    title: 'Magazine dog ears in one place',
                    description: 'sdfdsf',
                    buttonCaption: 'sdfds',
                    backgroundColor: 'transparent',
                    slug: 'dfds',
                    theme: HeaderTheme.DARK,
                  })}
              </section>
              {allArticleChunked && allArticleChunked.length > 0 && (
                <section id="ArticlesAll">
                  <SectionHeader
                    title="All"
                    description="Remember all of those delicious recipes that you can&amp;t remember a year later.  We keep track of them right here."
                  ></SectionHeader>
                  <div>
                    {allArticleChunked.map((chunk: ArticleSummaryInterface[], index: number) => {
                      return (
                        <RandomFourSummary
                          key={`articles-chunk-${index}`}
                          {...{ chunk, straight: true }}
                        ></RandomFourSummary>
                      )
                    })}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
        <Footer {...{ theme: HeaderTheme.DARK }} />
      </MainContainer>
    </Layout>
  )
}

export default RecipeBoxIndex

export const pageQuery = graphql`
  query RecipeBoxQuery {
    allContentfulArticle(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          bannerImage {
            file {
              url
            }
            title
          }
          title
          slug
          bodyCopy {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
    allContentfulRecipe(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          bannerImage {
            file {
              url
            }
            title
          }
          title
          slug
          bodyCopy {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`
