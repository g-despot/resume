/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemeImage from '../components/ThemeImage';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function TechContent() {
  return (
    <Section>
      <SectionTitle
        title="These are some of the contributions I am most proud of"
        description={
          <>
           
          </>
        }
      />
      <div className={styles.cardContainer}>
        <a href="https://dev.to/gdespot/analyzing-real-time-movie-reviews-with-redpanda-and-memgraph-125">
        <div className={styles.card}>
          <ThemeImage
            lightSrc={useBaseUrl("/img/homepage/social.png")}
            darkSrc={useBaseUrl("/img/homepage/social.png")}
            className={styles.cardImage}
            alt="Recommendation machine"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>Recommendation machine</h4>
            <p className={styles.cardDescription}>
            Analyzing Real-Time Movie Reviews with Redpanda and Memgraph
            </p>
          </div>
        </div>
        </a>
        <a href="https://dev.to/gdespot/how-to-develop-a-credit-card-fraud-detection-application-using-memgraph-flask-and-d3-js-4n17">
        <div className={styles.card}>
          <ThemeImage
            lightSrc={useBaseUrl("/img/homepage/fraud.png")}
            darkSrc={useBaseUrl("/img/homepage/fraud.png")}
            className={styles.cardImage}
            alt="Financial Fraud Detection"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>
            Financial Fraud Detection
            </h4>
            <p className={styles.cardDescription}>
            How to Develop a Credit Card Fraud Detection Application using Memgraph, Flask, and D3.js
            </p>
          </div>
        </div>
        </a>
        <a href="https://memgraph.com/blog/visualize-the-bitclout-network-using-d3js">
        <div className={styles.card}>
          <ThemeImage
            lightSrc={useBaseUrl("/img/homepage/blockchain.png")}
            darkSrc={useBaseUrl("/img/homepage/blockchain.png")}
            className={styles.cardImage}
            alt="Blockchain analysis"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>Blockchain analysis</h4>
            <p className={styles.cardDescription}>
            Building a BitClout Social Network Visualization App With Memgraph and D3.js
            </p>
          </div>
        </div>
        </a>
        <a href="https://github.com/memgraph/starlink/blob/master/blog_post/blog-post.md">
        <div className={styles.card}>
          <ThemeImage
            lightSrc={useBaseUrl("/img/homepage/starlink.png")}
            darkSrc={useBaseUrl("/img/homepage/starlink.png")}
            className={styles.cardImage}
            alt="Kafka stream analysis"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>
            Kafka stream analysis
            </h4>
            <p className={styles.cardDescription}>
            Using Graph Databases for Low Latency Routing in the Starlink Satellite Network
            </p>
          </div>
        </div>
        </a>
      </div>
    </Section>
  );
}

export default TechContent;