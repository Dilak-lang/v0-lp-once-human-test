"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const AFFILIATE_LINK = "#steam-affiliate-link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Trailer", href: "#trailer" },
    { label: "Requirements", href: "#requirements" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-[0_4px_30px_rgba(220,38,38,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="h-8 w-8 rounded bg-neon-red flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm font-sans">OH</span>
              </div>
              <div className="absolute inset-0 rounded bg-neon-red/30 blur-md" />
            </div>
            <span className="text-lg font-bold tracking-wider uppercase text-foreground">
              Once Human
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-red"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-1.5 rounded border-2 border-neon-red/50 bg-neon-red/15 px-3.5 py-1.5 shadow-[0_0_14px_var(--neon-red-glow)]">
            <svg className="h-4 w-4 text-neon-red drop-shadow-[0_0_6px_var(--neon-red-glow)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 12V6.5l8-1.1V12H3zm0 .5h8v6.6l-8-1.1V12.5zm9-7.7L22 3.5v9h-10V4.8zm0 14.4V12.5h10v9l-10-1.3z" />
            </svg>
            <span className="text-sm font-extrabold uppercase tracking-wider text-neon-red drop-shadow-[0_0_8px_var(--neon-red-glow)]">
              Windows Only
            </span>
          </div>
          <a
            href={AFFILIATE_LINK}
            id="cta-navbar"
            className="cta-urgent relative rounded bg-neon-red px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground"
          >
            Play FREE on Steam
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background/98 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-red"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-1.5 self-start rounded border-2 border-neon-red/50 bg-neon-red/15 px-3.5 py-1.5 shadow-[0_0_14px_var(--neon-red-glow)]">
                <svg className="h-4 w-4 text-neon-red drop-shadow-[0_0_6px_var(--neon-red-glow)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3 12V6.5l8-1.1V12H3zm0 .5h8v6.6l-8-1.1V12.5zm9-7.7L22 3.5v9h-10V4.8zm0 14.4V12.5h10v9l-10-1.3z" />
                </svg>
                <span className="text-sm font-extrabold uppercase tracking-wider text-neon-red drop-shadow-[0_0_8px_var(--neon-red-glow)]">
                  Windows Only
                </span>
              </div>
              <a
                href={AFFILIATE_LINK}
                id="cta-navbar-mobile"
                className="cta-urgent rounded bg-neon-red px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground"
              >
                Play FREE on Steam
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
