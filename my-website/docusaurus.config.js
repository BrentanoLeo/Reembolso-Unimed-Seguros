// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unimed Seguros Knowledge Center',
  tagline: 'Tudo que você precisa saber para solicitar seu reembolso médico.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://brentanoleo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Reembolso-Unimed-Seguros/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BrentanoLeo', // Usually your GitHub org/user name.
  projectName: 'Reembolso-Unimed-Seguros', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    localeConfigs: {
      'pt-BR': {
        label: 'Português',
        htmlLang: 'pt-BR',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
    },
  },




  
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "pt"],
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: "/docs",
      }),
    ],
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Unimed Seguros',
        items: [
          {
            type: 'html',
            position: 'left',
            value: '<span class="navbar__subtitle">| Central de conhecimento</span>',
          },
          {to: '/', label: 'Início', position: 'right', activeBaseRegex: '^/$'},
          {to: '/docs/intro', label: 'Tutorial', position: 'right'},
          {to: '/blog', label: 'Blog Técnico', position: 'right'},
          {
            type: 'html',
            position: 'right',
            value: '<a href="/Reembolso-Unimed-Seguros/docs/intro" class="navbar__cta">Preciso de ajuda</a>',
          },
          {type: 'localeDropdown', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: 'Este site é um projeto independente, sem fins lucrativos, e não possui qualquer vínculo oficial com a Unimed Seguros ou com o sistema Unimed.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;