/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, { dev }) => {
    // When multiple dev servers/debuggers accidentally run at the same time,
    // webpack's persistent cache can corrupt .next (leading to missing chunks like:
    // "Cannot find module './chunks/vendor-chunks/next.js'").
    // We disable the persistent cache only when explicitly requested.
    if (dev && process.env.NEXT_DISABLE_WEBPACK_CACHE === "1") {
      config.cache = false;
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;


