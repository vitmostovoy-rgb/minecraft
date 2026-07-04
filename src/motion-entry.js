// Self-hosted Motion bundle for the landing site.
// Re-exports the primitives the site uses so esbuild tree-shakes the
// rest. We use the full `motion` build (not motion/mini) because the
// hero relies on the library's own scroll(), inView() and stagger()
// — those handle scroll edge-cases, reduced-motion and cleanup that we
// must not reimplement by hand. Built into docs/vendor/motion.min.js
// via `npm run build:motion`. No runtime CDN (see Phase 0 rationale).
export { animate, scroll, inView, stagger } from 'motion'
