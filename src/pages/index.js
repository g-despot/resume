/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Head from '@docusaurus/Head';

import Layout from '@theme/Layout';

import Home from './Home';

const Index = () => {
  return (
    <Layout
      description="A website for showcasing career experience"
      wrapperClassName="homepage">
      <Head>
        <title>Ivan Despot - Portfolio site</title>
      </Head>
      <Home />
    </Layout>
  );
};

export default Index;