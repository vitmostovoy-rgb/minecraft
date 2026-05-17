import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// GitHub Pages serves the repo from /docs, so Vite emits there.
// `base: './'` keeps asset URLs relative so the site works no matter
// what subpath the upstream/forks ultimately publish under.
export default defineConfig({
    plugins: [react()],
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
})
