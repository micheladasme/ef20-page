import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function resolveBase(): string {
  // Allow explicit override for custom domains or special deployments.
  // Example: VITE_BASE=/
  const explicit = process.env.VITE_BASE
  if (explicit) return explicit

  // Default: GitHub Pages project sites require /<repo>/.
  const repository = process.env.GITHUB_REPOSITORY
  const repoName = repository?.split('/')[1]
  if (process.env.GITHUB_ACTIONS && repoName) return `/${repoName}/`

  return '/'
}

const base = resolveBase()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base,
})
