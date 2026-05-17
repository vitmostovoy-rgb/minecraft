import { Button } from '@anubis/ds'
import { useT } from '@/lib/copy'

export function Hero() {
    const t = useT()
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" aria-hidden />
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 bg-primary pointer-events-none" aria-hidden />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-accent-cyan pointer-events-none" aria-hidden />

            <div className="relative max-w-6xl mx-auto px-4 py-24 sm:py-32 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">{t.hero.eyebrow}</p>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6">
                        {t.hero.title}<span className="gold-text">{t.hero.titleAccent}</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">{t.hero.desc}</p>

                    <div className="flex flex-wrap gap-3">
                        <Button asChild variant="brand" size="lg">
                            <a href="#download">{t.hero.ctaPrimary}</a>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <a href="https://discord.gg/anubisworld" target="_blank" rel="noopener noreferrer">{t.hero.ctaSecondary}</a>
                        </Button>
                    </div>
                </div>

                <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
                    <div className="absolute inset-0 rounded-3xl glass overflow-hidden">
                        <img src="./img/anubis.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}
