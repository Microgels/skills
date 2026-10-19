/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['172.20.10.3'],
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;