import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  // static export for simple nginx hosting on the VPS
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
