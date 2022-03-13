const nextConfig = {
  env: {
    DB_URL: process.env.DB_URL,
    CI: process.env.CI,
  },
};

module.exports = nextConfig;
