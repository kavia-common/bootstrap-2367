# Tailwind Setup for bootstrap-2367

This site uses Tailwind via PostCSS. Ensure the following devDependencies are installed in the bootstrap-2367 package:
- tailwindcss
- autoprefixer

Run:
- npm install --save-dev tailwindcss autoprefixer

Build/serve:
- npm run docs-serve (dev server on port 9001)
- npm run docs-build (builds site/ and copies to _site/)
