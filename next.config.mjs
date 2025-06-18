/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/indabax" : "",
  assetPrefix: isProd ? "/indabax/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

 