/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IO兄弟',
  tagline: '一对神奇的兄弟',
  url: 'https://iobrother.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iobrother', // Usually your GitHub org/user name.
  projectName: 'iobrother.github.io', // Usually your repo name.
  trailingSlash: false,

  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'zmicro',
        path: 'zmicro',
        routeBasePath: 'zmicro',
        sidebarPath: require.resolve('./zmicroSidebars.js'),
      })
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'zim',
        path: 'zim',
        routeBasePath: 'zim',
        sidebarPath: require.resolve('./zimSidebars.js'),
      })
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'course',
        path: 'course',
        routeBasePath: 'course',
        sidebarPath: require.resolve('./courseSidebars.js'),
      })
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
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
        title: 'IO兄弟',
        logo: {
          alt: 'IO兄弟 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/zmicro/intro',
            label: '微服务',
            position: 'left',
            activeBaseRegex: `/zmicro/`,
          },
          {
            to: '/zim/intro',
            label: '即时通讯',
            position: 'left',
            activeBaseRegex: `/zim/`,
          },
          {
            to: '/course/cpp/intro',
            label: '视频教程',
            position: 'left',
            activeBaseRegex: `/course/`,
          },
          { to: 'blog', label: '博客', position: 'left' },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/iobrother',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习',
            items: [
              {
                label: 'C++视频教程',
                to: 'course/cpp/intro',
              },
              {
                label: 'Go视频教程',
                to: 'course/go/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/iobrother',
              },
            ],
          },
          {
            title: '条款',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: '隐私政策',
                href: 'https://iobrother.com/legal/privacy/',
              },
              {
                label: '使用条款',
                href: 'https://iobrother.com/legal/terms/',
              },
              {
                label: '数据政策',
                href: 'https://iobrother.com/legal/data-policy/',
              },
              {
                label: 'Cookie 政策',
                href: 'https://iobrother.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        // logo: {
        //   alt: 'Facebook Open Source Logo',
        //   src: 'img/oss_logo.png',
        //   href: 'https://opensource.facebook.com',
        // },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} IO兄弟. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
