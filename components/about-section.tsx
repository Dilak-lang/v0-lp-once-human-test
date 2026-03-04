"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Discover
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What is Once Human?
          </h3>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Once Human is a{" "}
              <span className="font-semibold text-foreground">
                free-to-play multiplayer open-world survival game
              </span>{" "}
              set in a contaminated post-apocalyptic world. Stardust has
              corrupted everything — mutating creatures, warping reality, and
              leaving behind supernatural threats at every turn.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Explore a massive open world, scavenge for resources, craft
              devastating weapons, and build impenetrable bases. Team up with
              friends or go solo as you fight to survive against mutated horrors
              and other players. Your choices shape your survival.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Survival", "Open World", "Co-op", "Base Building", "Horror"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-lg border border-border">
              <div className="aspect-video">
                <iframe
                  src="https://store.steampowered.com/widget/2139460/"
                  className="h-full w-full"
                  title="Once Human on Steam"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Red glow accent */}
              <div className="absolute -bottom-2 -left-2 -right-2 h-1 bg-neon-red blur-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
