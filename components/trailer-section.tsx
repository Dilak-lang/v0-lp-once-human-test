"use client"

import { motion } from "framer-motion"

export function TrailerSection() {
  return (
    <section id="trailer" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Watch
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Official Trailer
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Glow frame */}
          <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-neon-red/30 via-transparent to-neon-cyan/30 blur-sm" />

          <div className="relative overflow-hidden rounded-lg border border-border bg-card">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/XTwOAAGhLCk?autoplay=1&mute=1&rel=0&modestbranding=1"
                title="Once Human Official Trailer"
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
