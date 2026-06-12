import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "firmafamilia.cl" }],
        destination: "https://www.firmafamilia.cl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
