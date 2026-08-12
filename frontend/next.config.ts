import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const backendUrl = (
  process.env.BACKEND_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000"
).replace(/\/+$/, "");

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "media-src 'self' blob: data: https:",
  `connect-src 'self' https: ${isProduction ? "" : "ws: wss:"}`.trim(),
  `script-src 'self' 'unsafe-inline' https: ${isProduction ? "" : "'unsafe-eval'"}`.trim(),
  "style-src 'self' 'unsafe-inline' https:",
  "frame-src 'self' https:",
].join("; ");

const permissionsPolicy = [
  "accelerometer=()",
  "autoplay=(self)",
  "camera=()",
  "display-capture=()",
  "fullscreen=(self)",
  "geolocation=()",
  "gyroscope=()",
  "microphone=()",
  "payment=()",
  "usb=()",
].join(", ");

const nextConfig: NextConfig = {
  // Django's admin URL patterns require their trailing slashes. Let the
  // proxied application handle slash canonicalisation instead of Next.js.
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
    ],
  },
  async headers() {
    const securityHeaders = [
      {
        key: "Content-Security-Policy",
        value: contentSecurityPolicy,
      },
      {
        key: "Permissions-Policy",
        value: permissionsPolicy,
      },
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      ...(isProduction
        ? [
            {
              key: "Strict-Transport-Security",
              value: "max-age=31536000; includeSubDomains; preload",
            },
          ]
        : []),
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/admin/",
          destination: `${backendUrl}/admin/`,
        },
        {
          source: "/admin/:path+/",
          destination: `${backendUrl}/admin/:path*/`,
        },
        {
          source: "/admin/:path*",
          destination: `${backendUrl}/admin/:path*`,
        },
        {
          source: "/static/:path*",
          destination: `${backendUrl}/static/:path*`,
        },
        {
          source: "/media/:path*",
          destination: `${backendUrl}/media/:path*`,
        },
        {
          source: "/ckeditor5/:path*",
          destination: `${backendUrl}/ckeditor5/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
