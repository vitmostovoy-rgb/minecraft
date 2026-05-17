import { useT } from '@/lib/copy'

// Hosts the <anubis-download> widget — fetches latest launcher
// release from GitHub and renders the platform cards.
export function Download() {
    const t = useT()
    return (
        <section id="download" className="py-24 border-t border-border">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                        {t.download.title} <span className="gold-text">{t.download.titleAccent}</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">{t.download.desc}</p>
                </div>
                <anubis-download repo="damanoreshkan-beep/anubis-launcher" lang="ru" />
            </div>
        </section>
    )
}
