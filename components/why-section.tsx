"use client"

import { motion } from "framer-motion"
import { Zap, Globe, Gamepad2, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "100% Free to Play",
    description:
      "No hidden costs. Jump in, create your character, and start surviving immediately — all for free on Steam.",
  },
  {
    icon: Globe,
    title: "Massive Open World",
    description:
      "A sprawling contaminated landscape with diverse biomes, underground facilities, and secret locations to discover.",
  },
  {
    icon: Gamepad2,
    title: "Deep Progression System",
    description:
      "Level up, unlock Meta-Human abilities, research advanced technology, and evolve beyond your human limits.",
  },
  {
    icon: TrendingUp,
    title: "Constant Updates",
    description:
      "Regular content drops with new regions, creatures, weapons, events, and seasonal storylines keep the world alive.",
  },
]

export function WhySection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Why Play
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Why Once Human?
          </h3>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-card transition-all group-hover:border-neon-red/40 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]">
                <reason.icon className="h-7 w-7 text-neon-red transition-transform group-hover:scale-110" />
              </div>
              <h4 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
                {reason.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
