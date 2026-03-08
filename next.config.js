/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/demo/homestyling",
        destination: "/demo/home-styling",
        permanent: true,
      },
      {
        source: "/demo/dvhomestyling",
        destination: "/demo/home-styling",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;