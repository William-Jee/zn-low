/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/name',
        destination: '/',
        permanent: true
      }
    ]
  },
  transpilePackages: ["@splash/ui", '@splash/database'],
};
