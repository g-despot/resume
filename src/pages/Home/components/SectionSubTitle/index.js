/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import styles from './styles.module.css';

function SectionSubTitle({title, description, url, url_text}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <a href={url} className={styles.description}>{url_text}</a>
    </div>
  );
}

export default SectionSubTitle;