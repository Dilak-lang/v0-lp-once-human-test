"use client"

import { useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Map, Crosshair, Home, Users, Wrench } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const coreFeatures = [
  {
    icon: Map,
    title: "Explore a Vast Open World",
    subtitle: "Open World >",
    description:
      "Traverse massive contaminated landscapes filled with abandoned cities, eerie forests, and hidden underground facilities teeming with loot.",
    image: "/images/carousel-explore.jpg",
  },
  {
    icon: Crosshair,
    title: "Intense Combat Against Mutated Horrors",
    subtitle: "Combat >",
    description:
      "Battle terrifying Stardust-corrupted creatures and supernatural bosses with an arsenal of devastating weapons.",
    image: "/images/carousel-combat.jpg",
  },
  {
    icon: Home,
    title: "Build & Fortify Your Base",
    subtitle: "Base Building >",
    description:
      "Construct elaborate shelters, design defenses, and create the ultimate stronghold to protect your resources.",
    image: "/images/carousel-base.jpg",
  },
  {
    icon: Users,
    title: "Team Up or Go Solo",
    subtitle: "Multiplayer >",
    description:
      "Join forces with friends in seamless co-op or brave the contaminated world alone. Your survival, your rules.",
    image: "/images/carousel-coop.jpg",
  },
  {
    icon: Wrench,
    title: "Craft Powerful Gear & Weapons",
    subtitle: "Crafting >",
    description:
      "Scavenge rare blueprints and resources to forge devastating weapons and specialized gear for any situation.",
    image: "/images/carousel-craft.jpg",
  },
]

export function CoreFeaturesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Gameplay
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Core Features
          </h3>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-5">
              {coreFeatures.map((feature, i) => (
                <div
                  key={feature.title}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[40%] lg:basis-[30%]"
                >
                  <div className="group relative flex h-[420px] flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-neon-red/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                    {/* Top content */}
                    <div className="relative z-10 flex flex-col gap-2 p-6 pb-3">
                      <h4 className="text-xl font-bold leading-tight text-foreground">
                        {feature.title}
                      </h4>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-neon-cyan">
                        <feature.icon className="h-4 w-4" />
                        {feature.subtitle}
                      </span>
                    </div>

                    {/* Image area */}
                    <div className="relative mt-auto flex-1">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay from top */}
                      <div className="absolute inset-0 bg-gradient-to-b from-card via-card/40 to-transparent" />
                    </div>

                    {/* Bottom info bar */}
                    <div className="absolute inset-x-4 bottom-4 z-10 flex items-center gap-3 rounded-xl border border-border/50 bg-card/80 px-4 py-3 backdrop-blur-md">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-red/20">
                        <feature.icon className="h-4 w-4 text-neon-red" />
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {feature.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-red/0 to-transparent transition-all group-hover:via-neon-red/50" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  i === selectedIndex
                    ? "w-8 bg-neon-cyan"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
