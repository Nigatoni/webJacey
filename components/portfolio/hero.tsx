"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `url("/images/hero-bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Grunge texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Header */}
      <header className="relative z-10">
        <div className="flex items-center justify-between px-8 py-6 md:px-16 lg:px-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-serif font-bold tracking-wide text-foreground"
          >
            Jacey Han
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link 
              href="#contents" 
              className="text-xl md:text-2xl font-serif font-bold tracking-wide text-foreground hover:text-accent-red transition-colors"
            >
              Portfolio
            </Link>
          </motion.nav>
        </div>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[3px] bg-foreground mx-8 md:mx-16 lg:mx-24"
        />
      </header>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-8 md:px-16 lg:px-24">
        {/* Illustration text */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="self-start lg:ml-12 text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-foreground mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Illustration
        </motion.p>

        {/* Portfolio title with marble bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-4xl"
        >
          {/* Black marble bar */}
          <div className="absolute top-1/2 -translate-y-1/2 bg-foreground overflow-hidden left-0 right-0 h-24 lg:h-80 lg:-left-1/4 lg:-right-1/4">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='marble'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.02' numOctaves='3'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23marble)' fill='%23ffffff'/%3E%3C/svg%3E")`,
              }}
            />
            {/* Marble veins effect */}
            <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
              <defs>
                <linearGradient id="vein1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path d="M0,50 Q100,30 200,60 T400,40" stroke="url(#vein1)" strokeWidth="2" fill="none" />
              <path d="M0,80 Q150,100 250,70 T400,90" stroke="url(#vein1)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          
          {/* Portfolio text */}
          <h2 
            className="relative z-10 text-center text-7xl md:text-9xl lg:text-[20rem] leading-none py-8"
            style={{ fontFamily: "var(--font-script)" }}
          >
            <span className="text-background drop-shadow-lg">Port</span>
            <span className="text-accent-red drop-shadow-lg">f</span>
            <span className="text-background drop-shadow-lg">olio</span>
          </h2>
        </motion.div>
      </div>

      {/* Year bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="h-12 md:h-16 bg-foreground flex items-center justify-between px-8 md:px-16 lg:px-24">
          <span className="text-background text-lg md:text-xl font-sans font-medium">2025</span>
          <span className="text-background text-lg md:text-xl font-sans font-medium">2026</span>
        </div>
      </motion.div>
    </section>
  )
}
