/** @type {import('next').NextConfig} */
const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true
})

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'apollo-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  excludeDefaultMomentLocales: false
}

module.exports = nextConfig

