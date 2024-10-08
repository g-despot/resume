/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Resume',
      items: [{
        type: 'doc',
        id: 'resume/ericsson',
      },
      {
        type: 'doc',
        id: 'resume/memgraph',
      }, {
        type: 'doc',
        id: 'resume/best-zagreb',
      }, {
        type: 'doc',
        id: 'resume/infodom',
      },
      ],
    },
    {
      type: 'category',
      label: 'Experience & Skills',
      items: [{
        type: 'doc',
        id: 'experience/software-development',
      },
      {
        type: 'doc',
        id: 'experience/technical-writing',
      }, {
        type: 'doc',
        id: 'experience/community-building',
      }, {
        type: 'doc',
        id: 'experience/marketing-analytics',
      }, {
        type: 'doc',
        id: 'experience/project-management',
      },
      ],
    },
  ],
};

export default sidebars;
