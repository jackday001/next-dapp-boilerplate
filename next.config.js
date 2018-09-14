const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        resourceQuery: /raw-lingui/,
        type: 'javascript/auto',
      },
    ]

    return config
  },
  experimental: { esmExternals: true },
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: [],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/swap',
      //   permanent: true,
      // },
    ]
  },
  async rewrites() {
    return [
    ]
  },
}

// ensure that your source maps include changes from all other Webpack plugins
module.exports = withPWA(withBundleAnalyzer(nextConfig))

// Don't delete this console log, useful to see the config in Vercel deployments
// console.log('next.config.js', JSON.stringify(module.exports, null, 2))
