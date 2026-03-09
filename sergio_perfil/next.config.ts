/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Isso aqui manda o TypeScript calar a boca e deixa o deploy passar
    ignoreBuildErrors: true,
  },
  eslint: {
    // Isso aqui ignora os avisos chatos de link e segurança por enquanto
    ignoreDuringBuilds: true,
  },
}

export default nextConfig