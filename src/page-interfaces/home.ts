import { BetaSignupInterface } from '../components/betaSignup/interface'

export interface HomeProps {
  location: Location
  data: HomeData
}

export interface HomeData {
  site: HomeSite
}

export interface HomeSite {
  siteMetaData: HomeSiteMetaData
}

export interface HomeSiteMetaData {
  title: string
}

export interface AllContentfulHome {
  edges: HomeEdge[]
}

export interface HomeEdge {
  node: HomeNode
}

export interface HomeNode {
  backgroundVideo: HomeBackgroundVideo
  headline: HomeHeadline
  searchPlaceholder: string
  searchQuestion: string
  betaHero: BetaSignupInterface
}

export interface HomeHeadline {
  childMarkdownRemark: {
    rawMarkdownBody: string
  }
}

export interface HomeBackgroundVideo {
  file: HomeBannerImageFile
  title: string
}

export interface HomeBannerImageFile {
  url: string
}
