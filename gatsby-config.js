let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Knife and Fish',
    siteUrl: `https://www.knifeandfish.com/`,
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-typescript-css-modules',
    `gatsby-remark-lazy-load`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito:300,600', 'Playfair Display&display=swap']
        }
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-typescript`
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-google-amp`,
      options: {
        analytics: {
          type: 'gtag',
          dataCredentials: 'include',
          config: {
            vars: {
              gtag_id: 'UA-127393105-1',
              config: {
                      'UA-127393105-1': {
                        page_location: '{{ pathname }}'
                      },
                    },
              },
          },
        },
        canonicalBaseUrl: 'http://www.knifeandfish.com/',
        components: ['amp-form'],
        excludedPaths: ['/404*', '/'],
        pathIdentifier: '/amp/',
        relAmpHtmlPattern: '{{ canonicalBaseUrl }}{{ pathname }}{{ pathIdentifier }}',
        useAmpClientIdApi: true,
      },
    },
    {
      resolve: `gatsby-remark-images`,
    }
  ],
}
