const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apitrivsion.prismcloudhosting.com",
      },
      {
        protocol: "https",
        hostname: "trivision-images.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
    ],
    domains: [
      "apitrivsion.prismcloudhosting.com",
      "trivision-images.s3.amazonaws.com",
      "example.com",
      "dummyimage.com",
    ],
  },
};

module.exports = nextConfig;
