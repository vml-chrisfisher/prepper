import styled from '@emotion/styled'
import dateformat from 'dateformat'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import ArticleSection from '../../components/articleSection'
import ArticleSecionInterface from '../../components/articleSection/interface'
import FeaturedContentRow from '../../components/featuredContentRow'
import FeatureContentRowProps from '../../components/featuredContentRow/interface'
import Footer from '../../components/footer'
import GeneralContentRow from '../../components/generalContentRow'
import { HeaderTheme } from '../../components/header/interface'
import Layout from '../../components/layout'
import { ArticleProps, AllContentfulArticle, ArticleTag } from './interface'

class ArticleTemplate extends React.Component<ArticleProps> {
    render() {
        const articleFeatures: FeatureContentRowProps = {
            details: {
                title: 'May Articles',
                description:
                    'I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage',
                buttonCaption: 'Explore May Posts',
                slug: '/articles',
                theme: HeaderTheme.DARK,
            },
            features: [
                {
                    title: 'Spring Seedling To Start Now',
                    slug: 'Okra',
                    imagePath: '/andrej-lisakov-zYUn4R37o_U-unsplash.jpg',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    basePath: 'article',
                },
                {
                    title: 'Compost',
                    slug: 'Okra',
                    imagePath: '/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg',
                    description:
                        'Erat velit scelerisque in dictum non consectetur a erat. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.',
                    basePath: 'article',
                },
                {
                    title: 'Spring Root Vegetables',
                    slug: 'Okra',
                    imagePath: '/heather-gill-VJa9L3ZVBIc-unsplash.jpg',
                    description:
                        'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Malesuada bibendum arcu vitae elementum.',
                    basePath: 'article',
                },
            ],
            basePath: 'article'
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
`

        const MainContainer = styled.div`
      background-color: #fff;
      position: absolute;
      top: 15.625em;
`
        const post: AllContentfulArticle = get(this.props, 'data.contentfulArticle')
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')
        const postCreate = dateformat(post.createdAt, 'fullDate')

        return (
            <Layout location={this.props.location}>
                <MainContainer style={{ background: '#fff' }}>
                    <Helmet title={`${post.title} | ${siteTitle}`} />
                    <div>
                        <div className="row">
                            <div className="col3" />
                            <div className="col6">
                                <Title className="section-headline">{post.title}</Title>
                                <CreateDate>{postCreate}</CreateDate>
                            </div>
                            <div className="col3" />
                        </div>
                        <img src={post.heroImage.file.url} />
                        <div className="row">
                            <div className="col2" />
                            <div className="col8">
                                <BodyCopy
                                    dangerouslySetInnerHTML={{
                                        __html: post.bodyCopy.childMarkdownRemark.rawMarkdownBody,
                                    }}
                                ></BodyCopy>
                                {post.sections.map((section: ArticleSecionInterface, index: number) => {
                                    return <ArticleSection key={`article-section-${index}`} {...section} />
                                })}
                                <div className="col12">
                                    <h3>Tags</h3>
                                    {post.tags.map((tag: ArticleTag, index: number) => {
                                        return <TagStyled key={`tag-${index}`}>{tag.tag}</TagStyled>
                                    })}
                                </div>
                                <FeaturedContentRow {...articleFeatures} />
                                <GeneralContentRow />
                                <Footer {...{ theme: HeaderTheme.DARK }} />
                            </div>
                            <div className="col2" />
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
            createdAt
            heroImage {
                file {
                    url
                }
                title
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
