import ArticleSummaryInterface from '../articleSummary/interface'
import FeatureContentRowDetailProps from './featuredContentRowDetail/interface'

export default interface FeatureContentRowProps {
  features: ArticleSummaryInterface[]
  details: FeatureContentRowDetailProps
  basePath: string
}
