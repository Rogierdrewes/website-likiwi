/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Placeholder images (ontwikkeling)
      { protocol: 'https', hostname: 'picsum.photos' },
      // Instagram CDN domeinen
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'https', hostname: '**.fbcdn.net' },
    ],
  },
}

export default nextConfig
