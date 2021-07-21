import { string } from 'yup/lib/locale'

export interface ArticleSummaryInterface {
  title: string
  description: string
  slug: string
  imagePath: string
  imageDescription: string
  basePath: string
  lastTimeViewed?: string
  lastTimeCooked?: string
}

export interface ArticleSummaryNode {
  node: {
    title: string
    slug: string
    bannerImage: {
      file: {
        url: string
      }
      title: string
    }
    bodyCopy: {
      childMarkdownRemark: {
        rawMarkdownBody: string
      }
    }
  }
}
