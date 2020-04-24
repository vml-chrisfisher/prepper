import React from 'react'
import * as baseStyles from '../../base.module.css'
import * as styles from './styles.module.css'
import FeatureContentRowDetailProps from "./interface"

const FeatureContentRowDetail = (props: FeatureContentRowDetailProps) => {
  return (<div>
    <h2 className={styles.featureTitle}>{props.title}</h2>
    <div className={styles.featureDescription}>{props.description}</div>
    <button className={styles.featureButton}>{props.buttonCaption}</button>
  </div>)
}

export default FeatureContentRowDetail