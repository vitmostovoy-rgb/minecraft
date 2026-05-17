import { Card, CardHeader, CardTitle, CardDescription } from '@anubis/ds'
import { useT } from '@/lib/copy'

export function Features() {
    const t = useT()
    return (
        <section id="features" className="py-24 border-t border-border">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16">
                    {t.features.title} <span className="gold-text">{t.features.titleAccent}</span>
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.features.items.map((it, i) => (
                        <Card key={i} className="bg-card/40 backdrop-blur-md border-border/40 hover:-translate-y-1 hover:border-primary/50 transition">
                            <CardHeader>
                                <div className="text-3xl mb-2">{it.icon}</div>
                                <CardTitle className="text-lg">{it.title}</CardTitle>
                                <CardDescription>{it.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
