import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton!',
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 's76kv9lf',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },

    // Sentry gatsby plugin
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn:
          'https://97b6a41e900944afaedb7cb6f8eff96a@o981172.ingest.sentry.io/5935719',
        sampleRate: 0.7,
      },
    },
  ],
};
