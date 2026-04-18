"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface ContentCategory {
  title: string
  items: { name: string; href: string }[]
  alignment: "left" | "right"
}

const categories: ContentCategory[] = [
  {
    title: "PERSONAL WORK",
    items: [
      { name: "IP & COMIC PROJECT", href: "/projects/ip-comic" },
      { name: "ILLUSTRATION FANARTS", href: "/projects/fanarts" },
    ],
    alignment: "left",
  },
  {
    title: "MASCOT PROJECT",
    items: [{ name: "SAEKJO", href: "/projects/saekjo" }],
    alignment: "right",
  },
  {
    title: "COMMERCIAL WORKS",
    items: [{ name: "COMMISSIONS", href: "/projects/commissions" }],
    alignment: "right",
  },
  {
    title: "PACKAGING",
    items: [{ name: "SOSRO COMPETITION", href: "/projects/sosro" }],
    alignment: "left",
  },
]

function MarbleBar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-14 md:h-16 bg-foreground overflow-hidden ${className}`}>
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
          <linearGradient id="vein-contents" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path d="M0,30 Q100,20 200,40 T400,25" stroke="url(#vein-contents)" strokeWidth="1.5" fill="none" />
        <path d="M0,50 Q150,60 250,45 T400,55" stroke="url(#vein-contents)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  )
}

function ContentSection({ category, index }: { category: ContentCategory; index: number }) {
  const isLeft = category.alignment === "left"
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative ${isLeft ? "" : "flex flex-col items-end"}`}
    >
      {/* Category title bar */}
      <div className={`flex items-center gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"} w-full max-w-2xl`}>
        <MarbleBar className="flex-1" />
        <div className="bg-foreground h-14 md:h-16 px-6 md:px-8 flex items-center">
          <h3 className="text-lg md:text-xl font-sans font-bold text-background tracking-wider whitespace-nowrap">
            {category.title}
          </h3>
        </div>
      </div>
      
      {/* Items list */}
      <ul className={`mt-4 space-y-2 ${isLeft ? "pl-4 md:pl-8" : "pr-4 md:pr-8 text-right"}`}>
        {category.items.map((item, itemIndex) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + itemIndex * 0.1 + 0.3 }}
          >
            <Link
              href={item.href}
              className="inline-flex items-center gap-2 text-base md:text-lg font-sans font-semibold text-foreground hover:text-accent-red transition-colors group"
            >
              <span className={`w-2 h-2 bg-foreground rounded-full group-hover:bg-accent-red transition-colors ${isLeft ? "" : "order-last"}`} />
              <span className="tracking-wide">{item.name}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Contents() {
  return (
    <section id="contents" className="relative py-16 md:py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Grunge texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl mb-16 md:mb-24"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Contents
        </motion.h2>

        {/* Categories */}
        <div className="space-y-16 md:space-y-24">
          {categories.map((category, index) => (
            <ContentSection key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
