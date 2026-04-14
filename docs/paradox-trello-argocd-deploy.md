# Paradox Trello Argo CD Deploy Mapping

Current explicit deployment mapping for this workspace:

- GitHub repository: `gateszhangc/paradox-trello`
- Git branch: `main`
- Dokploy project: `n/a`  
  This site is prepared for Argo CD, not Dokploy.
- Image repository: `registry.144.91.77.245.sslip.io/paradox-trello:<git-sha>`
- K8s manifest path: `deploy/k8s/overlays/prod`
- Argo CD application: `paradox-trello`
- Primary domain: `paradox-trello.lol`
- Preview domain: `paradox-trello.144.91.77.245.sslip.io`

Route summary:

`gateszhangc/paradox-trello -> main -> registry.144.91.77.245.sslip.io/paradox-trello:<git-sha> -> deploy/k8s/overlays/prod -> paradox-trello`

## What is wired

- Hostnames: `paradox-trello.lol`, `www.paradox-trello.lol`
- Preview hostname: `paradox-trello.144.91.77.245.sslip.io`
- TLS issuer annotation: `letsencrypt-prod`
- Ingress class: `nginx`
- Live DNS target A records:
  - `144.91.73.228`
  - `144.91.77.245`
  - `144.91.78.201`
- Public env:
  - `NEXT_PUBLIC_WEB_URL=https://paradox-trello.lol`
  - `NEXT_PUBLIC_PROJECT_NAME=paradox-trello`
  - `NEXT_PUBLIC_CLARITY_PROJECT_ID=wbhm990q09`
  - `NEXT_PUBLIC_AUTH_DISABLED=true`
- Landing-first indexing:
  - `/en` is the only indexable homepage
  - sitemap only emits `/en`
  - non-home public routes default to `noindex, follow`

## Release Checklist

1. Push `main` to `gateszhangc/paradox-trello`
2. Ensure GitHub Actions pushes `registry.144.91.77.245.sslip.io/paradox-trello:<git-sha>`
3. Apply `deploy/argocd/paradox-trello-application.yaml`
4. Verify Argo CD reaches `Healthy` and `Synced`
5. Confirm:
   - `https://paradox-trello.lol/en`
   - `https://paradox-trello.lol/robots.txt`
   - `https://paradox-trello.lol/sitemap.xml`
   - `https://paradox-trello.lol/brand/paradox-trello/paradox-trello-hero.png`
