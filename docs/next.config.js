const path = require('path')
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const monorepoRoot = path.resolve(__dirname, '..')
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  // Serve assets from the same origin by default. Set ASSET_PREFIX in your
  // environment (e.g. https://theme.hackclub.com) to host them elsewhere.
  assetPrefix: process.env.ASSET_PREFIX || '',
  outputFileTracingRoot: monorepoRoot,
  turbopack: {
    root: monorepoRoot
  },
  transpilePackages: ['@hackclub/theme', '@hackclub/meta']
})
