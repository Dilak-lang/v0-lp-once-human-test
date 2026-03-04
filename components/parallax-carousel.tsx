"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import { Brain, Swords, EyeOff, Paintbrush, CloudLightning } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    icon: Brain,
    title: "Skill Progression",
    subtitle: "RPG Systems",
    image: "/images/s4-skill.jpg",
    description: "Unlock powerful abilities across multiple skill trees and create your ultimate survivor build.",
  },
  {
    icon: Swords,
    title: "Epic Boss Battles",
    subtitle: "PvE Encounters",
    image: "/images/s4-boss.jpg",
    description: "Coordinate with your squad to take down massive Stardust-corrupted bosses in cinematic encounters.",
  },
  {
    icon: EyeOff,
    title: "Stealth & Tactics",
    subtitle: "Playstyles",
    image: "/images/s4-stealth.jpg",
    description: "Approach every situation your way: go in guns blazing or use stealth and cunning to survive.",
  },
  {
    icon: Paintbrush,
    title: "Full Customization",
    subtitle: "Character & Gear",
    image: "/images/s4-customize.jpg",
    description: "Personalize everything from your appearance to weapon skins and base decorations.",
  },
  {
    icon: CloudLightning,
    title: "Dynamic Weather",
    subtitle: "Living World",
    image: "/images/s4-weather.jpg",
    description: "Navigate acid rain storms, toxic fog, and other dynamic weather that changes gameplay.",
  },
]

export function ParallaxCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax mouse tracking
  const bgX = useTransform(mouseX, [-500, 500], [15, -15])
  const bgY = useTransform(mouseY, [-300, 300], [10, -10])
  const fgX = useTransform(mouseX, [-500, 500], [-20, 20])
  const fgY = useTransform(mouseY, [-300, 300], [-15, 15])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    },
    [mouseX, mouseY]
  )

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
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      onMouseMove={handleMouseMove}
    >
      {/* Background with parallax layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0f18] to-background" />

      {/* Parallax glow orbs */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-neon-red/5 blur-3xl"
        style={{ x: bgX, y: bgY }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-48 w-48 rounded-full bg-neon-cyan/5 blur-3xl"
        style={{ x: fgX, y: fgY }}
      />

      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-red/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-red">
            Progression
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Master Your Path
          </h3>
        </motion.div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {slides.map((slide, i) => {
              const isActive = i === selectedIndex
              return (
                <div
                  key={slide.title}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[42%] lg:basis-[33%]"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 0.92,
                      opacity: isActive ? 1 : 0.5,
                      filter: isActive ? "blur(0px)" : "blur(2px)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="group relative"
                  >
                    <div
                      className={cn(
                        "relative flex h-[440px] flex-col overflow-hidden rounded-2xl border transition-shadow",
                        isActive
                          ? "border-neon-red/30 shadow-[0_0_50px_rgba(220,38,38,0.12)]"
                          : "border-border/20"
                      )}
                    >
                      {/* Full image background */}
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/60 to-transparent" />

                      {/* Hover glow particles */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-red/10 blur-2xl" />
                      </div>

                      {/* Bottom content */}
                      <div className="relative z-10 mt-auto p-6">
                        <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neon-red">
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
                </div>
              )
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === selectedIndex
                  ? "w-8 bg-neon-red"
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
