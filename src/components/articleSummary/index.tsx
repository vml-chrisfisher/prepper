import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import LazyLoad from 'react-lazy-load'
import ArticleSummaryInterface from './interface'

const windowWidthHalf = typeof window !== 'undefined' ? window.innerWidth / 2 : 600

const ArticleSummary = (props: ArticleSummaryInterface) => {
  console.log(props)
  const copyLength = props.description.length < 200 ? props.description.length : 200
  const copyRaw = props.description.substr(0, copyLength)
  const lastPeriod = copyRaw.lastIndexOf('.')
  const copy = lastPeriod ? copyRaw.substr(0, lastPeriod + 1) : copyRaw

  return (
    <Article key={props.slug}>
      <Link style={{ textDecoration: 'none' }} to={`/${props.basePath}/${props.slug}`}>
        <ArticleImageParent>
          <ArticleInside>
            <LazyLoad once offset={100}>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${props.imagePath}?fm=webp&q=70&w=${Math.round(windowWidthHalf)}&h=${Math.round(
                    windowWidthHalf,
                  )}&fit=fill`}
                />
                <source
                  type="image/jpg"
                  srcSet={`${props.imagePath}?fm=jpg&q=70&w=${Math.round(windowWidthHalf)}&h=${Math.round(
                    windowWidthHalf,
                  )}&fit=fill`}
                />
                <img
                  src={`${props.imagePath}?fm=jpg&q=70&w=${Math.round(windowWidthHalf)}&h=${Math.round(
                    windowWidthHalf,
                  )}&fit=fill`}
                  alt={props.imageDescription}
                />
              </picture>
            </LazyLoad>
          </ArticleInside>
        </ArticleImageParent>
        <OverlayContainer className="hidden-sm">
          <ArticleOverlay>
            <ArticleTitle>{props.title}</ArticleTitle>
            {props.description && <ArticleDescription>{props.description}</ArticleDescription>}
          </ArticleOverlay>
        </OverlayContainer>
        <OverlainContainerMobile className="hidden-lg">
          <TitleMobile>{props.title}</TitleMobile>
        </OverlainContainerMobile>
      </Link>
    </Article>
  )
}

const ArticleInside = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
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

const Article = styled.div`
  width: 100%;
  display: inline-block;
  height: 150%;
  position: relative;
`

const ArticleImageParent = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

const ArticleOverlay = styled.div``

const OverlayContainer = styled.div``

const OverlainContainerMobile = styled.div`
  width: 100%;
  height: 100%;
`

const TitleMobile = styled.h3`
  color: #fff;
  font-size: 2.75em;
  padding-top: 30%;
  padding-left: 5%;
  text-align: center;
  width: 90%;
`

const ArticleTitle = styled.h3`
  text-decoration: none;
  padding-top: 20px;
  font-size: 18px;
  letter-spacing: -0.5px;
`

const ArticleDescription = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #333333;
  height: 100px;
  max-height: 100px;
  display: block;
  padding-top: 20px;
  text-decoration: none;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`

export default ArticleSummary
