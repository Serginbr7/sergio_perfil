/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Isso gera a pasta 'out' com o site pronto
  images: {
    unoptimized: true, // Necessário para imagens funcionarem no GitHub Pages
  },
};

export default nextConfig;