import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'
import Layout from '../components/layout'
import { PlantsEdge, PlantsProps } from '../page-interfaces/plants'

class PlantsIndex extends React.Component<PlantsProps> {
  render() {
    /* eslint-disable  @typescript-eslint/no-var-requires */
    /* eslint-disable  no-undef */
    const contentful = require('contentful')
    const contentfulConfig = require('../../.contentful.json')
    /* eslint-enable  @typescript-eslint/no-var-requires */
    /* eslint-enable  no-undef */
    const client = contentful.createClient({
      space: contentfulConfig.spaceId,
      accessToken: contentfulConfig.accessToken,
    })

    const asset = client.getAsset('4rf552O0YO79rkWIvVg00Y').then((asset: any) => console.log(asset.fields.file.url))
    const siteTitle: string = get(this, 'props.data.site.siteMetadata.title')
    const posts: PlantsEdge[] = get(this, 'props.data.allContentfulVegetable.edges')
    const vegetablesByParent = [
      {
        type: 'Vegetables',
        subplants: new Array<{ [id: string]: PlantsEdge[] }>(),
      },
      {
        type: 'Fruits',
        subplants: new Array<{ [id: string]: PlantsEdge[] }>(),
      },
      {
        type: 'Herbs',
        subplants: new Array<{ [id: string]: PlantsEdge[] }>(),
      },
      {
        type: 'Grains',
        subplants: new Array<{ [id: string]: PlantsEdge[] }>(),
      },
    ]
    posts.map((plant: PlantsEdge) => {
      /* eslint-disable  no-case-declarations */
      switch (plant.node.parentVegetable.contentfulid.substring(0, 1).toLowerCase()) {
        case 'v':
          let vegetablesInFamilies: { [id: string]: PlantsEdge[] } | undefined = vegetablesByParent[0].subplants.find(
            parentVege => {
              return parentVege[plant.node.parentVegetable.name]
            },
          )
          if (vegetablesInFamilies === undefined) {
            vegetablesInFamilies = {}
            vegetablesInFamilies[plant.node.parentVegetable.name] = []
            vegetablesByParent[0].subplants.push(vegetablesInFamilies)
          }
          vegetablesInFamilies[plant.node.parentVegetable.name].push(plant)

          break
        case 'f':
          let fruitsInFamilies: { [id: string]: PlantsEdge[] } | undefined = vegetablesByParent[1].subplants.find(
            parentVege => {
              return parentVege[plant.node.parentVegetable.name]
            },
          )
          if (fruitsInFamilies === undefined) {
            fruitsInFamilies = {}
            fruitsInFamilies[plant.node.parentVegetable.name] = []
            vegetablesByParent[1].subplants.push(fruitsInFamilies)
          }
          fruitsInFamilies[plant.node.parentVegetable.name].push(plant)
          break
        case 'h':
          let herbsInFamilies: { [id: string]: PlantsEdge[] } | undefined = vegetablesByParent[2].subplants.find(
            parentVege => {
              return parentVege[plant.node.parentVegetable.name]
            },
          )
          if (herbsInFamilies === undefined) {
            herbsInFamilies = {}
            herbsInFamilies[plant.node.parentVegetable.name] = []
            vegetablesByParent[2].subplants.push(herbsInFamilies)
          }
          herbsInFamilies[plant.node.parentVegetable.name].push(plant)
          break
        case 'g':
          let grainsInFamilies: { [id: string]: PlantsEdge[] } | undefined = vegetablesByParent[3].subplants.find(
            parentVege => {
              return parentVege[plant.node.parentVegetable.name]
            },
          )
          if (grainsInFamilies === undefined) {
            grainsInFamilies = {}
            grainsInFamilies[plant.node.parentVegetable.name] = []
            vegetablesByParent[3].subplants.push(grainsInFamilies)
          }
          grainsInFamilies[plant.node.parentVegetable.name].push(plant)
          break
        default:
          return
      }
    })

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

    const VideoBackgroundContainer = styled.div`
      position: relative;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    `

    const HeroVideo = styled.video`
      position: absolute;
      z-index: 99;
      max-width: 100%;
    `

    const ArticleInside = styled.div`
      display: block;
      background-size: cover;
      background-repeat: no-repeat;
      padding-top: 56%;
      -ms-transform: scale(1);
      -moz-transform: scale(1);
      -webkit-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
      -webkit-transition: all 1s;
      -moz-transition: all 1s;
      -o-transition: all 1s;
      transition: all 1s;
      &:before {
        position: absolute;
        content: ' ';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 0;
        background-color: rgba(51, 51, 51, 0.25);
      }
    `

    const ArticleImageParent = styled.div`
      width: 100%;
      overflow: hidden;
      position: relative;
    `

    const ArticleOverlay = styled.div`
      position: absolute;
      z-index: 999;
      bottom: 20px;
      left: 20px;
      width: calc(100% - 40px);
      color: #fff;
    `

    const OverlayContainer = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 20px;
      overflow: hidden;
    `

    const ArticleDescription = styled.div`
      font-family: 'Nunito', sans-serif;
      font-size: 0.75em;
      color: #ffffff;
      height: 100px;
      max-height: 100px;
      display: block;
      padding-top: 20px;
    `

    const VegetableGroup = styled.div`
      padding-top: 20px;
      padding-bottom: 40px;
    `

    const VegetableGroupTitle = styled.h2`
      font-family: 'Nunito', sans-serif;
      font-size: 1.5em;
      font-weight: 600;
      color: #333333;
      display: block;
    `

    const VegetableTitle = styled.h2`
      font-family: 'Nunito', sans-serif;
      font-size: 1em;
      font-weight: 300;
      color: #333333;
      display: block;
    `

    const PrimaryButton = styled.button`
      background-color: #0f9114;
      border: none;
      font-family: 'Nunito', sans-serif;
      font-size: 0.75rem;
      color: #ffffff;
      text-align: center;
      margin: 20px auto;
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      padding: 15px 25px;
      letter-spacing: 2px;
    `

    return (
      <Layout
        meta="Garden with confidence. Cook with passion. Enjoy your food. Create conversation.  Find recipes, search our encyclopedia of gardening and cooking tips and ingredients, watch food videos, and more."
        location={this.props.location}
      >
        <div style={{ background: '#fff', paddingTop: '250px', position: 'absolute', top: '0', width: '100%' }}>
          <Helmet title="Zephyr & Hare | Plants" />
          <h1>Plants</h1>
          <div>
            <div className="row">
              <div className="col3" />
              <div className="col6">
                <BodyCopy>
                  Direct trade glossier celiac, gluten-free gochujang four dollar toast poutine flannel messenger bag
                  normcore narwhal poke banh mi tumeric. Meh chillwave tbh jean shorts, DIY sustainable trust fund ramps
                  enamel pin literally butcher cray pok pok. Lomo flannel wayfarers pork belly lyft trust fund. DIY
                  biodiesel tacos fanny pack tousled. YOLO chicharrones small batch dreamcatcher chillwave fam literally
                  celiac etsy meggings bitters neutra kickstarter hell of fingerstache. Sustainable chicharrones keytar
                  mumblecore meditation live-edge. Fanny pack succulents dreamcatcher man bun brunch quinoa ramps
                  selfies church-key.
                </BodyCopy>
              </div>
              <div className="col3" />
            </div>
            <div>
              {vegetablesByParent.map((vegetableParent, vegParentIndex) => {
                return (
                  <div key={vegParentIndex}>
                    {vegetableParent.type.toLowerCase() === 'vegetables' && (
                      <ArticleImageParent key={vegParentIndex}>
                        <ArticleInside
                          style={{
                            backgroundImage: `url("//images.ctfassets.net/ce6fbxhy1t51/1ivQJbUcXJJUiHGiL9d4tN/9566fedf02d1c8c22c9dd3b840807c6f/asparagus-raw.jpg")`,
                          }}
                        />
                        <OverlayContainer>
                          <ArticleOverlay key={vegParentIndex}>
                            <h3>sdfdsds</h3>
                            <ArticleDescription>sdfdsfd</ArticleDescription>
                          </ArticleOverlay>
                        </OverlayContainer>
                      </ArticleImageParent>
                    )}
                    {vegetableParent.type.toLowerCase() === 'fruits' && (
                      <VideoBackgroundContainer>
                        <HeroVideo
                          src="//videos.ctfassets.net/ce6fbxhy1t51/01z1fvMUjlVnMyzjW8K76s/d67310a671159844407d64790864690e/Close_Up_Video_Of_Raspberries.mp4"
                          preload="true"
                          autoPlay
                          muted
                          loop
                        ></HeroVideo>
                      </VideoBackgroundContainer>
                    )}
                    {vegetableParent.type.toLowerCase() === 'grains' && (
                      <VideoBackgroundContainer>
                        <HeroVideo
                          src="//videos.ctfassets.net/ce6fbxhy1t51/nrN4bkyTQovcYuC1V3U7D/6bf65796392823fb7484dbd518347cb5/Pexels_Videos_1509175.mp4?w=1400"
                          preload="true"
                          autoPlay
                          muted
                          loop
                        ></HeroVideo>
                      </VideoBackgroundContainer>
                    )}
                    {vegetableParent.type.toLowerCase() === 'herbs' && (
                      <ArticleImageParent>
                        <ArticleInside
                          style={{
                            backgroundImage: `url("//images.ctfassets.net/ce6fbxhy1t51/2jOR7KGH7C6xkwqaGBKVig/45a4215b125dfafcbd209d78c0ef0247/juliana-malta-fWMH08cUvyw-unsplash__1_.jpg")`,
                          }}
                        />
                        <OverlayContainer>
                          <ArticleOverlay>
                            <h3>sdfdsds</h3>
                            <ArticleDescription>sdfdsfd</ArticleDescription>
                          </ArticleOverlay>
                        </OverlayContainer>
                      </ArticleImageParent>
                    )}
                    {vegetableParent.subplants.map((vegPlant, index) => {
                      return (
                        <div className="container" key={index}>
                          {Object.keys(vegPlant).map((key, index) => {
                            return (
                              <div key={index}>
                                <VegetableGroup>
                                  <VegetableGroupTitle>{key}</VegetableGroupTitle>
                                  <div className="row">
                                    {vegPlant[key].map((plant: PlantsEdge, index: number) => {
                                      return (
                                        <div className="col4" key={index}>
                                          <LazyLoad
                                            style={{ width: '100%', backgroundColor: '#FEFEFE' }}
                                            once
                                            offset={100}
                                          >
                                            <img src={plant.node.bannerImage.file.url} />
                                          </LazyLoad>
                                          <VegetableTitle className="center">{plant.node.title}</VegetableTitle>
                                          <PrimaryButton>Learn More</PrimaryButton>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </VegetableGroup>
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PlantsIndex

export const pageQuery = graphql`
  query AllPlantsQuery {
    allContentfulVegetable(sort: { order: ASC, fields: title }) {
      edges {
        node {
          bannerImage {
            file {
              url
            }
            title
          }
          slug
          title
          parentVegetable {
            contentfulid
            name
          }
        }
      }
    }
  }
`
