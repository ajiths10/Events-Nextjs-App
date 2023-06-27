/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/webp"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    SERVER_ENVIRONMENT: process.env.SERVER_ENVIRONMENT,
    REACT_APP_GOOGLE_API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
  },
  // HEADER FUNCTION WILL DEFINE THE ROUTE CONTENT TYPE
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
      {
        source: "/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
