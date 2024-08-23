/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Framework from './Framework';
import Watch from './Watch';
import TechContent from './TechContent';

export default function Home() {
  return (
    <>
      <Framework />
      <Watch />
      <TechContent />
    </>
  );
}