"use client"

import { motion } from "framer-motion"
import { Monitor, Apple, Tv, CheckCircle2, XCircle } from "lucide-react"

const requirements = [
  {
    category: "OS",
    minimum: "Windows 10 64-bit",
    recommended: "Windows 10/11 64-bit",
  },
  {
    category: "Processor",
    minimum: "Intel i5-4460 / AMD FX-6300",
    recommended: "Intel i7-8700 / AMD Ryzen 5 3600",
  },
  {
    category: "Memory",
    minimum: "8 GB RAM",
    recommended: "16 GB RAM",
  },
  {
    category: "Graphics",
    minimum: "GTX 960 / RX 470",
    recommended: "RTX 2060 / RX 5700",
  },
  {
    category: "Storage",
    minimum: "40 GB available",
    recommended: "40 GB SSD",
  },
  {
    category: "DirectX",
    minimum: "Version 11",
    recommended: "Version 12",
  },
]

const platforms = [
  { icon: Monitor, name: "Windows PC", supported: true },
  { icon: Apple, name: "macOS", supported: false },
  { icon: Tv, name: "Console", supported: false },
]

export function RequirementsSection() {
  return (
    <section id="requirements" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            System
          </h2>
          <h3 className="text-balance text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Requirements
          </h3>
        </motion.div>

        {/* Platform availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap justify-center gap-4"
        >
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`flex items-center gap-3 rounded-lg border px-5 py-3 ${
                p.supported
                  ? "border-neon-red/40 bg-neon-red/5"
                  : "border-border bg-secondary/50 opacity-50"
              }`}
            >
              <p.icon
                className={`h-5 w-5 ${
                  p.supported ? "text-neon-red" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-sm font-bold uppercase tracking-wider ${
                  p.supported ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {p.name}
              </span>
              {p.supported ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <XCircle className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Specs table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden rounded-lg border border-border"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Component
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Minimum
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neon-cyan">
                    Recommended
                  </th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((req, i) => (
                  <tr
                    key={req.category}
                    className={`border-b border-border/50 ${
                      i % 2 === 0 ? "bg-card" : "bg-secondary/20"
                    }`}
                  >
                    <td className="px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                      {req.category}
                    </td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">
                      {req.minimum}
                    </td>
                    <td className="px-6 py-3 text-sm text-foreground">
                      {req.recommended}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
