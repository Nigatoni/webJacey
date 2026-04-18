"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

interface ProjectLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function ProjectLayout({ title, subtitle, children }: ProjectLayoutProps) {
  return (
    <main className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/bgimg2.png')",
        }}
      />
      {/* Grunge texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="relative z-10 px-8 py-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          <Link 
            href="/#contents"
            className="flex items-center gap-2 text-foreground hover:text-accent-red transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif font-bold tracking-wide">Back</span>
          </Link>
          <Link 
            href="/"
            className="text-xl md:text-2xl font-serif font-bold tracking-wide text-foreground hover:text-accent-red transition-colors"
          >
            Jacey Han
          </Link>
        </div>
        <div className="h-[3px] bg-foreground mt-4" />
      </header>

      {/* Title section */}
      <section className="relative z-10 px-8 md:px-16 lg:px-24 pt-8 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl mb-4"
          style={{ fontFamily: "var(--font-script)" }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block origin-left"
          >
            <MarbleBar>
              <span className="text-background font-sans font-bold tracking-wider text-lg md:text-xl px-6 py-3">
                {subtitle}
              </span>
            </MarbleBar>
          </motion.div>
        )}
      </section>

      {/* Content */}
      <section className="relative z-10 px-8 md:px-16 lg:px-24 pb-24">
        {children}
      </section>
    </main>
  )
}

export function MarbleBar({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative bg-foreground overflow-hidden ${className}`}>
      {/* Marble texture */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='marble'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.03' numOctaves='3'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='15'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23marble)' fill='%23ffffff'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Marble veins */}
      <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
        <defs>
          <linearGradient id="vein-bar" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path d="M0,30 Q100,20 200,40 T400,25" stroke="url(#vein-bar)" strokeWidth="1.5" fill="none" />
        <path d="M0,50 Q150,60 250,45 T400,55" stroke="url(#vein-bar)" strokeWidth="1" fill="none" />
      </svg>
      <div className="relative z-10 flex items-center">{children}</div>
    </div>
  )
}

interface ProjectImageProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function ProjectImage({ src, alt, caption, className = "" }: ProjectImageProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>
      {caption && (
        <figcaption className="text-center mt-4 text-lg font-serif text-foreground">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}

interface ProjectSectionProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function ProjectSection({ title, children, className = "" }: ProjectSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${className}`}
    >
      {title && (
        <div className="mb-8">
          <MarbleBar className="inline-block">
            <span className="text-background font-sans font-bold tracking-wider text-base md:text-lg px-6 py-3">
              {title}
            </span>
          </MarbleBar>
        </div>
      )}
      {children}
    </motion.div>
  )
}

interface ProjectDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function ProjectDescription({ children, className = "" }: ProjectDescriptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-base md:text-lg font-serif leading-relaxed text-foreground max-w-2xl text-justify ${className}`}
    >
      {children}
    </motion.div>
  )
}
