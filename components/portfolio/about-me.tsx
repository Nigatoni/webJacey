"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutMe() {
  return (
    <section className="relative py-16 md:py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Grunge texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative background elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-2/3 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <path d="M100,0 L100,400" stroke="currentColor" strokeWidth="4" />
          <path d="M50,50 L150,50 L150,150 L50,150 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M60,200 L140,200 L140,350 L60,350 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M80,100 L120,100" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl mb-12 md:mb-16"
          style={{ fontFamily: "var(--font-script)" }}
        >
          <span className="text-foreground">About </span>
          <span className="text-accent-red">Me</span>
        </motion.h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden border-4 border-foreground/10 shadow-2xl">
              <Image
                src="/images/about-me.png"
                alt="Jacey Han - Illustrator"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg leading-relaxed text-foreground font-serif text-justify">
              {"I'm Jacey, an illustrator specializing in semi-realism anime. My work often leans toward darker tones, focusing on character-driven pieces that explore emotion and subtle expression. I enjoy experimenting with different styles and approaches, allowing my work to stay adaptable and evolving."}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground font-serif text-justify">
              Drawing has been a passion of mine since childhood, and through it, I express ideas, moods, and stories in a way that feels personal and authentic.
            </p>

            {/* Apps section */}
             <div className="pt-8">
              <h3 className="text-xl md:text-2xl font-serif italic text-foreground mb-4">Apps</h3>
              <div className="flex gap-4">
                {/* App image 1 */}
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/app-image1.png"
                    alt="App 1"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* App image 2 */}
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/app-image2.png"
                    alt="App 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contacts */}
            <div className="pt-8">
              <h3 className="text-xl md:text-2xl font-serif italic text-foreground mb-4">Contacts</h3>
              <div className="flex gap-4">
                {/* App image 1 */}
                <div className="w-12 h-12 relative">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent-red transition-colors"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
                {/* App image 2 */}
                <a
                  href="mailto:jacey@example.com"
                  className="text-foreground hover:text-accent-red transition-colors"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
