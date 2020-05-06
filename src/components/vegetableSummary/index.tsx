import React from 'react';
import VegetablesSummaryInterface from "./interface"
import styles from './styles.css'

const VegetablesSummary = (props: VegetablesSummaryInterface) => (
  <div className={styles.article} key={props.slug}>
    <a href={`/vegetables/${props.slug}`}>
      <div className={styles.articleInside} style={{ backgroundImage: `url(${props.imagePath})` }}>
      </div>
      <div className={styles.articleOverlay}>
        <h4 className="dark-text">{props.parentVegetable}</h4>
        <h3 className="dark-text">{props.title}</h3>
      </div>
    </a>
  </div>
)

export default VegetablesSummary
