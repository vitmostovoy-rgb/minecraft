import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@anubis/ds'
import { useT } from '@/lib/copy'

export function FAQ() {
    const t = useT()
    return (
        <section id="faq" className="py-24 border-t border-border">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
                    {t.faq.title} <span className="gold-text">{t.faq.titleAccent}</span>
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                    {t.faq.items.map((it, i) => (
                        <AccordionItem key={i} value={`q${i}`} className="rounded-lg border border-border bg-card/40 px-4">
                            <AccordionTrigger className="text-base">{it.q}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
