/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizeCss: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  reactStrictMode: true
};
export default nextConfig;
