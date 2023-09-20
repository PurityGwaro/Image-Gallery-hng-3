/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ]
  },
    images: {
        domains: ['cdn2.thedogapi.com', 'cdn2.thecatapi.com', 'cfa.org', 'images.pexels.com'],
      },
}

module.exports = nextConfig
