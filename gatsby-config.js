module.exports = {
  siteMetadata: {
    title: 'CMT CS Learning Website',
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              // maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `./content`,
        ignore: [
          `**/\.*`,
          '**/LICENSE',
          '**/README.*',
          '**/CONTRIBUTING.*',
          '**/贡献文档.*',
          '**/规范手册.*',
        ], // ignore files starting with a dot
      },
    },
  ],
};
