import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

// Simple lang context. The site supports five locales; the active
// one drives the strings in copy.ts and is forwarded to every Anubis
// widget on the page (auth/cabinet/payments/download/reviews) via
// a `lang` attribute kept in sync below.
export type Lang = 'uk' | 'ru' | 'en' | 'de' | 'pl'

interface LangCtx {
    lang: Lang
    setLang: (l: Lang) => void
}

const Ctx = createContext<LangCtx | null>(null)

const SUPPORTED: Lang[] = ['uk', 'ru', 'en', 'de', 'pl']
const STORAGE_KEY = 'aw_lang'

function detect(): Lang {
    if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
        if (saved && SUPPORTED.includes(saved)) return saved
    }
    if (typeof navigator !== 'undefined') {
        const b = navigator.language.slice(0, 2).toLowerCase() as Lang
        if (SUPPORTED.includes(b)) return b
    }
    return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(() => detect())

    const setLang = (l: Lang) => {
        setLangState(l)
        if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, l)
    }

    // Cascade the lang choice to every <anubis-*> widget on the page.
    useEffect(() => {
        document.documentElement.lang = lang
        document.querySelectorAll('anubis-auth, anubis-cabinet, anubis-payments, anubis-download, anubis-reviews')
            .forEach(el => el.setAttribute('lang', lang))
    }, [lang])

    return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}

export function useLang() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error('useLang must be used within <LangProvider>')
    return ctx
}
