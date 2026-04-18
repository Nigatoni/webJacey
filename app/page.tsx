import { Hero } from "@/components/portfolio/hero"
import { AboutMe } from "@/components/portfolio/about-me"
import { Contents } from "@/components/portfolio/contents"
import { Footer } from "@/components/portfolio/footer"
import { GrungeOverlay } from "@/components/portfolio/grunge-overlay"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <GrungeOverlay />
      <Hero />
      <div className="bg-image-container">
        <AboutMe />
        <Contents />
        <Footer />
      </div>
    </main>
  )
}
