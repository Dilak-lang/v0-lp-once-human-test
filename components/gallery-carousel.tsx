"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/images/gallery-red-petals.png",
    title: "The Awakening",
    category: "Art",
  },
  {
    src: "/images/gallery-titans.jpg",
    title: "Titan Invasion",
    category: "Concept Art",
  },
  {
    src: "/images/gallery-bus-monster.jpg",
    title: "The Bus Walker",
    category: "Creatures",
  },
  {
    src: "/images/gallery-hazmat.jpg",
    title: "Stardust Encounter",
    category: "Atmosphere",
  },
  {
    src: "/images/gallery-red-creature.jpg",
    title: "Night Hunt",
    category: "Gameplay",
  },
  {
    src: "/images/gallery-spider-boss.jpg",
    title: "Boss Raid",
    category: "Combat",
  },
  {
    src: "/images/gallery-pink-warrior.jpg",
    title: "Meta-Human Warrior",
    category: "Characters",
  },
  {
    src: "/images/gallery-cyberbike.jpg",
    title: "Wasteland Rider",
    category: "Vehicles",
  },
  {
    src: "/images/gallery-motorcycle.jpg",
    title: "Open Road",
    category: "Exploration",
  },
  {
    src: "/images/gallery-green-hand.png",
    title: "Stardust Control",
    category: "Lore",
  },
  {
    src: "/images/gallery-mutant-plant.jpg",
    title: "Mutated Flora",
    category: "World",
  },
  {
    src: "/images/gallery-mutants-swamp.jpg",
    title: "Contaminated Zone",
    category: "Environment",
  },
  {
    src: "/images/gallery-fanart.jpg",
    title: "Once Human",
    category: "Fan Art",
  },
  {
    src: "/images/gallery-bus-icon.jpg",
    title: "Deviations",
    category: "Creatures",
  },
]

export function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Auto-advance the main featured image
  useEffect(() => {
    if (!isAutoPlaying || lightboxOpen) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, lightboxOpen])

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      pauseAutoPlay()
      setActiveIndex(index)
    },
    [pauseAutoPlay]
  )

  const handlePrev = useCallback(() => {
    pauseAutoPlay()
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [pauseAutoPlay])

  const handleNext = useCallback(() => {
    pauseAutoPlay()
    setActiveIndex((prev) => (prev + 1) % galleryImages.length)
  }, [pauseAutoPlay])

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  const lightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }, [])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowLeft") lightboxPrev()
      if (e.key === "ArrowRight") lightboxNext()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxOpen, lightboxPrev, lightboxNext])

  // Scroll thumbnail strip to keep active thumbnail visible
  useEffect(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const activeThumb = container.children[activeIndex] as HTMLElement
    if (activeThumb) {
      const scrollLeft =
        activeThumb.offsetLeft - container.clientWidth / 2 + activeThumb.clientWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: "smooth" })
    }
  }, [activeIndex])

  const current = galleryImages[activeIndex]

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0e14] to-background" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-red/30 to-transparent" />

      {/* Ambient glow behind the featured image */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-red/4 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-red">
            Gallery
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Scenes from the Wasteland
          </h3>
        </motion.div>

        {/* Featured image display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto mb-6 aspect-video max-w-5xl overflow-hidden rounded-2xl border border-border/40"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.title}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e14]/40 via-transparent to-[#0a0e14]/40" />
            </motion.div>
          </AnimatePresence>

          {/* Title + category overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="mb-1 inline-block rounded-full border border-neon-red/30 bg-neon-red/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-neon-red backdrop-blur-sm">
                  {current.category}
                </span>
                <h4 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {current.title}
                </h4>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => openLightbox(activeIndex)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:bg-card hover:text-neon-red"
              aria-label="View fullscreen"
            >
              <Expand className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/40 bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:bg-card hover:text-neon-red"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/40 bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:bg-card hover:text-neon-red"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-border/20">
            <motion.div
              key={`progress-${activeIndex}`}
              className="h-full bg-neon-red"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div
          ref={scrollRef}
          className="mx-auto flex max-w-5xl gap-2 overflow-x-auto pb-2 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={cn(
                "relative shrink-0 overflow-hidden rounded-lg transition-all duration-300",
                i === activeIndex
                  ? "h-16 w-28 ring-2 ring-neon-red ring-offset-2 ring-offset-background sm:h-20 sm:w-36"
                  : "h-16 w-28 opacity-40 hover:opacity-70 sm:h-20 sm:w-36"
              )}
              aria-label={`View ${img.title}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
              />
              {i === activeIndex && (
                <div className="absolute inset-0 border-2 border-neon-red/50 rounded-lg" />
              )}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="mt-4 text-center">
          <span className="text-sm font-semibold text-muted-foreground">
            <span className="text-neon-red">{String(activeIndex + 1).padStart(2, "0")}</span>
            {" / "}
            {String(galleryImages.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative mx-4 max-h-[85vh] max-w-6xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-[90vw] max-w-6xl">
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Lightbox title */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-center">
                <span className="inline-block rounded-full border border-neon-red/30 bg-card/80 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-sm">
                  {galleryImages[lightboxIndex].title}
                  <span className="ml-2 text-muted-foreground">
                    {"// "}
                    {galleryImages[lightboxIndex].category}
                  </span>
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur-sm transition-colors hover:bg-neon-red hover:text-primary-foreground"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Lightbox arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  lightboxPrev()
                }}
                className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur-sm transition-colors hover:bg-neon-red hover:text-primary-foreground"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  lightboxNext()
                }}
                className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur-sm transition-colors hover:bg-neon-red hover:text-primary-foreground"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
