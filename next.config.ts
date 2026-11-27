import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/archana-sardhara-portfolio" : "",
  assetPrefix: isProd ? "/archana-sardhara-portfolio/" : "",
};

export default nextConfig;
