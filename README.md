# JV Consultancies Website

> **Grow By Design** — official website for [JV Consultancies](https://www.jvconsultancies.com)

## File Structure

```
jv-consultancies-website3/
├── index.html            ← Main page
├── .nojekyll             ← Required for GitHub Pages (do not delete)
├── README.md
└── assets/
    ├── css/
    │   └── style.css     ← All styles (black & gold theme)
    └── js/
        └── main.js       ← Navigation, animations, form handling
```

## Deploying to GitHub Pages

1. **Push** all files to the `main` branch of this repository.
2. Go to **Settings → Pages** in the GitHub repository.
3. Under **Source**, select **Deploy from a branch**.
4. Choose **Branch: `main`** and **Folder: `/ (root)`**, then click **Save**.
5. Your site will be live at:
   ```
   https://jv-consulting-solutions.github.io/jv-consultancies-website3/
   ```
   *(GitHub may take 1–3 minutes to build on first deploy.)*

> **Important:** The `.nojekyll` file at the repo root tells GitHub Pages to skip Jekyll processing. This ensures `assets/css/style.css` and `assets/js/main.js` are served correctly. Do **not** delete it.

## Local Preview

No build tools needed. Simply open `index.html` in any browser:

```bash
# Option 1 — direct file open
open index.html

# Option 2 — with Python local server (recommended)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Customisation

| What to change | Where |
|---|---|
| Colours / fonts | `assets/css/style.css` — `:root` variables at the top |
| Content / copy | `index.html` |
| Phone / website links | `index.html` — Contact section |
| JS behaviour | `assets/js/main.js` |

## Tech Stack

- Plain HTML5, CSS3, Vanilla JS — **no frameworks, no build step**
- Fonts: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts CDN
- Fully responsive (mobile / tablet / desktop)
- Accessible (ARIA labels, focus styles, `prefers-reduced-motion` support)
