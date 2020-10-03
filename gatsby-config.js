const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `markdown`),
        name: `posts`
      }
    },
    `gatsby-transformer-remark`
  ]
};
