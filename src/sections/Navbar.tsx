import { useState } from 'react'
import { Button, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@anubis/ds'
import { Globe, Menu as MenuIcon } from 'lucide-react'
import { useLang, type Lang } from '@/lib/lang'
import { useT } from '@/lib/copy'

const LANGS: Array<{ code: Lang; flag: string; name: string }> = [
    { code: 'uk', flag: '🇺🇦', name: 'Українська' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'pl', flag: '🇵🇱', name: 'Polski' },
]

export function Navbar() {
    const t = useT()
    const { lang, setLang } = useLang()
    const [mobileOpen, setMobileOpen] = useState(false)
    const current = LANGS.find(l => l.code === lang)!

    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b border-border">
            <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 font-bold">
                    <img src="./img/logo.jpg" alt="" className="w-7 h-7 rounded-md" />
                    <span>Anubis<span className="text-primary">World</span></span>
                </a>

                <nav className="hidden md:flex items-center gap-1">
                    <a href="#features"  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">{t.nav.features}</a>
                    <a href="#reviews"   className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">{t.nav.reviews}</a>
                    <a href="#faq"       className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">{t.nav.faq}</a>
                    <a href="#download"  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">{t.nav.download}</a>
                </nav>

                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="gap-1.5">
                                <Globe className="w-4 h-4" /> {current.flag} <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {LANGS.map(l => (
                                <DropdownMenuItem key={l.code} onClick={() => setLang(l.code)}>
                                    <span className="text-base">{l.flag}</span> {l.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button asChild size="sm" variant="brand" className="hidden sm:inline-flex">
                        <a href="#download">{t.nav.download}</a>
                    </Button>

                    <button
                        type="button"
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileOpen(o => !o)}
                        aria-label="Toggle menu"
                    >
                        <MenuIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <nav className="px-4 py-3 flex flex-col gap-2">
                        <a href="#features"  className="text-sm" onClick={() => setMobileOpen(false)}>{t.nav.features}</a>
                        <a href="#reviews"   className="text-sm" onClick={() => setMobileOpen(false)}>{t.nav.reviews}</a>
                        <a href="#faq"       className="text-sm" onClick={() => setMobileOpen(false)}>{t.nav.faq}</a>
                        <a href="#download"  className="text-sm" onClick={() => setMobileOpen(false)}>{t.nav.download}</a>
                    </nav>
                </div>
            )}
        </header>
    )
}
