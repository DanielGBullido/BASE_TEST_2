require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Base Blog`,
    name: `Base Blog`,
    siteUrl: `https://get-base.com/blog/`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Learn about your unique body`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/get_base`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/get_base`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/trackyourbase`,
      },
     
    ],
  },
  plugins: [
      {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          output: `/some-other-sitemap.xml`,
          // Exclude specific pages or groups of pages using glob parameters
          // See: https://github.com/isaacs/minimatch
          // The example below will exclude the single `path/to/page` and all routes beginning with `category`
          exclude: [],
          
          resolveSiteUrl: ({site, allSitePage}) => {
            //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
            return 'https://get-base.com/blog/'
          }
        }
    },
    {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
    },
    {
      resolve: "gatsby-theme-novelaa",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/blog/",
        authorsPage: true,
        sources: {
          local: false,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Base Blog`,
        short_name: `Blog`,
        start_url: `/blog`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
        resolve: `gatsby-plugin-s3`,
        options: {
          bucketName: "gatsby-web",
        },
    },
  ],
};
