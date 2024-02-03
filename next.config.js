/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/thunder-group",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
