import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// Deployed to GitHub Pages as a project site: olinelson.github.io/genki-application/
// If you later move to a custom domain or Vercel/Netlify, drop `base` and update `site`.
export default defineConfig({
  site: 'https://olinelson.github.io',
  base: '/genki-application',
  vite: {
    plugins: [tailwindcss()],
  },
})
