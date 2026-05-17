// Anubis design system preset — every brand color, spacing, radius,
// typography, and shadcn semantic alias comes from here. We override
// nothing locally; the site is a pure consumer.
const preset = require('@anubis/ds/dist/tailwind-preset.cjs')

module.exports = {
    presets: [preset],
    content: [
        './index.html',
        './src/**/*.{ts,tsx,html}',
    ],
}
