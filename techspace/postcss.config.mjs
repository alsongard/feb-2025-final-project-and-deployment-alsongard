const config = {
  plugins: ["@tailwindcss/postcss"],
  eslint: {
    // Dangerously allow production builds to successfully complete even if your project has eslint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if your project has type errors.
    ignoreBuildErrors: true,
  }
};

export default config;
