import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import LazyLoad from 'react-lazy-load'
import RatingBar from '../ratingBar'
import { ArticleSummaryInterface } from './interface'

const windowWidthHalf = typeof window !== 'undefined' ? window.innerWidth / 2 : 600

const ArticleSummary = (props: ArticleSummaryInterface) => {
  const {
    title,
    description,
    slug,
    imagePath,
    imageDescription,
    basePath,
    lastTimeViewed,
    lastTimeCooked,
    contenfulId,
  } = props

  const createCopy = (description: string) => {
    if (description.length === 0) {
      return ''
    }
    const copyLength = description.length < 200 ? description.length : 200
    const copyRaw = description.substr(0, copyLength)
    const lastPeriod = copyRaw.lastIndexOf('.')
    const copy = lastPeriod !== -1 ? copyRaw.substr(0, lastPeriod + 1) : `${copyRaw} ...`
    return copy
  }

  const getReadableMonth = (monthNumber: number) => {
    switch (monthNumber) {
      case 0:
        return 'January'
      case 1:
        return 'February'
      case 2:
        return 'March'
      case 3:
        return 'April'
      case 4:
        return 'May'
      case 5:
        return 'June'
      case 6:
        return 'July'
      case 7:
        return 'August'
      case 8:
        return 'September'
      case 9:
        return 'October'
      case 10:
        return 'November'
      case 11:
        return 'December'
    }
  }

  const getReadableHour = (hourNumber: number) => {
    return hourNumber > 12 ? hourNumber - 12 : hourNumber
  }

  const getReadableAMPM = (hourNumber: number) => {
    return hourNumber > 12 ? 'PM' : 'AM'
  }

  const createReadableDate = (date: Date) => {
    const today: Date = new Date()
    if (
      today.getDate() === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    ) {
      return `Today at ${getReadableHour(date.getHours())}:${date.getMinutes()} ${getReadableAMPM(date.getHours())}`
    }

    if (
      today.getDate() - 1 === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    ) {
      return `Yesterday at ${getReadableHour(date.getHours())}:${date.getMinutes()} ${getReadableAMPM(date.getHours())}`
    }

    return `${getReadableMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`
  }

  const copy = createCopy(description)

  return (
    <Link style={{ textDecoration: 'none', height: '100%', display: 'block' }} to={`/${basePath}/${slug}`}>
      <Article key={slug}>
        <ArticleImageParent>
          <ArticleInside>
            <LazyLoad once offset={100}>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${imagePath}?fm=webp&q=70&w=${Math.round(windowWidthHalf)}&h=${Math.round(
                    windowWidthHalf,
                  )}&fit=fill`}
                />
                <source
                  type="image/jpg"
                  srcSet={`${imagePath}?fm=jpg&q=70&w=${Math.round(windowWidthHalf)}&h=${Math.round(
                    windowWidthHalf,
                  )}&fit=fill`}
                />
                <img
                  src={`${imagePath}?fm=jpg&q=70&w=${Math.round(windowWidthHalf)}&h=${Math.round(
                    windowWidthHalf,
                  )}&fit=fill`}
                  alt={imageDescription}
                />
              </picture>
            </LazyLoad>
          </ArticleInside>
        </ArticleImageParent>
        <OverlayContainer className="hidden-sm">
          <ArticleOverlay>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleDescription dangerouslySetInnerHTML={{ __html: copy }}></ArticleDescription>
            <RatingBarContainer>
              {basePath === 'recipe' && <RatingBar isSummary={true} recipeId={contenfulId}></RatingBar>}
              {basePath === 'article' && <RatingBar isSummary={true} articleId={contenfulId}></RatingBar>}
            </RatingBarContainer>
            {lastTimeViewed && !lastTimeCooked && (
              <div>
                <DateCaption>Last View On:</DateCaption>
                <DateValue>{createReadableDate(new Date(Date.parse(lastTimeViewed)))}</DateValue>
              </div>
            )}
            {lastTimeCooked && (
              <div>
                <DateCaption>Last Cooked On:</DateCaption>
                <DateValue>{createReadableDate(new Date(Date.parse(lastTimeCooked)))}</DateValue>
              </div>
            )}
          </ArticleOverlay>
        </OverlayContainer>
        <OverlainContainerMobile className="hidden-lg">
          <TitleMobile>{title}</TitleMobile>
          {copy && <ArticleDescription dangerouslySetInnerHTML={{ __html: copy }}></ArticleDescription>}
        </OverlainContainerMobile>
      </Article>
    </Link>
  )
}

const RatingBarContainer = styled.div`
  padding-top: 0px;
`

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
  color: #333333;
  font-size: 18px;
  text-align: left;
  letter-spacing: -0.5px;
  padding-top: 20px;
  width: 90%;
`

const ArticleTitle = styled.h3`
  text-decoration: none;
  padding-top: 20px;
  font-size: 18px;
  letter-spacing: -0.5px;
  min-height: 56px;
  width: 90%;
`

const ArticleDescription = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #333333;
  display: block;
  padding-right: 20px;
  text-decoration: none;
  min-height: 75px;
  @media (max-width: 767px) {
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 20px;
  }
`

const DateCaption = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #333333;
  display: block;
  padding-top: 7px;
  text-decoration: none;
  @media (max-width: 767px) {
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 20px;
  }
`

const DateValue = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 300;
  color: #333333;
  display: block;
  padding-top: 0px;
  text-decoration: none;
  @media (max-width: 767px) {
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 20px;
  }
`

export default ArticleSummary
