# Tailwind Migration Notes

- Replaced Bootstrap CSS/SCSS usage with Tailwind CSS.
- Added tailwind.config.cjs and postcss.config.cjs at repo root.
- New Tailwind entry CSS at site/src/styles/tailwind.css and included in BaseLayout.astro.
- Updated home page container classes (`container-xxl`, `bd-gutter`) to Tailwind equivalents with a small mapping in CSS plus grid utilities on the page.
- Removed Bootstrap-specific build scripts from package.json in favor of Astro + Tailwind pipeline.
- The legacy site/src/scss/docs.scss remains as a stub to keep any imports from breaking, but no longer imports Bootstrap.

Refer to migrating-from-bootstrap-to-tailwind.md for class-by-class mappings and future conversions of remaining components.
