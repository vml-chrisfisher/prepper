import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { ArticleSummaryInterface, ArticleSummaryNode } from '../components/articleSummary/interface'
import Footer from '../components/footer'
import HeaderContainer from '../components/header/container'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import RandomFourSummary from '../components/randomFourSummary'
import SectionHeader from '../components/sectionHeader'
import { ArticlesEdge, ArticlesProps } from '../page-interfaces/articles'

class RecipeBoxIndex extends React.Component<ArticlesProps> {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }

  render() {
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

    const SecondLevel = styled.li`
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      font-weight: 100;
      list-style: none;
      letter-spacing: -0.5px;
      padding-bottom: 5px;
      padding-top: 5px;
      &:hover {
        color: #f24e11;
        transition: color 1s ease;
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

    const posts: ArticlesEdge[] = get(this, 'props.data.allContentfulArticle.edges')
    const chunkSize = 3
    const chunked: ArticleSummaryInterface[][] = []
    const postsCopy: ArticleSummaryInterface[] = posts.map((post: ArticleSummaryNode) => {
      return {
        description: '',
        title: post.node.title,
        slug: post.node.slug,
        imagePath: post.node.bannerImage.file.url,
        imageDescription: post.node.bannerImage.title,
        basePath: 'article',
      }
    })

    while (postsCopy.length > 0) {
      chunked.push(postsCopy.splice(0, chunkSize))
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
                      <SecondLevel>Recently Viewed</SecondLevel>
                      <SecondLevel>Recently Added</SecondLevel>
                      <SecondLevel>Most Cooked</SecondLevel>
                    </SeconddaryList>
                    <TopLevel>Articles</TopLevel>
                    <SeconddaryList>
                      <SecondLevel>Recently Viewed</SecondLevel>
                      <SecondLevel>Recently Added</SecondLevel>
                      <SecondLevel>Most Cooked</SecondLevel>
                    </SeconddaryList>
                    <FilterBy>Filter By</FilterBy>
                    <SeconddaryList>
                      <SecondLevel>Breakfast</SecondLevel>
                      <SecondLevel>Brunch</SecondLevel>
                      <SecondLevel>Lunch</SecondLevel>
                      <SecondLevel>Dinner</SecondLevel>
                    </SeconddaryList>
                  </SidebarList>
                </Sidebar>
              </div>
              <div className="col9">
                <PageH1>Fisher&apos;s Recipe Box</PageH1>
                <SubHeader>Recipes</SubHeader>

                <section id="recipes-recently-viewed">
                  <SectionHeader
                    title="Recently View"
                    description="A description about recently view recipes. This will be a great paragraph about your recently view recipes.  We make this a glorious paragraph. It will be amazing."
                  ></SectionHeader>
                  <RandomFourSummary key={`articles-chuck-0`} chunk={chunked[0]}></RandomFourSummary>
                </section>
                <section id="recipes-recently-added">
                  <SectionHeader
                    title="Recently Added"
                    description="A description about recently view recipes. This will be a great paragraph about your recently view recipes.  We make this a glorious paragraph. It will be amazing."
                  ></SectionHeader>
                  <RandomFourSummary key={`articles-chuck-0`} chunk={chunked[1]}></RandomFourSummary>
                </section>
                <section id="recipes-mostly-cooked">
                  <SectionHeader
                    title="Most Cooked"
                    description="A description about recently view recipes. This will be a great paragraph about your recently view recipes.  We make this a glorious paragraph. It will be amazing."
                  ></SectionHeader>
                  <RandomFourSummary key={`articles-chuck-0`} chunk={chunked[2]}></RandomFourSummary>
                </section>
                <div></div>
                <SubHeader>Articles</SubHeader>
                <section id="articles-recently-viewed">
                  <SectionHeader
                    title="Recently View"
                    description="A description about recently view recipes. This will be a great paragraph about your recently view recipes.  We make this a glorious paragraph. It will be amazing."
                  ></SectionHeader>
                  <RandomFourSummary key={`articles-chuck-0`} chunk={chunked[0]}></RandomFourSummary>
                </section>
                <section id="articles-recently-added">
                  <SectionHeader
                    title="Recently Added"
                    description="A description about recently view recipes. This will be a great paragraph about your recently view recipes.  We make this a glorious paragraph. It will be amazing."
                  ></SectionHeader>
                  <RandomFourSummary key={`articles-chuck-0`} chunk={chunked[1]}></RandomFourSummary>
                </section>
              </div>
            </div>
          </div>
          <Footer {...{ theme: HeaderTheme.DARK }} />
        </MainContainer>
      </Layout>
    )
  }
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
        }
      }
    }
  }
`
