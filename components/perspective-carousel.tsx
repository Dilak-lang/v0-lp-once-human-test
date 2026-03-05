"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Ghost, Fish, Compass, CalendarDays, Store } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    icon: Ghost,
    title: "Capture Deviants",
    subtitle: "Companions",
    stat: "40+",
    statLabel: "Unique Deviants",
    badge: "Collectible",
    image: "/images/gallery-mutant-plant.jpg",
    description: "Discover and tame supernatural Deviant creatures to aid you in combat and exploration.",
  },
  {
    icon: Fish,
    title: "Life Beyond Survival",
    subtitle: "Activities",
    stat: "15+",
    statLabel: "Mini-Games",
    badge: "Relaxation",
    image: "/images/s3-fishing.jpg",
    description: "Fish, cook, decorate, and enjoy peaceful downtime activities between intense survival sessions.",
  },
  {
    icon: Compass,
    title: "Scenario Dungeons",
    subtitle: "PvE Content",
    stat: "20+",
    statLabel: "Dungeon Types",
    badge: "Challenge",
    image: "/images/gallery-spider-boss.jpg",
    description: "Raid handcrafted scenario dungeons with your squad for rare loot and epic boss fights.",
  },
  {
    icon: CalendarDays,
    title: "Seasonal Updates",
    subtitle: "Live Service",
    stat: "4",
    statLabel: "Seasons/Year",
    badge: "Fresh Content",
    image: "/images/s3-season.jpg",
    description: "New content every season: maps, weapons, Deviants, storylines, and limited-time events.",
  },
  {
    icon: Store,
    title: "Player Economy",
    subtitle: "Trading",
    stat: "1000+",
    statLabel: "Tradeable Items",
    badge: "Marketplace",
    image: "/images/gallery-motorcycle.jpg",
    description: "Trade resources, gear, and rare items with other players in a thriving in-game economy.",
  },
]

const badgeBounce = {
  hidden: { opacity: 0, scale: 0.5, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 600, damping: 12, mass: 0.5 },
  },
  exit: { opacity: 0, scale: 0.5, y: -10, transition: { duration: 0.15 } },
}

const statBadgeBounce = {
  hidden: { opacity: 0, y: 30, scale: 0.6 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 14, mass: 0.6, delay: 0.1 },
  },
  exit: { opacity: 0, y: 15, scale: 0.8, transition: { duration: 0.2 } },
}

export function PerspectiveCarousel() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-rotate
  useEffect(() => {
    if (isHovered || isDragging) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered, isDragging])

  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    dragStartX.current = clientX
  }, [])

  const handleDragEnd = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false)
    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX
    const diff = clientX - dragStartX.current
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        setActiveIndex((prev) => (prev + 1) % slides.length)
      } else {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
      }
    }
  }, [])

  const getCardStyle = (index: number) => {
    let offset = index - activeIndex
    if (offset > 2) offset -= slides.length
    if (offset < -2) offset += slides.length

    const absOffset = Math.abs(offset)
    const isCenter = offset === 0

    return {
      x: offset * 300,
      scale: isCenter ? 1.08 : Math.max(0.65, 1 - absOffset * 0.18),
      rotateY: offset * -15,
      z: isCenter ? 150 : -absOffset * 120,
      opacity: absOffset > 2 ? 0 : Math.max(0.25, 1 - absOffset * 0.35),
    }
  }

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0d1117] to-background" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Deep Dive
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Endless Content
          </h3>
        </motion.div>

        <div
          ref={containerRef}
          className="relative mx-auto flex h-[520px] items-center justify-center"
          style={{ perspective: "1400px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {slides.map((slide, i) => {
            const style = getCardStyle(i)
            const isCenter = i === activeIndex
            return (
              <motion.div
                key={slide.title}
                className="absolute cursor-grab active:cursor-grabbing"
                animate={style}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 20,
                  mass: 1,
                }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setActiveIndex(i)}
              >
                <motion.div
                  className={cn(
                    "group relative flex h-[420px] w-[300px] flex-col overflow-hidden rounded-2xl border bg-card sm:w-[340px]",
                    isCenter
                      ? "border-neon-cyan/40 shadow-[0_0_60px_rgba(6,182,212,0.2)]"
                      : "border-border/30"
                  )}
                  whileHover={isCenter ? {
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0 0 50px rgba(6,182,212,0.25), 0 25px 70px rgba(0,0,0,0.5)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  } : {}}
                >
                  {/* Badge - bounces in */}
                  <AnimatePresence>
                    {isCenter && (
                      <motion.div
                        variants={badgeBounce}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute right-4 top-4 z-20 rounded-full bg-neon-cyan/20 px-3 py-1 text-xs font-bold text-neon-cyan backdrop-blur-sm"
                      >
                        {slide.badge}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Top content */}
                  <div className="relative z-10 flex flex-col gap-2 p-6 pb-2">
                    <h4 className="text-xl font-bold leading-tight text-foreground">
                      {slide.title}
                    </h4>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-neon-cyan">
                      <slide.icon className="h-4 w-4" />
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative mt-auto flex-1">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-card via-card/30 to-transparent" />
                  </div>

                  {/* Floating stat badge - bounces in */}
                  <AnimatePresence>
                    {isCenter && (
                      <motion.div
                        variants={statBadgeBounce}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-x-4 bottom-4 z-10 flex items-center gap-3 rounded-xl border border-neon-cyan/20 bg-card/80 px-4 py-3 backdrop-blur-md"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-cyan/15">
                          <slide.icon className="h-4 w-4 text-neon-cyan" />
                        </div>
                        <p className="flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {slide.description}
                        </p>
                        <div className="text-right">
                          <p className="text-lg font-bold text-neon-cyan">{slide.stat}</p>
                          <p className="text-[10px] text-muted-foreground">{slide.statLabel}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Navigation dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-8 bg-neon-cyan"
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
