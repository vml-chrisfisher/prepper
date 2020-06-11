import React from 'react'
import ArticleSectionInterface from './interface'
import styled from '@emotion/styled'
import LazyLoad from 'react-lazy-load'

const ArticleSection = (props: ArticleSectionInterface) => (
  <div className="row">
    {props.images.length === 1 && (
      <div className="row">
        <LazyLoad style={{ width: '100%', backgroundColor: '#FEFEFE' }} once offset={100}>
          <img src={props.images[0].file.url} />
        </LazyLoad>
      </div>
    )}
    {props.images.length === 2 && (
      <div className="row">
        <TwoPicturesLeft>
          <LazyLoad style={{ width: '100%', backgroundColor: '#FEFEFE' }} once offset={100}>
            <img src={props.images[0].file.url} />
          </LazyLoad>
        </TwoPicturesLeft>
        <TwoPicturesRight>
          <LazyLoad style={{ width: '100%', backgroundColor: '#FEFEFE' }} once offset={100}>
            <img src={props.images[1].file.url} />
          </LazyLoad>
        </TwoPicturesRight>
      </div>
    )}

    {props.isTwoColumn ? (
      <TwoColumns dangerouslySetInnerHTML={{ __html: props.bodyCopy.childMarkdownRemark.rawMarkdownBody }}></TwoColumns>
    ) : (
      <OneColumn dangerouslySetInnerHTML={{ __html: props.bodyCopy.childMarkdownRemark.rawMarkdownBody }}></OneColumn>
    )}
  </div>
)

const TwoColumns = styled.div`
  column-count: 2;
  color: #464646;
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  line-height: 2em;
  padding-bottom: 30px;
  padding-top: 30px;
  text-align: justify;
  widow: 3;
  orphan: 9;
`

const OneColumn = styled.div`
  color: #464646;
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  line-height: 2em;
  padding-bottom: 30px;
  padding-top: 30px;
  text-align: justify;
`

const TwoPicturesLeft = styled.div`
  display: inline-block;
  width: 48%;
  padding-right: 2%;
`

const TwoPicturesRight = styled.div`
  display: inline-block;
  width: 48%;
  padding-left: 2%;
`

export default ArticleSection
