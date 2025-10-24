/**
 * @type {import('gatsby').GatsbyConfig}
 */
const adapter = require('gatsby-adapter-netlify')

module.exports = {
  siteMetadata: {
    title: `gatsby-tutorial`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
}
