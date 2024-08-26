/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Watch() {
  return (
    <Section>
      <SectionTitle
        title="And this is me talking on camera"
        description={
          <>
            During my time at Memgraph I participated in a lot of remote meetups and conferences. You can read more about my advocacy and evngelism experience {' '}
            <a href="https://g-despot.github.io/resume/docs/experience/community-building">
              here
            </a>
            .
          </>
        }
      />
      <div className={styles.videos}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/F2k9VzRb4og?si=FZak8dXo_fmtYRzm"
            title="Graph-Based Stream Processing in Python"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
          <div className={styles.videoInfo}>
            <h4>Graph-Based Stream Processing in Python</h4>
            <p>57:11</p>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/cDNQtQyD-JQ?si=g6p3hZqL7PNog8zp"
            title="Explain Like I'm 5: React Native"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
          <div className={styles.videoInfo}>
            <h4>A “how-to” guide for the Microsoft Build Conference 2021</h4>
            <p>1:33</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Watch;
