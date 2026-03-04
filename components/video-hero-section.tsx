"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const AFFILIATE_LINK = "https://to.wendiro.com/u?k=24c3cf9a5dde4dd896352d1314e9aacd&via=26561"

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 24, mass: 0.8 },
  },
}

export function VideoHeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* YouTube video background via embed iframe */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/EFhlO-Bo7sE?autoplay=1&mute=1&loop=1&playlist=EFhlO-Bo7sE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
          title="Once Human Gameplay Background Video"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: 0 }}
        />
      </div>

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-black/50" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Top accent line */}
      <div className="pointer-events-none absolute left-0 top-0 z-[3] h-px w-full bg-gradient-to-r from-transparent via-neon-red/40 to-transparent" />

      {/* Content overlay */}
      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center"
      >
        {/* Warning badge */}
        <motion.div
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-2 rounded border border-neon-red/40 bg-neon-red/10 px-4 py-2 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-red opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-red" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-neon-red">
            {'Experience the Apocalypse'}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          variants={fadeUp}
          className="mb-4 text-balance text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block">A World Waiting</span>
          <span className="block text-neon-red drop-shadow-[0_0_25px_var(--neon-red-glow)]">
            To Be Explored
          </span>
        </motion.h2>

        {/* Red neon divider */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mb-6 h-px w-48 bg-gradient-to-r from-transparent via-neon-red to-transparent shadow-[0_0_10px_var(--neon-red-glow)]"
        />

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground/90 sm:text-xl"
        >
          Dive into a post-apocalyptic open world where every corner holds danger, mystery, and opportunity. Craft, fight, build, and survive together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={AFFILIATE_LINK}
            className="cta-urgent group relative inline-flex items-center gap-3 overflow-hidden rounded bg-neon-red px-10 py-4 text-lg font-bold uppercase tracking-wider text-primary-foreground sm:px-14"
          >
            <span className="absolute inset-0 animate-pulse-glow rounded" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <svg
              className="relative z-10 h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <span className="relative z-10">Play Free on Steam</span>
          </a>

          <a
            href="#trailer"
            className="group inline-flex items-center gap-2 rounded border border-border/60 bg-card/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-neon-cyan/40 hover:bg-card/50 hover:text-neon-cyan"
          >
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Watch Trailer
          </a>
        </motion.div>

        {/* Live player count */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-emerald-400">
            12,458 survivors online now
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/40">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 text-neon-red/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
