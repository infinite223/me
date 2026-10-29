import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Static export (with the /me base path) is only for static hosting;
// Vercel serves the app from the root with its own image optimization.
const isVercel = Boolean(process.env.VERCEL);

const nextConfig: NextConfig = isVercel
  ? {}
  : {
      output: "export",
      images: {
        unoptimized: true,
      },
      basePath: "/me",
    };

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
