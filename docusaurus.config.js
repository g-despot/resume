// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/paper.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/resume/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'g-despot', // Usually your GitHub org/user name.
  projectName: 'resume', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-sass',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/showcase.scss'),
            require.resolve('./src/css/versions.scss'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/paper.png',
      navbar: {
        title: 'Homepage',
        logo: {
          alt: 'My Site Logo',
          src: 'img/paper.png',
        },
        style: 'dark',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Resume',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/g-despot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
              {
                label: 'Resume',
                to: '/docs/resume/ericsson',
              },
              {
                label: 'Experience & Skills',
                to: '/docs/experience/software-development',
              },
            ],
          },
          {
            title: 'Social channels',
            items: [
              {
                label: 'Medium',
                href: 'https://gdespot.medium.com/',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/ivan_g_despot',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/14674424/ivan-despot',
              },
            ],
          },
          {
            title: 'Other channels',
            items: [
              //{
              //  label: 'Blog',
              //  to: '/blog',
              //},
              {
                label: 'GitHub',
                href: 'https://github.com/g-despot',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ivan-g-despot/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ivan Despot`,
      },
      prism: {
        defaultLanguage: 'jsx',
        theme: require('./core/PrismTheme'),
        additionalLanguages: [
          'diff',
          'bash',
          'json',
          'java',
          'kotlin',
          'objectivec',
          'swift',
          'groovy',
          'ruby',
          'flow',
        ],
      },
    }),
};

export default config;
