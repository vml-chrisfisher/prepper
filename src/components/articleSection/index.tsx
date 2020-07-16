import styled from '@emotion/styled'
import React from 'react'
import LazyLoad from 'react-lazy-load'
import ArticleSectionInterface from './interface'

const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 900

const ArticleSection = (props: ArticleSectionInterface) => (
  <div className="row">
    {props.images.length === 1 && (
      <div className="row">
        <LazyLoad style={{ width: '100%', backgroundColor: '#FEFEFE' }} once offset={100}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${props.images[0].file.url}?fm=webp&q=50&w=${Math.round(windowWidth)}&h=${Math.round(
                windowWidth,
              )}&fit=fill`}
            />
            <source
              type="image/jpg"
              srcSet={`${props.images[0].file.url}?fm=jpg&q-50&w=${Math.round(windowWidth)}&h=${Math.round(
                windowWidth,
              )}&fit=fill`}
            />
            <img
              src={`${props.images[0].file.url}?fm=jpg&q-50&w=${Math.round(windowWidth)}&h=${Math.round(
                windowWidth,
              )}&fit=fill`}
              alt={props.images[0].description}
            />
          </picture>
        </LazyLoad>
      </div>
    )}
    {props.images.length === 2 && (
      <div className="row">
        <TwoPicturesLeft>
          <LazyLoad style={{ width: '100%', backgroundColor: '#FEFEFE' }} once offset={100}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${props.images[0].file.url}?fm=webp&q=50&w=${Math.round(windowWidth)}&h=${Math.round(
                  windowWidth,
                )}&fit=fill`}
              />
              <source
                type="image/jpg"
                srcSet={`${props.images[0].file.url}?fm=jpg&q-50&w=${Math.round(windowWidth)}&h=${Math.round(
                  windowWidth,
                )}&fit=fill`}
              />
              <img
                src={`${props.images[0].file.url}?fm=jpg&q-50&w=${Math.round(windowWidth)}&h=${Math.round(
                  windowWidth,
                )}&fit=fill`}
                alt={props.images[0].description}
              />
            </picture>
          </LazyLoad>
        </TwoPicturesLeft>
        <TwoPicturesRight>
          <LazyLoad style={{ width: '100%', backgroundColor: '#FEFEFE' }} once offset={100}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${props.images[1].file.url}?fm=webp&q=50&w=${Math.round(windowWidth)}&h=${Math.round(
                  windowWidth,
                )}&fit=fill`}
              />
              <source
                type="image/jpg"
                srcSet={`${props.images[1].file.url}?fm=jpg&q-50&w=${Math.round(windowWidth)}&h=${Math.round(
                  windowWidth,
                )}&fit=fill`}
              />
              <img
                src={`${props.images[1].file.url}?fm=jpg&q-50&w=${Math.round(windowWidth)}&h=${Math.round(
                  windowWidth,
                )}&fit=fill`}
                alt={props.images[1].description}
              />
            </picture>
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
  @media (max-width: 767px) {
    column-count: 1;
    padding-left: 10%;
    width: 80%;
  }
`

const OneColumn = styled.div`
  color: #464646;
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  line-height: 2em;
  padding-bottom: 30px;
  padding-top: 30px;
  text-align: justify;
  @media (max-width: 767px) {
    padding-left: 10%;
    width: 80%;
  }
`

const TwoPicturesLeft = styled.div`
  display: inline-block;
  width: 48%;
  padding-right: 2%;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
    padding-bottom: 5px;
  }
`

const TwoPicturesRight = styled.div`
  display: inline-block;
  width: 48%;
  padding-left: 2%;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`

export default ArticleSection
