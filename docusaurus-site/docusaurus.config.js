module.exports = {
  title: 'Covid Overflow',
  tagline: 'Everything you need to know about COVID-19 in one place',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/articles/',
  favicon: 'img/favicon.ico',
  organizationName: 'team3', // Usually your GitHub org/user name.
  projectName: 'covid-overflow', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Covid Overflow',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Articles',
          position: 'left',
        },
        {to: 'blog', label: 'Dashboard', position: 'left'},
        {
          href: 'https://github.com/MLH-Fellowship/0.3.2-team3-covid-overflow/edit/master/docusaurus-site/blog/',
          label: 'Contribute',
          position: 'right',
        },
        {
          href: 'https://github.com/MLH-Fellowship/0.3.2-team3-covid-overflow',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MLH-Fellowship/0.3.2-team3-covid-overflow',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Covid Overflow, Inc. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: 'api-key',
      indexName: 'index-name',
      appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/MLH-Fellowship/0.3.2-team3-covid-overflow/edit/master/docusaurus-site/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/MLH-Fellowship/0.3.2-team3-covid-overflow/edit/master/docusaurus-site/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
