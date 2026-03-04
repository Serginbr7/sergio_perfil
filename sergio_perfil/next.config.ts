import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sergio_perfil',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;