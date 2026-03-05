"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { ParticleField } from "./particle-field"

const AFFILIATE_LINK = "https://to.wendiro.com/u?k=24c3cf9a5dde4dd896352d1314e9aacd&via=26561"

function GlitchText({ children, className }: { children: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      {/* Main text */}
      <span className="relative z-10">{children}</span>
      {/* Red glitch layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 text-neon-red opacity-80 animate-glitch-red"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
      >
        {children}
      </span>
      {/* Cyan glitch layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 text-neon-cyan opacity-60 animate-glitch-cyan"
        style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
      >
        {children}
      </span>
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image - darker */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/hero-bg-scene.webp')" }}
      />

      {/* Heavy dark overlays for maximum darkness */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      {/* Red neon ambient glow - bottom left */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-neon-red/8 blur-[120px]" />
      {/* Red neon ambient glow - top right */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-neon-red/6 blur-[100px]" />
      {/* Cyan accent glow - center bottom */}
      <div className="pointer-events-none absolute bottom-20 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-neon-cyan/4 blur-[100px]" />

      {/* Fog layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-80 animate-fog-drift-1 bg-gradient-to-t from-neon-red/6 via-neon-red/3 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-64 animate-fog-drift-2 bg-gradient-to-t from-background/90 via-neon-red/4 to-transparent opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/60 to-transparent" />
      </div>

      {/* Scanline effect - more visible */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-scanline absolute left-0 right-0 h-[2px] bg-neon-red/15 shadow-[0_0_20px_var(--neon-red-glow)]" />
      </div>

      {/* CRT scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)",
          backgroundSize: "100% 2px",
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[2]" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)"
      }} />

      {/* Particles */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Contamination warning badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded border border-neon-red/40 bg-neon-red/10 px-4 py-2 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-red opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-red" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-neon-red animate-flicker">
            {'// CONTAMINATION DETECTED \u2014 FREE ON STEAM'}
          </span>
        </motion.div>

        {/* Main heading with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-4 text-balance text-5xl font-bold uppercase leading-[0.9] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          <span className="block">Survive the</span>
          <GlitchText className="text-neon-red drop-shadow-[0_0_30px_var(--neon-red-glow)]">
            Contaminated
          </GlitchText>
          <span className="block">World</span>
        </motion.h1>

        {/* Red neon line divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mx-auto mb-6 h-px w-64 origin-center bg-gradient-to-r from-transparent via-neon-red to-transparent shadow-[0_0_10px_var(--neon-red-glow)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mb-10 max-w-2xl text-lg font-semibold uppercase tracking-[0.2em] text-muted-foreground/80 sm:text-xl"
        >
          <span className="text-neon-red/90">{'Loot'}</span>
          {' \u2022 '}
          <span className="text-foreground/70">{'Build'}</span>
          {' \u2022 '}
          <span className="text-neon-red/90">{'Fight'}</span>
          {' \u2022 '}
          <span className="text-foreground/70">{'Become Meta-Human'}</span>
        </motion.p>

        {/* Live player count FOMO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-emerald-400 sm:text-base">
            12,458 survivors online right now
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={AFFILIATE_LINK}
            id="cta-hero"
            className="cta-urgent group relative inline-flex items-center gap-3 overflow-hidden rounded bg-neon-red px-10 py-4 text-lg font-bold uppercase tracking-wider text-primary-foreground sm:px-14 sm:text-xl"
          >
            {/* Button glow effect */}
            <span className="absolute inset-0 animate-pulse-glow rounded" />
            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <svg
              className="relative z-10 h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <span className="relative z-10">Create Your Survivor Free on Steam</span>
          </a>
          <div className="mt-2 inline-flex items-center gap-2.5 rounded border-2 border-neon-red/60 bg-neon-red/15 px-6 py-2.5 shadow-[0_0_20px_var(--neon-red-glow),inset_0_0_12px_var(--neon-red-glow)] backdrop-blur-sm">
            <svg className="h-6 w-6 text-neon-red drop-shadow-[0_0_8px_var(--neon-red-glow)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 12V6.5l8-1.1V12H3zm0 .5h8v6.6l-8-1.1V12.5zm9-7.7L22 3.5v9h-10V4.8zm0 14.4V12.5h10v9l-10-1.3z" />
            </svg>
            <span className="text-base font-extrabold uppercase tracking-[0.2em] text-neon-red drop-shadow-[0_0_10px_var(--neon-red-glow)] sm:text-lg">
              Windows Only
            </span>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground/70">
              {'\u2022 US, CA & Europe'}
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/40">Scroll</span>
            <ChevronDown className="h-5 w-5 text-neon-red/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
