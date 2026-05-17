import { useT } from '@/lib/copy'

// Hosts the existing <anubis-reviews> web component. The widget reads
// active rows from public.reviews in Supabase and renders the same
// glass-card grid that lived inline in the legacy index.html.
export function Reviews() {
    const t = useT()
    return (
        <section id="reviews" className="py-24 border-t border-border bg-grid">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16">
                    {t.reviews.title} <span className="gold-text">{t.reviews.titleAccent}</span>
                </h2>
                <anubis-reviews
                    supabase-url="https://ckfinpywlpllvhvzagnw.supabase.co"
                    supabase-key="sb_publishable_Bl6csDnCJ5LIJsIsCafMYQ_5zwLTgvR"
                    lang="ru"
                    limit="6"
                />
            </div>
        </section>
    )
}

