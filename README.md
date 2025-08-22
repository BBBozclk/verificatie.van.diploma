# Verificate One Pager

A minimal, responsive one-page static site you can deploy to Render and update from GitHub.

## Tech
- Static HTML, CSS, and vanilla JS
- Accessible and responsive by default
- Infra-as-code via `render.yaml`

## Local Development
```bash
# serve with any static server
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## Deploy on Render
Two options:
1) Use the included `render.yaml` (recommended)
   - In the Render dashboard, create a New+ > Blueprint and point to your GitHub repo URL.
   - Render will provision a Static Site using this config and auto-deploy on pushes.
2) Create a new Static Site manually
   - Build Command: (leave empty)
   - Publish Directory: `.`

## Replace Content
- Update `index.html` sections
- Replace logos in `assets/` and update `alt` text
- Update `og:image` and icons in `assets/`

## SEO & Analytics
- Edit meta tags in `index.html`
- Add your analytics in `app.js`

## License
MIT 