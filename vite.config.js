import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE is the repo/path segment (e.g. "IdeaLab") when serving from a
// sub-path such as GitHub Pages; empty serves from the domain root.
const segment = (process.env.VITE_BASE || '').replace(/^\/+|\/+$/g, '')

// https://vite.dev/config/
export default defineConfig({
  base: segment ? `/${segment}/` : '/',
  plugins: [react()],
})
