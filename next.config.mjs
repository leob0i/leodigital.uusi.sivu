/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/yllapito',
        destination: '/nettisivut',
        permanent: true,
      },
      {
        source: '/yllapito/:path*',
        destination: '/nettisivut',
        permanent: true,
      },
      {
        source: '/starter',
        destination: '/nettisivut',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
