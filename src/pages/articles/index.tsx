import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import ArticleSummaryInterface from '../../components/articleSummary/interface'
import Layout from '../../components/layout'
import RandomFourSummary from '../../components/randomFourSummary'
import { ArticlesEdge, ArticlesProps } from './interface'

class ArticlesIndex extends React.Component<ArticlesProps> {
    render() {
        const siteTitle: string = get(this, 'props.data.site.siteMetadata.title')
        const posts: ArticlesEdge[] = get(this, 'props.data.allContentfulArticle.edges')
        const chunkSize = 4
        const chunked: ArticleSummaryInterface[][] = []
        const postsCopy: ArticleSummaryInterface[] = posts.map((post: any) => {
            return {
                description: '',
                title: post.node.title,
                slug: post.node.slug,
                imagePath: post.node.bannerImage.file.url,
                basePath: 'article',
            }
        })

        while (postsCopy.length > 0) {
            chunked.push(postsCopy.splice(0, chunkSize))
        }

        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff', paddingTop: '250px', position: 'absolute', top: '0', width: '100%' }}>
                    <Helmet title={siteTitle} />
                    <h1>Articles</h1>
                    <div className="wrapper">
                        <div>
                            {chunked.map((chunk: ArticleSummaryInterface[], index: number) => {
                                return (
                                    <RandomFourSummary
                                        key={`articles-chuck-${index}`}
                                        {...{ chunk }}
                                    ></RandomFourSummary>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ArticlesIndex

export const pageQuery = graphql`
    query AllArticlesQuery {
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
