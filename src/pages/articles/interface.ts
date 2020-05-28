export interface ArticlesProps {
  location: Location
  data: ArticlesData
}

export interface ArticlesData {
  site: ArticlesSite
}

export interface ArticlesSite {
  siteMetaData: ArticlesSiteMetaData
}

export interface ArticlesSiteMetaData {
  title: string
}

export interface AllContentfulArticle {
  edges: ArticlesEdge[]
}

export interface ArticlesEdge {
  node: ArticlesNode
}

export interface ArticlesNode {
  bannerImage: ArticlesBannerImage,
  slug: string,
  title: string
}

export interface ArticlesBannerImage {
  file: ArticlesBannerImageFile,
  title: string
}

export interface ArticlesBannerImageFile {
  url: string
}