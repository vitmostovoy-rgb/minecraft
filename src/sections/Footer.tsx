import { useT } from '@/lib/copy'

export function Footer() {
    const t = useT()
    return (
        <footer className="border-t border-border py-12 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                    <img src="./img/logo.jpg" alt="" className="w-8 h-8 rounded-md" />
                    <div>
                        <p className="font-bold text-foreground">AnubisWorld</p>
                        <p>HiTech 1.12.2 · 94.100.18.18:50273</p>
                    </div>
                </div>
                <nav className="flex gap-4">
                    <a href="https://discord.gg/anubisworld" target="_blank" rel="noopener noreferrer">Discord</a>
                    <a href="https://t.me/anubisworld"      target="_blank" rel="noopener noreferrer">Telegram</a>
                    <a href="https://youtube.com/@anubisworld" target="_blank" rel="noopener noreferrer">YouTube</a>
                </nav>
            </div>
        </footer>
    )
}
