# genki-application

An interactive, one-page job application for the **Lead Web Engineer** role at
[Genki](https://genki.world) — built by Oli Nelson in Astro, with Claude Code.

It's the response to the posting's invitation to *"show us what you've got"*: a
scrollytelling page that maps Genki's five core requirements to real proof points,
shows the prompts behind its own creation, and demonstrates the exact stack and
AI-agentic workflow the role is hiring for.

## Stack

- **Astro 5** — static output, zero UI framework
- Custom CSS design system (Fraunces + Hanken Grotesk + JetBrains Mono)
- ~5kb of vanilla JS (reveal-on-scroll + accessible accordion)

## Develop

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # static output to dist/
bun run preview
```

## Deploy

Static — host anywhere.

- **Vercel / Netlify:** import the repo (or drag `dist/`). Cleanest URL, no config.
- **GitHub Pages:** `.github/workflows/deploy.yml` is included. For a *project* page,
  set `base: '/genki-application'` in `astro.config.mjs` and update `site`.

Update `site` in `astro.config.mjs` to the final URL.
