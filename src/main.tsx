import '@anubis/ds/dist/fonts.css'
import '@anubis/ds/dist/variables.css'
import '@anubis/ds/dist/theme.css'
import '@anubis/ds/dist/animations.css'
import './index.css'

import { createRoot } from 'react-dom/client'
import { App } from './App'
import { LangProvider } from './lib/lang'

createRoot(document.getElementById('root')!).render(
    <LangProvider>
        <App />
    </LangProvider>,
)
