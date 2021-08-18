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
  id: string
  bannerImage: ArticleBannerImage
  bodyCopy: {
    childMarkdownRemark: {
      rawMarkdownBody: string
    }
  }
  contentful_id: string
  slug: string
  createdAt: string
  updatedAt: string
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
  file: {
    details: {
      image: {
        height: number
        width: number
      }
    }
    url: string
  }
}

export interface ArticleBannerImageFile {
  url: string
}
