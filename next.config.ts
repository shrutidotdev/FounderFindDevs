import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "o6bmt406v9.ufs.sh",
      },
      {
        hostname: "utfs.io",
        port: "",
        protocol: "https",
      }
    ],
  },
};


export default nextConfig;
