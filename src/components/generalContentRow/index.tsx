import React from 'react';
import ArticleSummary from '../articleSummary';
import NewsletterSignup from '../newsletterSignup';
import styles from './styles.css';
import styled from '@emotion/styled'

const GeneralContentRow = () => {
  return (
    <Container className="row">
      <Col6Full className="col6">
        <div className={styles.vegetableContainer}>
          <div className={styles.vegetableBackground}>
            <div className={styles.vegetableImage}>
              <img src={'/story-background.png'} />
            </div>
            <div className={styles.vegetableOverlay}>
              <Col3Full className="col3" />
                <Col6Full className="col6">
                  <div className={styles.storyContainer}>
                    <div className="eyebrow">Story</div>
                    <h2 className={styles.vegetableTitle}>
                      This is the story of Seedlings
                  </h2>
                    <button className="primaryButton darkOutline">Our Story</button>
                  </div>
                </Col6Full>
              <Col3Full className="col3" />
            </div>
          </div>
        </div>
      </Col6Full>
      <Col6Full className="col6">
        <div className="row">
          <Col6Full className="col6">
          <ArticleSummary {...
            {
              title: 'A guide to gardening tools',
              description: 'sdfsdfds sdf  sdf sdf',
              slug: 'sdfds',
              imagePath: '/tools-background.png'
            }
          } />
          </Col6Full>
          
        <Col6Full className="col6">
          <NewsletterSignup />
        </Col6Full>
      </div>
    </Col6Full>
  </Container>
  )
}

const Container = styled.div`
  padding-bottom: 200px;
`

const Col3Full = styled.div`
  width: 25%;
  padding: 0;
`

const Col6Full = styled.div`
  width: 50%;
  padding: 0;
`

export default GeneralContentRow