import React from 'react';
import ArticleSummaryInterface from "./interface"
import * as styles from './styles.module.css'

const ArticleSummary = (props: ArticleSummaryInterface) => (
  <div className={styles.article} key={props.slug}>
    <a href={`/article/${props.slug}`}>
      <div className={styles.articleInside} style={{ backgroundImage: `url(${props.imagePath})` }}>
      </div>
      <div className={styles.articleOverlay}>
        <h3>{props.title}</h3>
      </div>
    </a>
  </div>
)

export default ArticleSummary
