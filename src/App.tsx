import { Toaster } from '@anubis/ds'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { Reviews } from './sections/Reviews'
import { Download } from './sections/Download'
import { FAQ } from './sections/FAQ'
import { Footer } from './sections/Footer'

export function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Reviews />
                <Download />
                <FAQ />
            </main>
            <Footer />
            <Toaster />
        </>
    )
}
