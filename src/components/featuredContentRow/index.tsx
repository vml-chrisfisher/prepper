import React from 'react'
import * as styles from './styles.module.css'
import * as baseStyles from '../base.module.css'
import ArticleSummaryInterface from '../articleSummary/interface'
import ArticleSummary from '../articleSummary'
import FeatureContentRowProps from './interface'
import FeatureContentRowDetail from './featuredContentRowDetail'

const FeaturedContentRow = (props: FeatureContentRowProps) => {
  const maxNumber = Math.floor(props.features.length + 1)
  const detailPosition = Math.floor(Math.random() * (props.features.length - 0 + 1));
  const items = [];
  let b = 0;
  for (let a = 0; a < maxNumber; a++) {
    if (a === detailPosition) {
      items.push(
        <div className={[baseStyles.col3, styles.col3Full].join(' ')}>
          <FeatureContentRowDetail {...props.details} />
        </div>
      )
    } else {
      items.push(
        <div className={[baseStyles.col3, styles.col3Full].join(' ')}>
          <ArticleSummary {... props.features[b]} />
        </div>
      )
      b++;
    }
  }

  return (<div className={[baseStyles.row, styles.featureContainer].join(' ')}>
    {
      items
    }
  </div>)
}

export default FeaturedContentRow