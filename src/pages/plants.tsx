import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { PlantsEdge, PlantsProps } from '../page-interfaces/plants'

class PlantsIndex extends React.Component<PlantsProps> {
  render() {
    const siteTitle: string = get(this, 'props.data.site.siteMetadata.title')
    const posts: PlantsEdge[] = get(this, 'props.data.allContentfulVegetable.edges')
    const vegetablesInFamilies: { [id: string]: PlantsEdge[] } = {}
    posts.map((plant: PlantsEdge) => {
      if (vegetablesInFamilies[plant.node.parentVegetable.name]) {
        vegetablesInFamilies[plant.node.parentVegetable.name].push(plant)
      } else {
        vegetablesInFamilies[plant.node.parentVegetable.name] = []
        vegetablesInFamilies[plant.node.parentVegetable.name].push(plant)
      }
    })
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff', paddingTop: '250px', position: 'absolute', top: '0', width: '100%' }}>
          <Helmet title={siteTitle} />
          <h1>Articles</h1>
          <div className="wrapper">
            <div>
              {Object.keys(vegetablesInFamilies).map((key, index) => {
                return (
                  <div key={index}>
                    <div>{key}</div>
                    {vegetablesInFamilies[key].map((plant: PlantsEdge, index) => {
                      return <div key={index}>{plant.node.title}</div>
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
            name
          }
        }
      }
    }
  }
`
