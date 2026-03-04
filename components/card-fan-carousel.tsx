"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Flame, Wheat, Sparkles, Camera, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    icon: Flame,
    title: "Raid Fortresses",
    subtitle: "End-Game Content",
    stat: "Legendary",
    image: "/images/s5-raid.jpg",
    description: "Storm massive end-game fortresses with your squad for the rarest loot in the game.",
  },
  {
    icon: Wheat,
    title: "Farm & Sustain",
    subtitle: "Survival Systems",
    stat: "Essential",
    image: "/images/s5-farming.jpg",
    description: "Grow food, manage resources, and sustain your territory through careful planning.",
  },
  {
    icon: Sparkles,
    title: "Anomaly Rifts",
    subtitle: "Supernatural Events",
    stat: "Mythic",
    image: "/images/s5-anomaly.jpg",
    description: "Enter unstable anomaly rifts for high-risk, high-reward encounters with warped reality.",
  },
  {
    icon: Camera,
    title: "Photo Mode",
    subtitle: "Capture Moments",
    stat: "Creative",
    image: "/images/s5-photo.jpg",
    description: "Capture stunning screenshots with a full-featured photo mode and share with the community.",
  },
  {
    icon: Moon,
    title: "Night Terrors",
    subtitle: "Horror Elements",
    stat: "Extreme",
    image: "/images/s5-night.jpg",
    description: "Survive the horrifying night cycle when the most dangerous creatures emerge from the dark.",
  },
]

export function CardFanCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const dragStartX = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

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
    const isActive = offset === 0

    if (isActive) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        rotateZ: 0,
        rotateY: 0,
        zIndex: 50,
        opacity: 1,
      }
    }

    return {
      x: offset * 60,
      y: absOffset * 15,
      scale: Math.max(0.75, 1 - absOffset * 0.1),
      rotateZ: offset * 5,
      rotateY: offset * -8,
      zIndex: 40 - absOffset * 10,
      opacity: absOffset > 2 ? 0 : Math.max(0.3, 1 - absOffset * 0.25),
    }
  }

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0c0c14] to-background" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Discover
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            World Activities
          </h3>
        </motion.div>

        <div
          className="relative mx-auto flex h-[520px] items-center justify-center"
          style={{ perspective: "1000px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {slides.map((slide, i) => {
            const style = getCardStyle(i)
            const isActive = i === activeIndex

            return (
              <motion.div
                key={slide.title}
                className="absolute cursor-grab active:cursor-grabbing"
                animate={{
                  x: style.x,
                  y: style.y,
                  scale: style.scale,
                  rotateZ: style.rotateZ,
                  rotateY: style.rotateY,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setActiveIndex(i)}
              >
                <div
                  className={cn(
                    "group relative flex h-[400px] w-[280px] flex-col overflow-hidden rounded-2xl border sm:w-[340px]",
                    isActive
                      ? "border-orange-500/40 shadow-[0_0_50px_rgba(249,115,22,0.15)]"
                      : "border-border/20 bg-card"
                  )}
                >
                  {/* Full background image */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-[#0c0c14]/50 to-transparent" />

                  {/* Shine/reflection on active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "200%", opacity: 0.15 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 z-10 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-foreground to-transparent"
                      />
                    )}
                  </AnimatePresence>

                  {/* Stat badge top-right */}
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 backdrop-blur-sm">
                    {slide.stat}
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-10 mt-auto p-6">
                    <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
                      <slide.icon className="h-3.5 w-3.5" />
                      {slide.subtitle}
                    </div>
                    <h4 className="mb-2 text-2xl font-bold leading-tight text-foreground">
                      {slide.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === activeIndex
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
