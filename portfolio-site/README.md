# DevOps Portfolio Site

This static site highlights the DevOps projects contained in `devops-projects-portfolio`. It is intentionally lightweight so it can be deployed directly to Vercel or any static host.

## Structure

- `index.html` – landing page with hero, featured projects, and delivery timeline.
- `styles.css` – minimalist dark theme using Space Grotesk.
- `script.js` – renders project cards from a curated data set.

## Local development

```bash
cd portfolio-site
python3 -m http.server 4173
# open http://localhost:4173
```

Any static file server works; no build step is required.

## Deploying to Vercel

1. Install the Vercel CLI and log in:
   ```bash
   npm install -g vercel
   vercel login
   ```
2. From the repository root run:
   ```bash
   cd portfolio-site
   vercel --name devops-portfolio --prod
   ```
3. When prompted, set the output directory to `portfolio-site` (or accept Vercel’s detection for a static project).
4. Subsequent deployments only require `vercel --prod` from the same directory.

Because the site is fully static, you can also drag-and-drop the folder directly in the Vercel dashboard if you prefer a UI workflow.
