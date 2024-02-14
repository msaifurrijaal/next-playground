/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.nike.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "google.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
