import React from 'react';
import ArticleSummaryInterface from "./interface"
import styles from './styles.css'

const ArticleSummary = (props: ArticleSummaryInterface) => (
  <div className={styles.article} key={props.slug}>
    <a href={`/article/${props.slug}`}>
      <div className={styles.articleImageParent}>
        <div className={styles.articleInside} style={{ backgroundImage: `url(${props.imagePath})` }}>
        </div>
      </div>
      <div className={styles.overlayContainer}>
        <div className={styles.articleOverlay}>
          <h3>{props.title}</h3>
          <div className={styles.articleDescription}>{props.description}</div>
        </div>
      </div>
      
    </a>
  </div>
)

export default ArticleSummary
