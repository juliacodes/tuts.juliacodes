/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Juliacodes Front End Tutorials`,
    description: `Juliacodes tutorials`,
    author: `@juliacodes`,
  },

  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
      },
    },
    `gatsby-plugin-mailchimp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        endpoint: process.env.REACT_APP_MAILCHIMP_URL,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
