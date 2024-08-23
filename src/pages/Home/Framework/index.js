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

function Framework() {
  return (
    <Section>
      <SectionTitle
        title="Hi, I’m Ivan and this is resume"
        description={
          <>
            I am currently working as a Software Developer at Ericsson, contributing to the development and testing and Ericsson's flagship products.           
            After receiving my master's degree in computer science, I began my career as a Developer Relations Engineer at a graph 
            database startup as a founding member of the Developer Experience team. I worked on and managed various projects, 
            from developing full-stack apps and database drivers to presenting at tech meetups and managing open-source communities.
          </>
        }
      />
      <div className={styles.cardContainer}>
        <a href={useBaseUrl(`/docs/experience/software-development`)}>
        <div className={styles.card}>
          <ThemeImage
            lightSrc={useBaseUrl("/img/homepage/software.png")}
            darkSrc={useBaseUrl("/img/homepage/software.png")}
            className={styles.cardImage}
            alt="Software Development"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>Software Development</h4>
            <p className={styles.cardDescription}>
              Developing full-stack web applications in Python, embedded Erlang firmware...
            </p>
          </div>
        </div>
        </a>
        <a href={useBaseUrl(`/docs/experience/technical-writing`)}>
        <div className={styles.card}>
          <ThemeImage
            lightSrc={useBaseUrl("/img/homepage/tech-writing.png")}
            darkSrc={useBaseUrl("/img/homepage/tech-writing.png")}
            className={styles.cardImage}
            alt="Grid of icons representing libraries, SDKs, and native code"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>
              Technical Writing
            </h4>
            <p className={styles.cardDescription}>
              Creating software documentation, blog posts, tutorials and managing documentation frameworks. 
            </p>
          </div>
        </div>
        </a>
        <a href={useBaseUrl(`/docs/experience/community-building`)}>
        <div className={styles.card}>
          <ThemeImage
            lightSrc={useBaseUrl("/img/homepage/community.png")}
            darkSrc={useBaseUrl("/img/homepage/community.png")}
            className={styles.cardImage}
            alt="List of developer tool toggles for debugging, performance, and more"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>Community building</h4>
            <p className={styles.cardDescription}>
              I have managed social channels and represented companies at conferences, organized tech meetups....
            </p>
          </div>
        </div>
        </a>
        <a href={useBaseUrl(`/docs/experience/marketing-analytics`)}>
        <div className={styles.card}>
          <ThemeImage
            lightSrc={useBaseUrl("/img/homepage/analytics.png")}
            darkSrc={useBaseUrl("/img/homepage/analytics.png")}
            className={styles.cardImage}
            alt="Marketing & Analytics"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>
            Marketing & Analytics
            </h4>
            <p className={styles.cardDescription}>
            I have extensive experience in web analytics and data tracking, which are essential for understanding user behavior and optimizing the Developer Experience.
            </p>
          </div>
        </div>
        </a>
      </div>
    </Section>
  );
}

export default Framework;