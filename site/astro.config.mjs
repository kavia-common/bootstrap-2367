import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: './src',
  // Updated to align with container readiness probe expecting port 3000
  server: { port: 3000 },
  vite: {
    resolve: {
      alias: {
        '@layouts': '/site/src/layouts',
        '@components': '/site/src/components',
      }
    }
  }
});
