// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yinselの小窝',  // -----------------------网站标题----------------------- // 替换
  tagline: '记录知识的地方，避免遗忘。',   // -----------------------网站描述----------------------- // 替换
  favicon: 'img/yinsel.png', // 替换
  customFields: {
    "button": "Go",
    "docs": "knowledge",
    "mainTitle": "主页"
  },
  // 你的主页
  url: 'https://blog.yinsel.top/', // 替换
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yinsel', // -----------------------GitHub用户名----------------------- // 替换
  projectName: 'yinsel.github.io', // -----------------------GitHub仓库----------------------- // 替换

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "知识库",
          routeBasePath: "/knowledge",
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
		  // 替换
            'https://github.com/yinsel/yinsel.github.io/tree/main/',  // 替换
            showLastUpdateTime: true,
            showLastUpdateAuthor: true,
        },
        blog: {
          path: "博客",
          routeBasePath: "/blog",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yinsel/yinsel.github.io/tree/main/',  // 替换
            blogTitle: "博客",
            blogSidebarTitle: "文章列表",
          blogSidebarCount: "ALL"
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,   // 是否对搜索结果进行hash
        language: ["en", "zh"], // 搜索语言
        indexDocs: true, // 是否对docs进行索引
        indexBlog: true, // 是否对blog进行索引
        indexPages: true, // 是否对pages进行索引
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Yinselの小窝',   // -----------------------网站标题----------------------- // 替换
        logo: {
          alt: 'Yinsel Logo', // 替换
          src: 'img/yinsel.png', // 替换
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '知识库',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/yinsel/yinsel.github.io', // 替换
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Yinsel`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
		additionalLanguages: ['java','csharp','php'],
      },
    }),
    plugins:[
      async function myPlugin(context, options) {
        return {
          name: 'my-plugin',
          async configureWebpack(config, isServer, utils) {
            
          },

        };
      },
    ]
};

export default config;
