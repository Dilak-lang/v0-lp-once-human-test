"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Sword, Car, Skull, Flag, Zap } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    icon: Sword,
    title: "Devastating Weapon Arsenal",
    subtitle: "Weapons >",
    stat: "50+",
    statLabel: "Unique Weapons",
    image: "/images/s2-weapons.jpg",
    description: "Collect and master an arsenal of over 50 unique weapons, from plasma rifles to melee devastators.",
  },
  {
    icon: Car,
    title: "Traverse the Wasteland",
    subtitle: "Vehicles >",
    stat: "12",
    statLabel: "Vehicle Types",
    image: "/images/s2-vehicles.jpg",
    description: "Build and customize rugged vehicles to explore the vast contaminated terrain at high speed.",
  },
  {
    icon: Skull,
    title: "Face Terrifying Bosses",
    subtitle: "Creatures >",
    stat: "30+",
    statLabel: "Boss Encounters",
    image: "/images/s2-creatures.jpg",
    description: "Fight mutated monstrosities and Stardust-corrupted bosses with devastating attack patterns.",
  },
  {
    icon: Flag,
    title: "Claim Your Territory",
    subtitle: "Territory >",
    stat: "8",
    statLabel: "Regions to Control",
    image: "/images/s2-territory.jpg",
    description: "Establish outposts, claim strategic locations, and expand your influence across the map.",
  },
  {
    icon: Zap,
    title: "Dynamic World Events",
    subtitle: "Events >",
    stat: "24/7",
    statLabel: "Live Events",
    image: "/images/s2-events.jpg",
    description: "Participate in massive world events — anomaly storms, invasions, and supply drops.",
  },
]

export function RevolutCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
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
      {/* Dark navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1225] to-[#0a0e1a]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Arsenal
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Combat & Conquest
          </h3>
        </motion.div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {slides.map((slide, i) => {
              const isActive = i === selectedIndex
              return (
                <motion.div
                  key={slide.title}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[55%] md:basis-[38%] lg:basis-[28%]"
                  animate={{
                    scale: isActive ? 1.03 : 1,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    className="group relative flex h-[440px] cursor-grab flex-col overflow-hidden rounded-2xl border border-border/50 bg-[#141929] active:cursor-grabbing"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 0 40px rgba(249, 115, 22, 0.15), 0 20px 60px rgba(0,0,0,0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Hover glow border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 0 1px rgba(249,115,22,0.3)" }} />

                    {/* Top content */}
                    <div className="relative z-10 flex flex-col gap-2 p-6 pb-3">
                      <h4 className="text-xl font-bold leading-tight text-foreground">
                        {slide.title}
                      </h4>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-orange-400">
                        <slide.icon className="h-4 w-4" />
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Image area */}
                    <div className="relative mt-auto flex-1">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#141929] via-[#141929]/40 to-transparent" />
                    </div>

                    {/* Bottom stat bar */}
                    <AnimatePresence>
                      <motion.div
                        className="absolute inset-x-4 bottom-4 z-10 flex items-center gap-3 rounded-xl border border-border/30 bg-[#0d1225]/80 px-4 py-3 backdrop-blur-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/20">
                          <slide.icon className="h-4 w-4 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {slide.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-orange-400">{slide.stat}</p>
                          <p className="text-[10px] text-muted-foreground">{slide.statLabel}</p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/0 to-transparent transition-all group-hover:via-orange-500/50" />
                  </motion.div>
                </motion.div>
              )
            })}
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
                  ? "w-8 bg-orange-400"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
