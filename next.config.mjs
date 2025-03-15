/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "www.taj.studio", // Add this line to allow images from www.taj.studio
      },
    ],
  },
};

export default nextConfig;
