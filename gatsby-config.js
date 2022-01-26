const path = require("path");

module.exports = {
  siteMetadata: {
    title: `My Gatsby Test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `./src/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Abyss", // Or install your favorite theme from GitHub
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
        extensions: [],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Georgia\:400,700',
          'Jost\:400,700,900'
        ],
        display: 'swap'
      }
    }
  ],
};
