# Apna Ghar Jankari

A React + Vite property website for West Delhi listings, including Home, Properties, About, Contact, and property detail pages.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal to preview the site locally.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is a Single Page Application (SPA) built with Vite and React Router.

For hosting on Netlify, Vercel, or any static hosting provider, make sure the server redirects all routes to `index.html` so client-side routing continues to work.

### Netlify

The repository includes a `public/_redirects` file to send all requests to `index.html`.

### Vercel

Vercel supports SPAs automatically for front-end frameworks. Just deploy the repository and Vercel will handle routing.

### GitHub Pages

A GitHub Actions workflow has been added at `.github/workflows/deploy-pages.yml` to build the site and deploy the `dist/` output to GitHub Pages on pushes to `main`.

> Note: Because this repository is private and GitHub Pages is not yet configured, the workflow uses a repository secret named `PAGES_DEPLOY_TOKEN`.
>
> Create a personal access token with `repo` and `pages:write` permissions, then add it to the repository secrets under `PAGES_DEPLOY_TOKEN`.
>
When the workflow completes, your site will be published at `https://apnagharjankari-hub.github.io/apnagharjankari/` unless a custom domain is configured.

## Project structure

- `src/App.jsx` — app shell and route configuration
- `src/main.jsx` — app entry point with `BrowserRouter`
- `src/components/` — reusable UI components
- `src/pages/` — page views for website routes
- `src/Data/properties.js` — sample property listings
- `src/App.css` — core site styles

## Notes

- `react-router-dom` is used for page navigation.
- A fallback 404 page is included for unknown routes.
