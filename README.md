# Money in Check — Next.js clone

Xerox clone of [moneyincheck.org](https://moneyincheck.org/) running on Next.js.

## Structure

```
moneyincheck-nextjs/
├── app/
│   ├── layout.jsx      # Meta, CSS, scripts
│   ├── page.jsx        # Scroll-to-top button
│   └── globals.css
├── public/
│   ├── assets/         # Original JS + CSS (site engine + motion)
│   ├── fonts/          # PPEditorialOld, Playfair, LiuJianMaoCao
│   ├── img/            # Hero, book, author, bills
│   ├── video/          # Loader, doodles, footer strip
│   ├── vendor/
│   │   └── umami.js    # Privacy analytics (optional)
│   ├── favicon*.png / .svg
│   └── og-image.png
├── next.config.js
└── package.json
```

## What came from where

| Source | Needed? | Now lives in |
|---|---|---|
| `moneyincheck.org/assets` | Yes — UI + motion engine | `public/assets/` |
| `moneyincheck.org/fonts` | Yes | `public/fonts/` |
| `moneyincheck.org/img` | Yes | `public/img/` |
| `moneyincheck.org` icons / og | Yes | `public/` |
| Videos (downloaded) | Yes — loader + doodles | `public/video/` |
| `umami.cloudstudio.es` | Optional — analytics only | `public/vendor/umami.js` |

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000
