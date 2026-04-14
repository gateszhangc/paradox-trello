# Paradox Trello

Keyword-focused landing site for Roblox Paradox players who need the official Trello board, Discord, and game entry in one place.

Live target: `https://paradox-trello.lol/en`

## Development

Install dependencies:

```bash
npm install
```

Run the standard dev server:

```bash
npm run dev
```

Runtime profiles:

- `npm run dev`: local development on `http://localhost:3000`
- `npm run dev:playwright`: isolated browser-test runtime on `http://localhost:3002`
- `npm run build`: production build written to `.next/build`
- `npm run start`: serves the production build

## Testing

Preferred commands:

```bash
npm run test:backend
vitest run
npx playwright test
```

The browser suite covers:

- `/` redirecting to `/en`
- Paradox Trello hero and CTA links
- hydration without missing Next chunks
- landing-first SEO behavior (`/en` indexable, legacy routes `noindex`)

## Deployment

Explicit release mapping:

- GitHub repository: `gateszhangc/paradox-trello`
- Git branch: `main`
- Dokploy project: `n/a`
- Image repository: `registry.144.91.77.245.sslip.io/paradox-trello`
- K8s manifests: `deploy/k8s/overlays/prod`
- Argo CD application: `paradox-trello`

See [docs/paradox-trello-argocd-deploy.md](docs/paradox-trello-argocd-deploy.md) for the current production route and smoke-test checklist.

## License

See [LICENSE](LICENSE).
