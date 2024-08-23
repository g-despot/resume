import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/Home/',
    component: ComponentCreator('/Home/', '619'),
    exact: true
  },
  {
    path: '/Home/components/Section/',
    component: ComponentCreator('/Home/components/Section/', '921'),
    exact: true
  },
  {
    path: '/Home/components/SectionTitle/',
    component: ComponentCreator('/Home/components/SectionTitle/', '18d'),
    exact: true
  },
  {
    path: '/Home/components/ThemeImage/',
    component: ComponentCreator('/Home/components/ThemeImage/', '88c'),
    exact: true
  },
  {
    path: '/Home/Framework/',
    component: ComponentCreator('/Home/Framework/', 'f91'),
    exact: true
  },
  {
    path: '/Home/TechContent/',
    component: ComponentCreator('/Home/TechContent/', '5da'),
    exact: true
  },
  {
    path: '/Home/Watch/',
    component: ComponentCreator('/Home/Watch/', '003'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e0c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '742'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e90'),
            routes: [
              {
                path: '/docs/attribution',
                component: ComponentCreator('/docs/attribution', 'd85'),
                exact: true
              },
              {
                path: '/docs/experience/community-building',
                component: ComponentCreator('/docs/experience/community-building', '88e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/experience/marketing-analytics',
                component: ComponentCreator('/docs/experience/marketing-analytics', '48a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/experience/software-development',
                component: ComponentCreator('/docs/experience/software-development', '785'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/experience/technical-writing',
                component: ComponentCreator('/docs/experience/technical-writing', '0ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resume/best-zagreb',
                component: ComponentCreator('/docs/resume/best-zagreb', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resume/ericsson',
                component: ComponentCreator('/docs/resume/ericsson', '036'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resume/infodom',
                component: ComponentCreator('/docs/resume/infodom', '568'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resume/memgraph',
                component: ComponentCreator('/docs/resume/memgraph', '5c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
