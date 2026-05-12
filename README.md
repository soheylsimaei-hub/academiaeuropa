# Academia Europa

Institutional website for **Academia Europa** — a European institution for structured postgraduate professional education.

- **Production domain:** [academiaeuropa.com](https://academiaeuropa.com)
- **Stack:** Astro 5 · Tailwind v4 · MDX · GitHub Pages
- **Operating entity:** Solex Education Unipessoal LDA, Portugal

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # preview the production build
```

## Deployment

This repo deploys to **GitHub Pages** via `.github/workflows/deploy.yml` on every push to `main`.

### One-time setup

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. In **Settings → Pages → Custom domain**, enter `academiaeuropa.com`. Enforce HTTPS.
4. DNS at your registrar:
   - `A` apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `<org>.github.io`
5. Point `academiaeuropa.org` to `academiaeuropa.com` as a 301 redirect at your DNS/registrar (so visitors to the `.org` land on the `.com`).

The `public/CNAME` file ensures the custom domain persists across deploys.

## Content structure

```
src/
  layouts/Base.astro       — global shell, SEO, schema.org
  components/              — Nav, Footer, Section, PageHero
  pages/
    index.astro            — homepage
    about.astro            — institutional overview
    about/founder.astro    — Dr. Soheyl Simaei
    educational-philosophy.astro
    academic-standards.astro
    academies/             — academies overview + VAI + Veterinary Longevity
    faculty.astro
    partnerships.astro
    insights/              — editorial section
    contact.astro
  styles/global.css        — design tokens (Tailwind v4 @theme)
```

## Design system

- **Palette:** Deep institutional navy, warm ivory, soft platinum, muted champagne accent, charcoal text on off-white paper.
- **Typography:** Cormorant Garamond (serif display) · Inter (sans body).
- **Tone:** European, institutional, restrained, evidence-aware. See repo docs for full voice guide.

## Sister site

VAI — Veterinary Academy International is the first specialised academy of Academia Europa, with its own site at `vai.vet`.

## Notes

- Do not link to or reference Noble Veterinary Clinic on this site.
- Do not claim accreditation that has not been formally granted.
- Founder bio uses the institutional phrasing only — see `src/pages/about/founder.astro`.
