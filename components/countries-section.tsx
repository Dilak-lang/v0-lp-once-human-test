"use client"

import { motion } from "framer-motion"

const countries = [
  { code: "DE", name: "Germany", flag: "\uD83C\uDDE9\uD83C\uDDEA" },
  { code: "FR", name: "France", flag: "\uD83C\uDDEB\uD83C\uDDF7" },
  { code: "GB", name: "United Kingdom", flag: "\uD83C\uDDEC\uD83C\uDDE7" },
  { code: "AU", name: "Australia", flag: "\uD83C\uDDE6\uD83C\uDDFA" },
  { code: "NL", name: "Netherlands", flag: "\uD83C\uDDF3\uD83C\uDDF1" },
  { code: "AT", name: "Austria", flag: "\uD83C\uDDE6\uD83C\uDDF9" },
  { code: "NO", name: "Norway", flag: "\uD83C\uDDF3\uD83C\uDDF4" },
  { code: "CH", name: "Switzerland", flag: "\uD83C\uDDE8\uD83C\uDDED" },
  { code: "NZ", name: "New Zealand", flag: "\uD83C\uDDF3\uD83C\uDDFF" },
  { code: "CA", name: "Canada", flag: "\uD83C\uDDE8\uD83C\uDDE6" },
  { code: "US", name: "United States", flag: "\uD83C\uDDFA\uD83C\uDDF8" },
]

export function CountriesSection() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-red/20 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            Availability
          </h2>
          <h3 className="mb-8 text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
            Available in These Countries
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {countries.map((country, i) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 transition-all hover:border-neon-red/30"
              >
                <span className="text-2xl" role="img" aria-label={`${country.name} flag`}>
                  {country.flag}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {country.code}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
