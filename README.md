# coyoteandquill.com

Public marketing site for **Coyote & Quill** — an AI-native product studio building compliance infrastructure for regulated innovation.

Built with [Astro 5](https://astro.build). Fully static — no SSR, no backend, no framework runtime. Hand-written CSS, one vanilla JS file. Deployed on Vercel.

## Develop

```bash
pnpm install      # First-time setup
pnpm dev          # Dev server at http://localhost:4321
pnpm build        # Static build → dist/
pnpm preview      # Preview the production build
```

## Content

Field Notes (Mon/Wed/Fri) live in `src/content/field-notes/`:

```bash
pnpm new-post "Title of the post"   # Scaffold a draft with today's date
```

Set `draft: false` to publish; push to deploy.

## Contributing

Issue → branch → PR → green CI. See [CLAUDE.md](CLAUDE.md) for the full operating rules, brand tokens, and voice guide.

---
Copyright (c) 2026 Glen Lewis. All Rights Reserved. See [LICENSE](LICENSE).
