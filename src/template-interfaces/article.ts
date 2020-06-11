export interface ArticleProps {
  location: Location
  data: ArticleData
}

export interface ArticleData {
  site: ArticleSite
  contentfulArticle: AllContentfulArticle
}

export interface ArticleSite {
  siteMetaData: ArticleSiteMetaData
}

export interface ArticleSiteMetaData {
  title: string
}

export interface AllContentfulArticle {
  bodyCopy: {
    childMarkdownRemark: {
      rawMarkdownBody: string
    }
  }
  createdAt: string
  heroImage: ArticleBannerImage
  subtitle: string
  tags: ArticleTag[]
  title: string
  sections: ArticleSection[]
}

export interface ArticleSection {
  bodyCopy: {
    childMarkdownRemark: {
      rawMarkdownBody: string
    }
  }
  images: ArticleBannerImage[]
  isTwoColumn: boolean
}

export interface ArticleTag {
  tag: string
}

export interface ArticleBannerImage {
  description: string
  file: ArticleBannerImageFile
  title: string
}

export interface ArticleBannerImageFile {
  url: string
}
