// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Horizon',
  tagline: 'Horizon is a cloud-native application delivery platform',
  url: 'https://horizoncd.github.io',
  baseUrl: '/',
  projectName: 'horizoncd.github.io',
  organizationName: 'horizoncd',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/horizoncd/horizoncd.github.io/blob/master/docs',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/horizoncd/horizoncd.github.io/blob/master/blog',
          feedOptions: {
            type: 'all',
            copyright: `CopyrightCopyright © ${new Date().getFullYear()} Facebook, Inc.`
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/horizon.svg',
        },
        items: [
          {
            type:'localeDropdown',
            position: 'right',
          },
          // {
          //   type: 'doc',
          //   docId: 'tutorials/how-to-install',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {
          //   to: '/blog', 
          //   label: 'Blog', 
          //   position: 'left'
          // },
          // {
          //   to: '/blog/archive',
          //   label: 'Blog Archive',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/horizoncd/horizon',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Horizon, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
