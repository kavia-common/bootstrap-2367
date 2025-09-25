import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: './src',
  server: { port: 9001 },
  vite: {
    resolve: {
      alias: {
        '@layouts': '/site/src/layouts',
        '@components': '/site/src/components',
      }
    }
  }
});
