/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.unicef.org",
      },
    ],
  },
};

export default nextConfig;
