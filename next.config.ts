import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Cache le badge "N" Next.js (outils de développement uniquement)
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
    ],
  },
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/categories",
        destination: "/demarches",
        permanent: true,
      },
      {
        source: "/categories/:slug",
        destination: "/demarches",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
