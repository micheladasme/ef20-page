# AGENTS.md

## Runtime + Tooling

- Use `bun` for local workflows (`bun install`, `bun run ...`).
- Target Node.js is `20.18.0`.
- Repo is a single Vite app (not a monorepo).

## Commands That Matter

```bash
bun run dev      # Vite dev server
bun run build    # TypeScript check + production build (tsc && vite build)
bun run lint     # ESLint, warnings fail the command
bun run preview  # Serve built dist locally
bun run deploy   # Publish dist to GitHub Pages
```

## Deploy Quirk

- `package.json` has `predeploy: npm run build`; so `bun run deploy` triggers an npm-based predeploy step unless scripts are changed.
- Vite `base` is `/` in `vite.config.ts`; if GitHub Pages is served under `/ef20-page`, asset paths can break unless `base` is adjusted.

## Code Entry Points

- App boot: `src/main.tsx` -> `src/App.tsx`.
- `src/App.tsx` only renders `src/Landing.tsx`.
- Landing sections are composed from `src/layouts/*.tsx` (Header, Banner, About, Teacher, Mentoring, Videos, Contact, Social, Donation, Footer).

## Styling + UI Conventions

- Tailwind + shadcn setup uses alias `@/*` (`tsconfig.json`, `vite.config.ts`, `components.json`).
- Use `cn()` from `src/lib/utils.ts` for class merging (`clsx` + `tailwind-merge`).
- Theme CSS variables live in `src/index.css`; body is explicitly forced to black background there.

## Testing / CI Reality

- No test framework config or test files are present.
- No CI workflows exist under `.github/workflows`.
