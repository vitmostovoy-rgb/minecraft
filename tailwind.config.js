/** @type {import('tailwindcss').Config} */
// AnubisWorld design system is the canonical source for palette,
// fontFamily and keyframes — shared with the launcher and every
// Anubis widget. Local config only declares content roots; all
// visual tokens are delegated to the shared preset (no inline mirror).
const anubisPreset = require('@anubis/ds/dist/tailwind-preset.cjs')

module.exports = {
  presets: [anubisPreset],
  content: ['./docs/index.html'],
  plugins: [],
}
