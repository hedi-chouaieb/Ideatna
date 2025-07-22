/** @type {import('next').NextConfig} */

const nextConfig = {
  // Enable Turbopack for development and production
  experimental: {
    // Optimized bundling for artisan marketplace
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@headlessui/react',
      'recharts',
      'date-fns',
    ],
    // Enable modern JavaScript features
    esmExternals: true,
    // Performance optimizations
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  turbopack: {
    // Custom file processing rules for Turbopack
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    // Path aliases for Turbopack
    resolveAlias: {
      '@': './src',
      '@/components': './src/components',
      '@/lib': './src/lib',
      '@/hooks': './src/hooks',
      '@/types': './src/lib/types',
      '@/utils': './src/lib/utils',
      '@/stores': './src/lib/stores',
      '@/styles': './src/styles',
      '@/data': './src/data',
    },
  },

  // Image optimization for artisan photos and products
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'your-cdn-domain.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    unoptimized: false,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',

    styledJsx: true,
  },
  reactStrictMode: true,
  output: 'standalone',
  compress: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/shop',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/profile',
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        { source: '/artisan/:slug', destination: '/artisans/:slug' },
        { source: '/craft/:category', destination: '/products/category/:category' },
      ],
      afterFiles: [
        {
          source: '/api/v1/:path*',
          destination: process.env.NODE_ENV === 'development'
            ? 'http://localhost:8000/api/v1/:path*'
            : 'https://your-api-domain.com/api/v1/:path*',
        },
      ],
      fallback: [
        { source: '/:path*', destination: '/404' },
      ],
    };
  },

  // Remove the webpack config, as Turbopack does not use it
  // webpack: (config: WebpackConfig, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // ...existing code...
  //   return config;
  // },

  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  poweredByHeader: false,

  generateBuildId: async () => {
    return `${Date.now()}`;
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src', 'pages', 'components', 'lib', 'hooks'],
  },

  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.CDN_URL : '',

  trailingSlash: false,

  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 2,
    },
  }),

  ...(process.env.NODE_ENV === 'production' && {
    modularizeImports: {
      'lucide-react': {
        transform: 'lucide-react/dist/esm/icons/{{member}}',
      },
      '@headlessui/react': {
        transform: '@headlessui/react/{{member}}',
      },
    },
  }),
};

module.exports = nextConfig;
