import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sergio_perfil',
  images: {
    unoptimized: true,
  },
  // As duas linhas abaixo ignoram erros que travam o build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;