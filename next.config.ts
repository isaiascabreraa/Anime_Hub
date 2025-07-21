import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's4.anilist.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com', // Alternativa para miniaturas
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com', // Miniaturas de YouTube
      },
    ],
  },
  
};

export default nextConfig;