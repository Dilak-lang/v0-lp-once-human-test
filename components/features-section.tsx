"use client"

import { motion } from "framer-motion"
import { Map, Crosshair, Home, Skull, Users, Swords } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Map,
    title: "Explore the Map",
    description:
      "Traverse a vast contaminated open world filled with abandoned cities, eerie forests, and hidden underground facilities.",
    image: "/images/feature-explore.jpg",
  },
  {
    icon: Crosshair,
    title: "Loot & Craft",
    description:
      "Scavenge resources, find rare blueprints, and craft powerful weapons and gear to dominate the wasteland.",
    image: "/images/feature-loot.jpg",
  },
  {
    icon: Home,
    title: "Build Your Base",
    description:
      "Construct and fortify your shelter. Design elaborate defenses to protect your resources from threats.",
    image: "/images/feature-base.jpg",
  },
  {
    icon: Skull,
    title: "Fight Mutated Horrors",
    description:
      "Battle terrifying Stardust-corrupted creatures and supernatural bosses that lurk in the darkness.",
    image: "/images/feature-fight.jpg",
  },
  {
    icon: Users,
    title: "Play Solo or Squad",
    description:
      "Team up with friends in co-op or brave the contaminated world alone. Your survival, your rules.",
    image: "/images/feature-squad.jpg",
  },
  {
    icon: Swords,
    title: "PvE + Optional PvP",
    description:
      "Enjoy rich PvE content or opt into intense PvP combat against other survivors for ultimate stakes.",
    image: "/images/feature-pvp.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-red/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Gameplay
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Core Features
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-neon-red/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]"
            >
              {/* Card image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded bg-neon-red/20 backdrop-blur-sm">
                  <feature.icon className="h-5 w-5 text-neon-red" />
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h4 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-red/0 to-transparent transition-all group-hover:via-neon-red/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
