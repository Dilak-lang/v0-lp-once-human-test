"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Sword, Car, Skull, Flag, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    icon: Sword,
    title: "Devastating Weapon Arsenal",
    subtitle: "Weapons",
    tags: ["50+ Weapons", "Unique Mods", "Legendary Tier"],
    image: "/images/s2-weapons.jpg",
    description: "Collect and master an arsenal of unique weapons from plasma rifles to melee devastators. Upgrade, modify, and unleash devastating combinations.",
  },
  {
    icon: Car,
    title: "Traverse the Wasteland",
    subtitle: "Vehicles",
    tags: ["12 Types", "Customizable", "Off-Road"],
    image: "/images/s2-vehicles.jpg",
    description: "Build and customize rugged vehicles to explore the vast contaminated terrain at speed. Outfit them with weapons and armor.",
  },
  {
    icon: Skull,
    title: "Face Terrifying Bosses",
    subtitle: "Boss Fights",
    tags: ["30+ Bosses", "Raid Mechanics", "Epic Loot"],
    image: "/images/s2-creatures.jpg",
    description: "Fight mutated monstrosities with devastating attack patterns. Coordinate squad tactics to bring down world bosses.",
  },
  {
    icon: Flag,
    title: "Claim Your Territory",
    subtitle: "Territories",
    tags: ["8 Regions", "Resource Wars", "Alliances"],
    image: "/images/s2-territory.jpg",
    description: "Establish outposts, claim strategic locations, and form alliances to control valuable resources across the map.",
  },
  {
    icon: Zap,
    title: "Dynamic World Events",
    subtitle: "Live Events",
    tags: ["24/7 Active", "Rewards", "Limited Time"],
    image: "/images/s2-events.jpg",
    description: "Participate in massive world events including anomaly storms, invasions, and rare supply drops with exclusive rewards.",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.85,
  }),
}

const childStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const childItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
}

export function PresenceCarousel() {
  const [[currentIndex, direction], setSlide] = useState([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const paginate = useCallback(
    (newDirection: number) => {
      setSlide(([prev]) => {
        const next = (prev + newDirection + slides.length) % slides.length
        return [next, newDirection]
      })
    },
    []
  )

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, paginate])

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 8000)
  }, [])

  const handlePrev = useCallback(() => {
    pauseAutoPlay()
    paginate(-1)
  }, [pauseAutoPlay, paginate])

  const handleNext = useCallback(() => {
    pauseAutoPlay()
    paginate(1)
  }, [pauseAutoPlay, paginate])

  const slide = slides[currentIndex]

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0e0e18] to-background" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Showcase
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Feature Spotlight
          </h3>
        </motion.div>

        {/* Main carousel area */}
        <div className="relative mx-auto h-[480px] overflow-hidden rounded-2xl border border-border/40 bg-card/30 sm:h-[420px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 250, damping: 30, mass: 0.8 }}
              className="absolute inset-0"
            >
              {/* Image background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e18] via-[#0e0e18]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e18]/60 to-transparent" />

              {/* Content with staggered animation */}
              <motion.div
                variants={childStagger}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex h-full flex-col justify-center p-8 sm:max-w-[55%] sm:p-12"
              >
                <motion.div variants={childItem} className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-cyan/15">
                    <slide.icon className="h-4 w-4 text-neon-cyan" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neon-cyan">
                    {slide.subtitle}
                  </span>
                </motion.div>

                <motion.h4
                  variants={childItem}
                  className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl"
                >
                  {slide.title}
                </motion.h4>

                <motion.p
                  variants={childItem}
                  className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {slide.description}
                </motion.p>

                <motion.div variants={childItem} className="flex flex-wrap gap-2">
                  {slide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold text-neon-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/40 bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:bg-card hover:text-neon-cyan"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/40 bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:bg-card hover:text-neon-cyan"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-border/20">
            <motion.div
              key={`progress-${currentIndex}`}
              className="h-full bg-neon-cyan"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                pauseAutoPlay()
                setSlide([i, i > currentIndex ? 1 : -1])
              }}
              className={cn(
                "flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all",
                i === currentIndex
                  ? "border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan"
                  : "border-border/30 text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              <s.icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{s.subtitle}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
